export type QueryPageInfo = {
  endCursor: string;
  startCursor: string;
};

export type QueryResult = {
  pageInfo: QueryPageInfo;
  nodes: Array<QueryResultUser>;
  totalCount: number;
};
type Counter = {
  totalCount: number;
};

export type QueryResultUser = {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  company: string;
  id: string;
  url: string;
  followers: Counter;
  following: Counter;
  starredRepositories: Counter;
  gists: Counter;
  repositories: Counter;
};
