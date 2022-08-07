import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';

import { QueryResult } from './types';

const API_URL = `https://api.github.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
  },
});

export function useSearchUsers(query: string) {
  return useQuery(['posts', query], async (): Promise<QueryResult> => {
    const { search } = await graphQLClient.request(
      gql`
        query search($query: String!) {
          search(query: $query, type: USER, first: 10) {
            pageInfo {
              endCursor
              startCursor
            }
            nodes {
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
      { query },
    );

    return search;
  });
}
