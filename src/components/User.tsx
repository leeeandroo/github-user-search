function User({ userUrl }) {
  console.log(userUrl);
  const user = {
    login: 'john-smilga',
    id: 42133389,
    node_id: 'MDQ6VXNlcjQyMTMzMzg5',
    avatar_url: 'https://avatars.githubusercontent.com/u/42133389?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/john-smilga',
    html_url: 'https://github.com/john-smilga',
    followers_url: 'https://api.github.com/users/john-smilga/followers',
    following_url: 'https://api.github.com/users/john-smilga/following{/other_user}',
    gists_url: 'https://api.github.com/users/john-smilga/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/john-smilga/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/john-smilga/subscriptions',
    organizations_url: 'https://api.github.com/users/john-smilga/orgs',
    repos_url: 'https://api.github.com/users/john-smilga/repos',
    events_url: 'https://api.github.com/users/john-smilga/events{/privacy}',
    received_events_url: 'https://api.github.com/users/john-smilga/received_events',
    type: 'User',
    site_admin: false,
    name: 'John Smilga',
    company: 'Coding Addict',
    blog: 'www.johnsmilga.com',
    location: 'Los Angeles',
    email: null,
    hireable: null,
    bio: 'Creator of Coding Addict',
    twitter_username: 'john_smilga',
    public_repos: 226,
    public_gists: 0,
    followers: 11785,
    following: 0,
    created_at: '2018-08-06T06:48:23Z',
    updated_at: '2022-06-09T22:41:09Z',
  };

  return (
    <div className="w-full lg:w-1/5 bg-white rounded-lg border border-gray-200 shadow-md p-5 flex-col">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={user.avatar_url}
          alt={`${user.name} ${user.login}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
        <span className="text-sm text-gray-500">
          {user.login} <small>@{user.company}</small>
        </span>
        <p>{user.bio}</p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <span>{user.followers} follower(s)</span>
          <span>{user.following} following</span>
        </div>
        <div className="flex mb-4 space-x-3 md:mb-6">
          <span>{user.public_repos} repositorie(s)</span>
          <span>{user.public_gists} gist(s)</span>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href={user.html_url}
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
