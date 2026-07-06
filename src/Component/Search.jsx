import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Searchbox, Searchinput, Searchboxbtn } from "./Search.styles";
const Search = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <Searchbox>
      <Searchinput
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Searchboxbtn onClick={() => navigate(`/user/${username}`)}>
        Search
      </Searchboxbtn>
    </Searchbox>
  );
};

export default Search;
