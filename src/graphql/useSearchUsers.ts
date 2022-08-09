import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';

import { QueryResult } from './interfaces';

const API_URL = `https://api.github.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
  },
});

export function useSearchUsers(
  query: string,
  pageSize: number,
  after?: string | null,
  before?: string | null,
) {
  const first = after || (!after && !before) ? pageSize : null;
  const last = before ? pageSize : null;

  return useQuery(['posts', query, first, after, last, before], async (): Promise<QueryResult> => {
    const { search } = await graphQLClient.request(
      gql`
        query search($query: String!, $first: Int, $after: String, $last: Int, $before: String) {
          search(
            query: $query
            type: USER
            first: $first
            after: $after
            last: $last
            before: $before
          ) {
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
            }
            nodes {
              __typename
              ... on Organization {
                avatarUrl
                name
                login
                id
                url
              }
              ... on User {
                avatarUrl
                company
                followers {
                  totalCount
                }
                following {
                  totalCount
                }
                gists {
                  totalCount
                }
                id
                login
                name
                repositories {
                  totalCount
                }
                starredRepositories {
                  totalCount
                }
                url
              }
            }
            userCount
          }
        }
      `,
      { query, first, after, last, before },
    );

    return search;
  });
}
