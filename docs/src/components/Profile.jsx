import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUserProfile,
  getUserRepos,
  getUserFollowing,
  getUserFollowers,
} from "../../API/api.js";

export default function Profile() {
  const { username } = useParams();
  const [fetchedRepos, setFetchedRepos] = useState([]);
  const [repos, setRepos] = useState([]);

  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);

  const [fetchedFollowers, setFetchedFollowers] = useState([]);
  const [followers, setFollowers] = useState([]);

  const [fetchedFollowing, setFetchedFollowing] = useState([]);
  const [followings, setFollowing] = useState([]);

  const imageUrls = [
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`,
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`,
    `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical`,
  ];

  const hideAll = () => {
    setImages([]);
    setRepos([]);
    setFollowers([]);
    setFollowing([]);
  };

  const showStats = () => {
    hideAll();
    setImages(imageUrls); // Set images when button is clicked
  };
  const showRepos = () => {
    hideAll();
    setRepos(fetchedRepos);
  };
  const showFollowing = () => {
    hideAll();
    setFollowing(fetchedFollowing);
  };
  const showFollowers = () => {
    hideAll();
    setFollowers(fetchedFollowers);
  };

  async function fetchAll() {
    const user = await getUserProfile(username);
    const repos = await getUserRepos(username);
    const followers = await getUserFollowers(username);
    const following = await getUserFollowing(username);
    setFetchedFollowers(followers);
    setFetchedFollowing(following);
    setUser(user);
    setFetchedRepos(repos);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  if (!user) {
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  }
  return (
    <div>
      {user.status != 404 && user.type != "Organization" && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 w-full full-width scrollable-content">
          {/* Profile Header */}
          <h1 className="text-3xl font-semibold text-center mb-8 text-white">{`${user.login}'s Profile`}</h1>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-xl p-6 space-y-6 border-2 border-gray-200">
            <div className="flex items-center space-x-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img
                  src={user.avatar_url}
                  alt="User's Photo"
                  className="w-32 h-32 rounded-full border-4 border-gray-300 hover:scale-105 transition-all duration-300"
                />
                <br />
                {/* Location */}
                <p className="text-sm text-gray-500">
                  Location: {user.location ? user.location : "No Location"}
                </p>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Display Name: {user.name}
                </h2>
                <p className="text-xl text-gray-600">@{user.login}</p>
                <p className="text-lg text-gray-700">
                  Bio: {user.bio ? user.bio : "No Bio"}
                </p>

                {/* Join Date */}
                <p className="text-gray-600">
                  Joined:{" "}
                  {new Date(user.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: "short",
                  })}
                </p>

                {/* Public Repos */}
                <p className="text-gray-600">
                  Public Repos: {user.public_repos}
                </p>

                {/* Profile Views */}
                <img
                  src={`https://komarev.com/ghpvc/?username=${username}&color=blueviolet&style=flat-square&abbreviated=true&label=Github+Profile+Views`}
                  className="w-36"
                />

                {/* Followers and Following */}
                <div className="flex space-x-12">
                  <div className="text-center">
                    <p className="font-semibold text-lg">{user.followers}</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{user.following}</p>
                    <p className="text-sm text-gray-500">Following</p>
                  </div>
                </div>
                <a
                  href={`https://github.com/${username}`}
                  className="text-white mt-2 inline-block hover:underline"
                  style={{ color: "black" }} // Inline style to ensure the color is white
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Stats Button */}
          <div className="mt-6 text-center">
            <button
              onClick={showStats}
              className="bg-blue-500 text-black py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Stats
            </button>{" "}
            <button
              onClick={showRepos}
              className="bg-blue-500 text-black py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Repos
            </button>{" "}
            <button
              onClick={showFollowing}
              className="bg-blue-500 text-black py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Following
            </button>{" "}
            <button
              onClick={showFollowers}
              className="bg-blue-500 text-black py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Followers
            </button>
          </div>
          <br />
          <br />
          <div className="flex space-x-4">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Image ${index}`} />
            ))}
          </div>
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 border rounded-xl shadow">
              <h3 className="text-lg font-bold">{repo.name}</h3>
              <p className="text-sm text-gray-600">{repo.description}</p>
              <div className="flex justify-between text-sm mt-2">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                className="text-white mt-2 inline-block hover:underline"
                style={{ color: "white" }} // Inline style to ensure the color is white
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
          {followings.map((following) => (
            <div key={following.id} className="p-4 border rounded-xl shadow">
              <img
                src={following.avatar_url}
                alt="Following User's Photo"
                className="w-24 h-24 rounded-full border-4 border-gray-300 hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-lg font-bold">{following.login}</h3>
              <p className="text-sm text-gray-600">
                {following.bio ? following.bio : "No Bio"}
              </p>
              <a
                href={`https://github.com/${following.login}`}
                className="text-white mt-2 inline-block hover:underline"
                style={{ color: "white" }} // Inline style to ensure the color is white
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <br />
              {following.type == "User" && (
                <a
                  href={`https://insanerest.github.io/GitProfileStats/#/profile/${following.login}`}
                  className="text-white mt-2 inline-block hover:underline"
                  style={{ color: "white" }} // Inline style to ensure the color is white
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitProfileStats
                </a>
              )}
            </div>
          ))}
          {followers.map((follower) => (
            <div key={follower.id} className="p-4 border rounded-xl shadow">
              <img
                src={follower.avatar_url}
                alt="Follower User's Photo"
                className="w-24 h-24 rounded-full border-4 border-gray-300 hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-lg font-bold">{follower.login}</h3>
              <p className="text-sm text-gray-600">
                {follower.bio ? follower.bio : "No Bio"}
              </p>
              <a
                href={`https://github.com/${follower.login}`}
                className="text-white mt-2 inline-block hover:underline"
                style={{ color: "white" }} // Inline style to ensure the color is white
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <br />
              {follower.type == "User" && (
                <a
                  href={`https://insanerest.github.io/GitProfileStats/#/profile/${follower.login}`}
                  className="text-white mt-2 inline-block hover:underline"
                  style={{ color: "white" }} // Inline style to ensure the color is white
                  target="_blank"
                >
                  View on GitProfileStats
                </a>
              )}
            </div>
          ))}
        </div>
      )}
      {user.status == 404 && (
        <h1 className="text-3xl font-semibold text-center mb-8 text-black">
          {" "}
          User Not Found
        </h1>
      )}
      {user.type == "Organization" && (
        <h1 className="text-3xl font-semibold text-center mb-8 text-black">
          {" "}
          User Not Found
        </h1>
      )}
    </div>
  );
}
