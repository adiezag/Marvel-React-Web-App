import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";
import TeamPreview from "./TeamPreview";
function MarvelCharacter({ data }) {
  const navigate = useNavigate();
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
  const addCharacter = (
    character_id,
    char_name,
    char_description,
    char_url
  ) => {
    // e.preventDefault();
    const temp = character_id.toString();
    const foundElelment = characters.find((item) => item.character_id === temp);
    console.log(foundElelment);
    // if (foundElelment) console.log("found");
    console.log("character_id:", character_id, typeof character_id);
    console.log(
      "characters: ",
      characters,
      typeof characters,
      characters.length
    );

    if (!foundElelment) {
      if (characters.length >= 5) {
        alert("Can't add more than five characters");
      } else {
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
      }
    } else {
      alert("character already in team");
    }
  };

  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div className="char" key={item.id}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
                <div className="middle">
                  <button
                    onClick={() =>
                      addCharacter(
                        item.id,
                        item.name,
                        item.description,
                        `${item.thumbnail.path}.${item.thumbnail.extension}`
                      )
                    }
                  >
                    <img src="./images/plus.svg"></img>
                  </button>
                  <button onClick={() => navigate(`/${item.id}`)}>
                    <img src="./images/glass.svg"></img>
                  </button>
                </div>

                <div className="title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })
        : ""}
      <div>
        <h2>Characters</h2>
        {characters.map((character) => (
          <TeamPreview
            character={character}
            onDelete={deleteCharacter}
            key={character.id}
          />
        ))}
      </div>
    </>
  );
}
export default MarvelCharacter;

// *************************** Test *******************************
// The following function is run when api calls reach 3000, so it's just for testing
// The same for MarvelHome.jsx
// ***************************  *******************************

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import api from "../api";
// import Character from "./Character";
// import TeamPreview from "./TeamPreview";
// function MarvelCharacter({ data }) {
//   const navigate = useNavigate();
//   const handleClick = (id) => {
//     console.log(id);
//   };

//   const [characters, setCharacters] = useState([]);
//   useEffect(() => {
//     getCharacters();
//   }, []);
//   const getCharacters = () => {
//     api
//       .get("/api/characters/")
//       .then((res) => res.data)
//       .then((data) => {
//         setCharacters(data);
//         console.log(data);
//       })
//       .catch((err) => alert(err));
//   };
//   const deleteCharacter = (id) => {
//     api
//       .delete(`api/characters/delete/${id}`)
//       .then((res) => {
//         if (res.status === 204) alert("Character deleted");
//         else alert("Failed to delete character");
//         getCharacters();
//       })
//       .catch((error) => alert(error));
//   };
//   const arr = [
//     {
//       id: "10435",
//       hero: "peter",
//       description: "friendly neighborhood",
//       image_url: "spiderman.com",
//     },
//     {
//       id: "10010",
//       hero: "tony",
//       description: "billionaire tech guy",
//       image_url: "ironman.com",
//     },
//     {
//       id: "12102",
//       hero: "steve",
//       description: "american veteran",
//       image_url: "captain.com",
//     },
//     {
//       id: "10102",
//       hero: "thor",
//       description: "guy from asgard",
//       image_url: "thor.com",
//     },
//     {
//       id: "1",
//       hero: "bruce",
//       description: "have some issues",
//       image_url: "hulk.com",
//     },
//     {
//       id: "2",
//       hero: "wanda",
//       description: "a nice witch",
//       image_url: "wanda.com",
//     },
//     {
//       id: "45",
//       hero: "pietro",
//       description: "wanda's brother",
//       image_url: "quicksilver.com",
//     },
//     {
//       id: "100",
//       hero: "logan",
//       description: "older than steve",
//       image_url: "logan.com",
//     },
//   ];

//   const addCharacter = (
//     character_id,
//     char_name,
//     char_description,
//     char_url
//   ) => {
//     // e.preventDefault();
//     const foundElelment = characters.find(
//       (item) => item.character_id === character_id
//     );
//     // if (foundElelment) console.log("found");
//     console.log("character_id:", character_id, typeof character_id);
//     console.log(
//       "characters: ",
//       characters,
//       typeof characters,
//       characters.length
//     );

//     if (!foundElelment) {
//       if (characters.length >= 5) {
//         alert("Can't add more than five characters");
//       } else {
//         api
//           .post("api/characters/", {
//             character_id,
//             char_name,
//             char_description,
//             char_url,
//           })
//           .then((res) => {
//             if (res.status === 201) alert("Character created");
//             else alert("Failed to create a character");
//             getCharacters();
//           })
//           .catch((err) => alert(err));
//       }
//     } else {
//       alert("character already in team");
//     }
//   };

//   return (
//     <>
//       {arr
//         ? arr.map((item) => {
//             return (
//               <div className="char" key={item.id}>
//                 <img src="./images/spidey.jpg" alt="" className="image" />
//                 <div className="middle">
//                   {/* <button onClick={() => handleClick(item.id)}> */}
//                   <button
//                     onClick={() =>
//                       addCharacter(
//                         item.id,
//                         item.hero,
//                         item.description,
//                         item.image_url
//                       )
//                     }
//                   >
//                     <img src="./images/plus.svg"></img>
//                   </button>
//                   <button>
//                     <img src="./images/glass.svg"></img>
//                   </button>
//                 </div>

//                 <div className="title">
//                   <h3>{item.hero}</h3>
//                 </div>
//               </div>
//             );
//           })
//         : ""}
//       <div>
//         <h2>Characters</h2>
//         {characters.map((character) => (
//           <TeamPreview
//             character={character}
//             onDelete={deleteCharacter}
//             key={character.id}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
// export default MarvelCharacter;

// ***************************  *******************************
