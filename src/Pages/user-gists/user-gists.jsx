import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGists } from "../../Services/github.service";
import Header from "../../Component/Header";
import {
  GistsContainer,
  GistCard,
  GistInfo,
  GistTitle,
  GistText,
  GistLink,
  Arrow,
} from "./Gists.styles";

const Gists = () => {
  const { username } = useParams();
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const fetchGists = async () => {
      const data = await getGists(username);
      setGists(data);
    };

    fetchGists();
  }, [username]);

  if (gists.length === 0) {
    return <h2>No Public Gists Found</h2>;
  }

  return (
    <GistsContainer>
      <Header username={username} />

      <h2>Public Gists</h2>

      {gists.map((gist) => (
        <GistCard key={gist.id}>
          <GistInfo>
            <GistTitle>{gist.description || "No Description"}</GistTitle>

            <GistText>
              <strong>Gist ID :</strong> {gist.id}
            </GistText>

            <GistLink href={gist.html_url} target="_blank" rel="noreferrer">
              View Gist
            </GistLink>
          </GistInfo>

          <Arrow>→</Arrow>
        </GistCard>
      ))}
    </GistsContainer>
  );
};

export default Gists;
