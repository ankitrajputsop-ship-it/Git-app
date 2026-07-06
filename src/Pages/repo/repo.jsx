import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepos } from "../../Services/github.service";
import Header from "../../Component/Header";
import {
  ReposContainer,
  RepoCard,
  RepoInfo,
  RepoTitle,
  RepoDescription,
  RepoDetails,
  RepoLink,
} from "./Repo.styles";

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getRepos(username);
      setRepos(data);
    };

    fetchRepos();
  }, [username]);

  if (!repos) {
    return <h2>Loading...</h2>;
  }

  if (repos.length === 0) {
    return <h2>No Repository Found</h2>;
  }

  return (
    <ReposContainer>
      <Header username={username} />

      <h2>Repositories of {username}</h2>

      <hr />

      {repos.map((repo) => (
        <RepoCard key={repo.id}>
          <RepoInfo>
            <RepoTitle>{repo.name}</RepoTitle>

            <RepoDescription>
              {repo.description ? repo.description : "No description available"}
            </RepoDescription>

            <RepoDetails>
              <span>⭐ {repo.stargazers_count}</span>

              <span>🍴 {repo.forks_count}</span>

              <span>{repo.language || "N/A"}</span>
            </RepoDetails>

            <RepoLink
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              View Repository →
            </RepoLink>
          </RepoInfo>
        </RepoCard>
      ))}
    </ReposContainer>
  );
};

export default Repos;
