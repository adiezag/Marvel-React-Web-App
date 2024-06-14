// import React from "react";

// function Character({ character, onDelete }) {
//   return (
//     <div>
//       <p>{character.character_id}</p>
//       <p>{character.char_name}</p>
//       <p>{character.char_description}</p>
//       <p>{character.char_url}</p>
//       <button onClick={() => onDelete(character.id)}>Delete</button>
//     </div>
//   );
// }
// export default Character;

import React from "react";

function Character({ character, onDelete }) {
  return (
    <div>
      <div className="box-content">
        <div className="right-box">
          <img src={character.char_url} />
          {/* <h1>{character.char_url}</h1> */}
        </div>
        <div className="left-box">
          <h1>{character.character_id}</h1>
          <h1>{character.char_name}</h1>
          <h4>{character.char_description}</h4>
        </div>
      </div>
      <button onClick={() => onDelete(character.id)}>Delete</button>
    </div>
  );
}
export default Character;
