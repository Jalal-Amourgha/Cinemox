import React, { useState, useEffect, useRef } from "react";
import RecentSearch from "./RecentSearch";
import DisplayResult from "./DisplayResult";
import SearchComponent from "./SearchComponent";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { displayRecentSearch } = useGlobalContext();
  const [allo, setallo] = useState([
    {
      d: [
        {
          i: {
            height: 1000,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZDJlYmYxMjctZmU4OS00YjZmLThkYjktZjI4MjZmYjE3NzNlXkEyXkFqcGdeQXVyMTk2ODc0MjY@._V1_.jpg",
            width: 675,
          },
          id: "/best-of",
          l: "Best of 2023",
          s: "Discover this year’s fan-favorite movies, TV series, stars, and more",
        },
        {
          i: {
            height: 10401,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            width: 7344,
          },
          id: "tt0388629",
          l: "One Piece",
          q: "TV series",
          qid: "tvSeries",
          rank: 128,
          s: "Mayumi Tanaka, Akemi Okamura",
          y: 1999,
        },
        {
          i: {
            height: 630,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYzczMzllN2UtNDJmOS00MmE5LWE2MWYtNGEwODcwMDc2M2YyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            width: 450,
          },
          id: "tt11737520",
          l: "One Piece",
          q: "TV series",
          qid: "tvSeries",
          rank: 164,
          s: "Iñaki Godoy, Emily Rudd",
          y: 2023,
        },
        {
          id: "nm15076527",
          l: "One Piece",
          rank: 71585,
        },
        {
          i: {
            height: 5603,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BODY4OWM5M2UtM2Y1Yi00YjAyLTlhMDktMDkzZjFmMjI5MmI5XkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_.jpg",
            width: 3949,
          },
          id: "tt16183464",
          l: "One Piece Film: Red",
          q: "feature",
          qid: "movie",
          rank: 5736,
          s: "Mayumi Tanaka, Kazuya Nakai",
          y: 2022,
        },
        {
          i: {
            height: 1170,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNGU4YzAxOTQtOTk5Yi00MGI3LThiMDMtMzZhMmEwNDBlN2E3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            width: 780,
          },
          id: "tt0814243",
          l: "One Piece: The Movie",
          q: "feature",
          qid: "movie",
          rank: 12316,
          s: "Akemi Okamura, Kappei Yamaguchi",
          y: 2000,
        },
        {
          i: {
            height: 1280,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYzhhMzM2MTctYThmYy00YTZhLWExNjgtNWY5MGQwMTczMWExL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            width: 876,
          },
          id: "tt5251328",
          l: "One Piece Film: Gold",
          q: "feature",
          qid: "movie",
          rank: 21886,
          s: "Mayumi Tanaka, Kazuya Nakai",
          y: 2016,
        },
        {
          i: {
            height: 2143,
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_.jpg",
            width: 1446,
          },
          id: "tt9430698",
          l: "One Piece: Stampede",
          q: "feature",
          qid: "movie",
          rank: 21817,
          s: "Felecia Angelle, Greg Ayres",
          y: 2019,
        },
      ],
      q: "one%20piece",
      v: 1,
    },
  ]);

  // console.log(typeof allo[0].d[4].i === "undefined");
  return (
    <div className="container">
      <SearchComponent />
      {displayRecentSearch ? <RecentSearch /> : <DisplayResult />}
      {/* {allo[0].d.map((item, index) => (
        <div key={index}>
          {typeof item.i === "undefined" ? (
            <img
              src="https://media.discordapp.net/attachments/584650557688512533/1178078628257480886/image.png?ex=65874b38&is=6574d638&hm=c79294062dc4f8e101d698a00227997e97f5da25b99ef3676dca01b0d82ed755&=&format=webp&quality=lossless&width=715&height=417"
              alt=""
            />
          ) : (
            <img src={item.i.imageUrl} alt="" />
          )}

          <h1>{item.l}</h1>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
