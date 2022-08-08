import { QueryResult } from '../graphql/interfaces';

interface PaginationProps {
  page: number;
  pageSize: number;
  result: QueryResult;
  onClickNextPage: React.MouseEventHandler<HTMLElement>;
  onClickPrevPage: React.MouseEventHandler<HTMLElement>;
}

export default function Pagination(props: PaginationProps) {
  const { onClickNextPage, onClickPrevPage, page, pageSize, result } = props;

  const startCount = (page - 1) * pageSize + 1;
  const endCount = result.userCount > pageSize ? page * pageSize : result.userCount;

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900">{startCount}</span> to{' '}
        <span className="font-semibold text-gray-900 ">{endCount}</span> of{' '}
        <span className="font-semibold text-gray-900">{result?.userCount}</span> Users
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
          onClick={onClickPrevPage}
          disabled={!result.pageInfo.hasPreviousPage}
          data-test-id="button-prev"
        >
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

        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
          onClick={onClickNextPage}
          disabled={!result.pageInfo.hasNextPage}
          data-test-id="button-next"
        >
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
  );
}
