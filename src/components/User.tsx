import { QueryResultUser } from '../graphql/types';

interface UserProps {
  user: QueryResultUser;
}

function getUserCompany(company: string) {
  if (!company) {
    return '';
  }

  if (company.startsWith('http')) {
    return company;
  }

  if (company.startsWith('@')) {
    return company;
  }

  return `@${company}`;
}

function User(props: UserProps) {
  const { user } = props;
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={user.avatarUrl}
          alt={`${user.name} ${user.login}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
        <span className="text-sm text-gray-500">
          {user.login} <small>{getUserCompany(user.company)}</small>
        </span>
        <p>{user.bio}</p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <span>
            <strong>{user.followers.totalCount}</strong> follower(s)
          </span>
          <span>
            <strong>{user.following.totalCount}</strong> following
          </span>
        </div>
        <div className="flex space-x-3">
          <span>
            <strong>{user.repositories.totalCount}</strong> repositorie(s)
          </span>
          <span>
            <strong>{user.gists.totalCount}</strong> gist(s)
          </span>
        </div>
        <div className="flex mb-4 space-x-3 md:mb-6">
          <span>
            <strong>{user.starredRepositories.totalCount}</strong> starred repositorie(s)
          </span>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href={user.url}
            target="_blank"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            rel="noreferrer"
          >
            See GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default User;
