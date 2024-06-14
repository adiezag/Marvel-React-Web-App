import react from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";
import env from "react-dotenv";

function MarvelSearch() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const hash_key = import.meta.env.VITE_HASH_KEY;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${public_key}&hash=${hash_key}&ts=1`
        );
        setItem(res.data.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="box-content">
          <div className="right-box">
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )}
    </>
  );
}
export default MarvelSearch;
