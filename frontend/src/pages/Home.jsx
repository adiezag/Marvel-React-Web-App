import { useState, useEffect } from "react";
import api from "../api";
import Character from "../components/Character";
function Home() {
  const [characters, setCharacters] = useState([]);
  const [character_id, setCharacter_id] = useState("");
  const [char_name, setChar_name] = useState("");
  const [char_description, setChar_description] = useState("");
  const [char_url, setChar_url] = useState("");

  useEffect(() => {
    getCharacters();
  }, []);
  const getCharacters = () => {
    api
      .get("/api/characters/")
      .then((res) => res.data)
      .then((data) => {
        setCharacters(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  const deleteCharacter = (id) => {
    api
      .delete(`api/characters/delete/${id}`)
      .then((res) => {
        if (res.status === 204) alert("Character deleted");
        else alert("Failed to delete character");
        getCharacters();
      })
      .catch((error) => alert(error));
  };

  const createCharacter = (e) => {
    e.preventDefault();
    api
      .post("api/characters/", {
        character_id,
        char_name,
        char_description,
        char_url,
      })
      .then((res) => {
        if (res.status === 201) alert("Character created");
        else alert("Failed to create a character");
        getCharacters();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Characters</h2>
        {characters.map((character) => (
          <Character
            character={character}
            onDelete={deleteCharacter}
            key={character.id}
          />
        ))}
      </div>
      <div>
        <h2>Create a character</h2>
        <form onSubmit={createCharacter}>
          <label htmlFor="character_id">Character_id:</label>
          <br />
          <input
            type="text"
            id="character_id"
            name="character_id"
            required
            onChange={(e) => setCharacter_id(e.target.value)}
            value={character_id}
          />
          <br />
          <label htmlFor="char_name">Character name:</label>
          <br />
          <input
            type="text"
            id="char_name"
            name="char_name"
            required
            onChange={(e) => setChar_name(e.target.value)}
            value={char_name}
          />
          <br />
          <label htmlFor="char_description">Character description:</label>
          <br />
          <input
            type="text"
            id="char_description"
            name="char_description"
            required
            onChange={(e) => setChar_description(e.target.value)}
            value={char_description}
          />
          <br />
          <label htmlFor="char_url">Character url:</label>
          <br />
          <input
            type="text"
            id="char_url"
            name="char_url"
            required
            onChange={(e) => setChar_url(e.target.value)}
            value={char_url}
          />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Home;
