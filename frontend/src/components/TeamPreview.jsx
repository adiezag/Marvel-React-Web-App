import React from "react";

function TeamPreview({ character, onDelete }) {
  return (
    <div>
      <div>
        <div>
          <h1>{character.character_id}</h1>
          <h1>{character.char_name}</h1>
        </div>
      </div>
      <button onClick={() => onDelete(character.id)}>Delete</button>
    </div>
  );
}
export default TeamPreview;
