import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../Services/github.service";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button";
import Header from "../../Component/Header";
import {
  UserProfileContainer,
  UserCard,
  Avatar,
  UserName,
  UserLogin,
  UserInfo,
  Divider,
  WebsiteLink,
  ButtonGroup,
} from "./UserProfile.styles";

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(username);
        setUser(user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setError(err.message || "Failed to fetch user");
      }
    };

    fetchUser();
  }, [username]);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <UserProfileContainer>
      <UserCard>
        <Header username={username} />

        <Avatar src={user.avatar_url} alt={user.login} />

        <UserName>{user.name}</UserName>

        <UserLogin>@{user.login}</UserLogin>

        <UserInfo>{user.bio}</UserInfo>

        <Divider />

        <UserInfo>
          <strong>Repositories :</strong> {user.public_repos}
        </UserInfo>

        <UserInfo>
          <strong>Company :</strong> {user.company}
        </UserInfo>

        <UserInfo>
          <strong>Location :</strong> {user.location}
        </UserInfo>

        <UserInfo>
          <strong>Website :</strong>{" "}
          {user.blog ? (
            <WebsiteLink href={user.blog} target="_blank" rel="noreferrer">
              {user.blog}
            </WebsiteLink>
          ) : (
            "N/A"
          )}
        </UserInfo>

        <ButtonGroup>
          <Button onClick={() => navigate(`/user/${username}/follower`)}>
            User Followers
          </Button>

          <Button onClick={() => navigate(`/user/${username}/following`)}>
            User Following
          </Button>

          <Button onClick={() => navigate(`/user/${username}/gists`)}>
            User Gists
          </Button>
          <Button onClick={() => navigate(`/user/${username}/repos`)}>
            User Repos
          </Button>
        </ButtonGroup>
      </UserCard>
    </UserProfileContainer>
  );
};

export default UserProfile;
