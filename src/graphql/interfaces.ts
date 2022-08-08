export interface QueryPageInfo {
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface QueryResult {
  pageInfo: QueryPageInfo;
  nodes: Array<QueryResultUser>;
  userCount: number;
}

interface Counter {
  totalCount: number;
}

export interface QueryResultUser {
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
}
