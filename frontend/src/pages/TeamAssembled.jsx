import api from "../api";
import { useState, useEffect } from "react";
import Character from "../components/Character";

function TeamAssembled() {
  const [characters, setCharacters] = useState([]);
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

  return (
    <div>
      <h2>Team Assembled</h2>
      {characters.map((character) => (
        <Character
          character={character}
          onDelete={deleteCharacter}
          key={character.id}
        />
      ))}
    </div>
  );
}

export default TeamAssembled;
