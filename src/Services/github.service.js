import api from "./api";

const fetchData = async (url) => {
  try {
    console.log("github.service: requesting", url);
    const { data } = await api.get(url);
    console.log("github.service: received", url, data && data.login);
    if (typeof window !== "undefined") window.__lastGitUser = data;
    return data;
  } catch (err) {
    console.error("github.service: error fetching", url, err);
    if (typeof window !== "undefined") window.__lastGitError = err;
    throw err;
  }
};

export const getUser = (username) =>
  fetchData(`/users/${username}`);

export const getFollowers = (username) =>
  fetchData(`/users/${username}/followers`);

export const getFollowing = (username) =>
  fetchData(`/users/${username}/following`);

export const getGists = (username) =>
  fetchData(`/users/${username}/gists`);

export const getRepos = (username) =>
  fetchData(`/users/${username}/repos`);

