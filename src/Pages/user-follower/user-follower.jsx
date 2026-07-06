import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFollowers } from "../../Services/github.service";
import Header from "../../Component/Header";
import {
  FollowersContainer,
  FollowerCard,
  FollowerImg,
  FollowerInfo,
  FollowerName,
  FollowerBio,
  Arrow,
} from "./follower.styles";

const Followers = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowers(username);
      setFollowers(data);
    };

    fetchFollowers();
  }, [username]);

  if (!followers) {
    return <h2>Loading...</h2>;
  }

  return (
    <FollowersContainer>
      <div className="followers-container">
        <Header username={username} />
        <h2>Followers of {username}</h2>
        <hr />
        {followers.map((follower) => (
          <FollowerCard
            key={follower.id}
            className="follower-card"
            onClick={() => navigate(`/user/${follower.login}`)}
          >
            <FollowerImg
              src={follower.avatar_url}
              alt={follower.login}
              className="follower-img"
            />

            <FollowerInfo>
              <FollowerName>{follower.login}</FollowerName>
              <FollowerBio>Click to view profile</FollowerBio>
            </FollowerInfo>

            <Arrow>→</Arrow>
          </FollowerCard>
        ))}
      </div>
    </FollowersContainer>
  );
};

export default Followers;
