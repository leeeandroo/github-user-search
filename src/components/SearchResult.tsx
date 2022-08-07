import User from './User';

import { useSearchUsers } from '../graphql/useSearchUsers';
import { QueryResultUser } from '../graphql/types';

type SearchResultProps = {
  query: string;
};

function SearchResult(props: SearchResultProps) {
  const { query } = props;
  const { data: result, isLoading } = useSearchUsers(query);

  if (isLoading) {
    return null;
  }

  if (!result) {
    return <p>No user found.</p>;
  }

  const { nodes } = result;

  return (
    <>
      <div className="grid gap-4 grid-cols-5 mb-4 m-10 rounded gap-x-3">
        {nodes.map((user: QueryResultUser) => {
          if (!user.login) {
            return null;
          }
          return <User key={user.id} user={user} />;
        })}
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900">10</span> to{' '}
          <span className="font-semibold text-gray-900 ">10</span> of{' '}
          <span className="font-semibold text-gray-900">{result?.totalCount}</span> Users
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
