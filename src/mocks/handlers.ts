import { graphql } from 'msw';

const MOCK_RESPONSE = {
  search: {
    pageInfo: { endCursor: 'Y3Vyc29yOjI=', startCursor: 'Y3Vyc29yOjE=' },
    nodes: [
      {
        __typename: 'User',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2144796?u=974e17a6424e58e4a40fc1040aca16e5761d2afd&v=4',
        company: '@audibene-gmbh',
        followers: { totalCount: 15 },
        following: { totalCount: 32 },
        gists: { totalCount: 6 },
        id: 'MDQ6VXNlcjIxNDQ3OTY=',
        login: 'leeeandroo',
        name: 'Leandro ',
        repositories: { totalCount: 34 },
        starredRepositories: { totalCount: 158 },
        url: 'https://github.com/leeeandroo',
      },
      {
        __typename: 'User',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2144796?u=974e17a6424e58e4a40fc1040aca16e5761d2afd&v=4',
        company: 'audibene-gmbh',
        followers: { totalCount: 15 },
        following: { totalCount: 32 },
        gists: { totalCount: 6 },
        id: 'MDQ6VXNlcjIxNDQ3OTX=',
        login: 'leeeandroo2',
        name: 'Leandro2',
        repositories: { totalCount: 34 },
        starredRepositories: { totalCount: 158 },
        url: 'https://github.com/leeeandroo2',
      },
      {
        __typename: 'User',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2144796?u=974e17a6424e58e4a40fc1040aca16e5761d2afd&v=4',
        company: '',
        followers: { totalCount: 15 },
        following: { totalCount: 32 },
        gists: { totalCount: 6 },
        id: 'MDQ6VXNlcjIxNDQ3OTZ=',
        login: 'leeeandroo3',
        name: 'Leandro3',
        repositories: { totalCount: 34 },
        starredRepositories: { totalCount: 158 },
        url: 'https://github.com/leeeandroo3',
      },
      {
        __typename: 'User',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2144796?u=974e17a6424e58e4a40fc1040aca16e5761d2afd&v=4',
        company: 'http://',
        followers: { totalCount: 15 },
        following: { totalCount: 32 },
        gists: { totalCount: 6 },
        id: 'MDQ6VXNlcjIxNDQ3OTI=',
        login: 'leeeandroo3',
        name: 'Leandro3',
        repositories: { totalCount: 34 },
        starredRepositories: { totalCount: 158 },
        url: 'https://github.com/leeeandroo3',
      },
      {
        __typename: 'Organization',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2144796?u=974e17a6424e58e4a40fc1040aca16e5761d2afd&v=4',

        id: 'MDQ6VXNlcjIxNDQ3OTW=',
        login: 'leeeandrooorg',
        name: 'leeeandrooorg',
        url: 'https://github.com/leeeandrooorg',
      },
    ],
    userCount: 1,
  },
};

export const handlers = [
  graphql.query('search', (req, res, ctx) => {
    return res(ctx.data(MOCK_RESPONSE));
  }),
];
