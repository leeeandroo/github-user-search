import { useEffect, useState } from 'react';

import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import User from './User';

import { useSearchUsers } from '../graphql/useSearchUsers';
import { QueryResultUser } from '../graphql/interfaces';

interface SearchResultProps {
  query: string;
}

const PAGE_SIZE = 10;

enum PaginationAction {
  Next = 1,
  Prev,
}

function SearchResult(props: SearchResultProps) {
  const { query } = props;
  const [page, setPage] = useState(1);
  const [after, setAfter] = useState<null | string>(null);
  const [before, setBefore] = useState<null | string>(null);
  const [pagination, setPagination] = useState(PaginationAction.Next);
  const { data: result, isLoading } = useSearchUsers(query, PAGE_SIZE, after, before);

  useEffect(() => {
    if (result) {
      setAfter(null);
      setBefore(null);

      if (pagination === PaginationAction.Next) {
        setAfter(result.pageInfo.endCursor);
      }
      if (pagination === PaginationAction.Prev) {
        setBefore(result.pageInfo.startCursor);
      }
    }
  }, [pagination, page]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!result || result.userCount === 0) {
    return <p>No user found.</p>;
  }

  const { nodes } = result;

  function onClickNextPage() {
    setPagination(PaginationAction.Next);
    setPage(page + 1);
  }

  function onClickPrevPage() {
    setPagination(PaginationAction.Prev);
    setPage(page - 1);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mb-4 m-10 rounded gap-4 gap-x-3 search-result">
        {nodes.map((user: QueryResultUser) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <Pagination
        result={result}
        pageSize={PAGE_SIZE}
        page={page}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
      />
    </>
  );
}

export default SearchResult;
