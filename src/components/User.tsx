import { QueryResultUser } from '../graphql/interfaces';

interface UserProps {
  user: QueryResultUser;
}

function getUserCompany(company?: string) {
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

function OrganizationIcon() {
  return (
    <svg
      viewBox="0 0 384 512"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="user"
      className="flex-none w-6 h-full mr-3"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 448 512"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="user"
      className="flex-none w-6 h-full mr-3"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
    </svg>
  );
}

function User(props: UserProps) {
  const { user } = props;
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 search-result-card">
      <div className="flex flex-col items-center pb-10 relative">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={user.avatarUrl}
          alt={`${user.name} ${user.login}`}
        />
        <span className="absolute top-0 right-0">
          {user.__typename === 'User' ? <UserIcon /> : <OrganizationIcon />}
        </span>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
        <span className="text-sm text-gray-500">
          {user.login} <small>{getUserCompany(user.company)}</small>
        </span>
        <p>{user.bio}</p>

        {user.__typename === 'User' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 mt-4 md:mt-6 text-sm">
              <div>
                <strong>{user.followers?.totalCount}</strong> follower(s)
              </div>
              <div>
                <strong>{user.following?.totalCount}</strong> following
              </div>

              <div>
                <strong>{user.repositories?.totalCount}</strong> repositories
              </div>
              <div>
                <strong>{user.gists?.totalCount}</strong> gist(s)
              </div>
              <div className="lg:col-span-2">
                <strong>{user.starredRepositories?.totalCount}</strong> starred repositories
              </div>
            </div>
          </>
        )}
        <div className="mt-4 space-x-3 md:mt-6">
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
