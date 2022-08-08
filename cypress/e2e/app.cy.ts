describe('User Search', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('User Search');
  });

  it('search for user and see the result', () => {
    const MOCK_RESPONSES: any = {
      search: {
        data: {
          search: {
            pageInfo: { endCursor: 'Y3Vyc29yOjI=', startCursor: 'Y3Vyc29yOjE=' },
            nodes: [
              {
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
            ],
            userCount: 1,
          },
        },
      },
    };
    cy.intercept('POST', 'https://api.github.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        body: MOCK_RESPONSES[req.body.operationName],
      });
    }).as('searchUsers');
    cy.visit('/');
    cy.get('input').type('leeeandroo');
    cy.get('form').submit();

    cy.wait('@searchUsers');

    cy.get('.search-result').find('.search-result-card').should('have.length', 1);

    cy.contains('Leandro');
    cy.contains('leeeandroo');
    cy.contains('@audibene-gmbh');
    cy.contains('15 follower(s)');
    cy.contains('32 following');
    cy.contains('34 repositorie(s)');
    cy.contains('6 gist(s)');
    cy.contains('158 starred repositorie(s)');
  });

  it('search for user and see the result', () => {
    const MOCK_RESPONSES: any = {
      search: {
        data: {
          search: {
            pageInfo: {},
            nodes: [],
            userCount: 0,
          },
        },
      },
    };
    cy.intercept('POST', 'https://api.github.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        body: MOCK_RESPONSES[req.body.operationName],
      });
    }).as('searchUsers');
    cy.visit('/');
    cy.get('input').type('inexistent user');
    cy.get('form').submit();

    cy.wait('@searchUsers');

    cy.contains('No user found.');
  });
});

export {};
