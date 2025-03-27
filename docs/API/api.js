

// Define the base URL for GitHub API
const GITHUB_API_URL = "https://api.github.com";

// Function to get user profile data
const getUserProfile = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data)
    return data // Returns user profile data
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return {status: 404}
  }
};

const getUserRepos = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`, {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data)
    return data // Returns user repositories data
  } catch (error) {
    console.error("Error fetching user repositories:", error);
    return null;
  }
}

const getUserFollowing = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/following`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return data; // Returns user repositories data
  } catch (error) {
    console.error("Error fetching user repositories:", error);
    return null;
  }
};

const getUserFollowers = async (username) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/followers`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data; // Returns user repositories data
  } catch (error) {
    console.error("Error fetching user repositories:", error);
    return null;
  }
};

// Function to get user repositories
export {getUserProfile, getUserRepos, getUserFollowing, getUserFollowers}
