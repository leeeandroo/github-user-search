import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import User from './User';

import { useSearchUsers } from '../graphql/useSearchUsers';
import { QueryResultUser } from '../graphql/interfaces';

interface SearchResultProps {
  query: string;
}

const PAGE_SIZE = 10;

function SearchResult(props: SearchResultProps) {
  const { query } = props;
  const [page, setPage] = useState(1);
  const [after, setAfter] = useState<null | string>(null);
  const { data: result, isLoading } = useSearchUsers(query, PAGE_SIZE, after);

  useEffect(() => {
    if (result) {
      setAfter(result.pageInfo.endCursor);
    }
  }, [page]);

  if (isLoading) {
    return null;
  }

  if (!result || result.userCount === 0) {
    return <p>No user found.</p>;
  }

  const { nodes } = result;

  function onClickNextPage() {
    setPage(page + 1);
  }

  function onClickPrevPage() {
    setPage(page - 1);
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-5 mb-4 m-10 rounded gap-x-3 search-result">
        {nodes.map((user: QueryResultUser) => {
          if (!user.login) {
            return null;
          }
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
