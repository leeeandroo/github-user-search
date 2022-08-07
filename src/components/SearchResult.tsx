import User from './User';

function SearchResult() {
  const result = {
    total_count: 2,
    incomplete_results: false,
    items: [
      {
        login: 'leeeandroo',
        id: 2144796,
        node_id: 'MDQ6VXNlcjIxNDQ3OTY=',
        avatar_url: 'https://avatars.githubusercontent.com/u/2144796?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/leeeandroo',
        html_url: 'https://github.com/leeeandroo',
        followers_url: 'https://api.github.com/users/leeeandroo/followers',
        following_url: 'https://api.github.com/users/leeeandroo/following{/other_user}',
        gists_url: 'https://api.github.com/users/leeeandroo/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/leeeandroo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/leeeandroo/subscriptions',
        organizations_url: 'https://api.github.com/users/leeeandroo/orgs',
        repos_url: 'https://api.github.com/users/leeeandroo/repos',
        events_url: 'https://api.github.com/users/leeeandroo/events{/privacy}',
        received_events_url: 'https://api.github.com/users/leeeandroo/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'leeeandrooo',
        id: 42454469,
        node_id: 'MDQ6VXNlcjQyNDU0NDY5',
        avatar_url: 'https://avatars.githubusercontent.com/u/42454469?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/leeeandrooo',
        html_url: 'https://github.com/leeeandrooo',
        followers_url: 'https://api.github.com/users/leeeandrooo/followers',
        following_url: 'https://api.github.com/users/leeeandrooo/following{/other_user}',
        gists_url: 'https://api.github.com/users/leeeandrooo/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/leeeandrooo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/leeeandrooo/subscriptions',
        organizations_url: 'https://api.github.com/users/leeeandrooo/orgs',
        repos_url: 'https://api.github.com/users/leeeandrooo/repos',
        events_url: 'https://api.github.com/users/leeeandrooo/events{/privacy}',
        received_events_url: 'https://api.github.com/users/leeeandrooo/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
    ],
  };

  return (
    <>
      <div className="lg:flex mb-4 m-10 rounded gap-x-4">
        {result.items.map((user) => {
          return <User key={user.id} userUrl={user.url} />;
        })}
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900">10</span> to{' '}
          <span className="font-semibold text-gray-900 ">10</span> of{' '}
          <span className="font-semibold text-gray-900">{result.total_count}</span> Users
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              aria-hidden="true"
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              aria-hidden="true"
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
