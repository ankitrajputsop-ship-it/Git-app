import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFollowing } from "../../Services/github.service";
import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";
// import "./user-following.css";
import {
  FollowingContainer,
  FollowingCard,
  FollowingImg,
  FollowingInfo,
  Followinginfo3,
  Arrow
} from "./following.styles";

const Following = () => {
  const { username } = useParams();
  const [following, setFollowing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowing(username);
      setFollowing(data);
    };

    fetchFollowers();
  }, [username]);

  if (following.length === 0) {
    return <h2>No Following Found</h2>;
  }

  return (
    <FollowingContainer>
      <Header username={username} />
      {following.map((following) => (
        <FollowingCard
          key={following.id}
          onClick={() => navigate(`/user/${following.login}`)}
          className="following-card"
        >
          <FollowingImg
            src={following.avatar_url}
            className="following-img"
            alt={following.login}
          />
          <FollowingInfo>
            <Followinginfo3>{following.login}</Followinginfo3>
          </FollowingInfo>
          <Arrow>→</Arrow>
        </FollowingCard>
      ))}
    </FollowingContainer>
  );
};

export default Following;
