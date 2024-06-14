import React from "react";
import { useState, useEffect } from "react";
import Marvel from "../components/Marvel";
import MarvelCharacter from "../components/MarvelCharacter";
import "../styles/styles.css";
import axios from "axios";
function MarvelHome() {
  const hash_key = import.meta.env.VITE_HASH_KEY;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;
  // console.log(hash_key);
  // console.log(public_key);
  const [url, setUrl] = useState(
    `https://gateway.marvel.com/v1/public/characters?limit=6&apikey=${public_key}&hash=${hash_key}&ts=1`
  );
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetch();
  }, [url]);

  const searchCharacter = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=${public_key}&hash=${hash_key}&ts=1`
    );
  };
  return (
    <div>
      <div>
        <Marvel />
      </div>
      <div>Marvel Comics</div>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchCharacter}
        />
      </div>
      <div className="content">
        {!item ? <p>Not Found</p> : <MarvelCharacter data={item} />}
      </div>
    </div>
  );
}

export default MarvelHome;

// *************************** Test *******************************
// The following function is run when api calls reach 3000, so it's just for testing
// The same for MarvelCharacter.jsx
// ***************************  *******************************

// import React from "react";
// import { useState, useEffect } from "react";
// import Marvel from "../components/Marvel";
// import MarvelCharacter from "../components/MarvelCharacter";
// import "../styles/styles.css";
// import axios from "axios";
// function MarvelHome() {
// const hash_key = import.meta.env.VITE_HASH_KEY;
// const public_key = import.meta.env.VITE_PUBLIC_KEY;
//   //   const [url, setUrl] = useState(
//   //     `https://gateway.marvel.com/v1/public/characters?limit=6&apikey=${public_key}&hash=${hash_key}&ts=1`
//   //   );
//   //   const [item, setItem] = useState();
//   //   const [search, setSearch] = useState("");
//   //   useEffect(() => {
//   //     const fetch = async () => {
//   //       const res = await axios.get(url);
//   //       setItem(res.data.data.results);
//   //     };
//   //     fetch();
//   //   }, [url]);

//   //   const searchCharacter = () => {
//   //     setUrl(
//   //      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=${public_key}&hash=${hash_key}&ts=1`
//   //     );
//   //   };
//   return (
//     <div>
//       <div>
//         <Marvel />
//       </div>
//       <div>Marvel Comics</div>
//       <div className="search-bar">
//         <input type="search" placeholder="Search" />
//       </div>
//       <div className="content">
//         <MarvelCharacter />
//       </div>
//     </div>
//   );
// }

// export default MarvelHome;

// ***************************  *******************************
