import * as React from "react";
import { useState} from "react";
import Details from "./Details";
import "./Search.css";
import Card from "./Card";

export default function FreeSolo() {
  const [animelist, setAnimelist] = useState([]);
  const [topanime, settopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState({});
    const { flag } = temp;
    
  const get100anime = async () => {
    const temp = await fetch("https://api.aniapi.com/v1/anime").then((res) =>
      res.json()
    );

    settopAnime(temp.data.documents.slice(0, 8));
    // console.log(temp.data.documents)
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
    console.log(search);
  };
  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.aniapi.com/v1/anime?title=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    console.log(temp.data.documents);
    setAnimelist(temp.data.documents);
  };

  React.useEffect(() => {
    get100anime();
    // console.log("useEffect");
  }, []);

  const getCreat = (e) => {
    setTemp(e);
    console.log(e.detail);
    return e;
  };
  return (
    <>
      {flag ? (
        <Details detail={temp.detail} />
      ) : (
        <>
          <div className="search_bar">
            <form className="search-box" onSubmit={HandleSearch}>
              <input
                className="input-search"
                type="search"
                placeholder=" Search Anime"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </form>
          </div>
          <Card
            topanime={topanime}
            animelist={animelist}
            createtemp={getCreat}
          />
        </>
      )}
    </>
  );
}