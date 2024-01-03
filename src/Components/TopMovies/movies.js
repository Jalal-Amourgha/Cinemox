const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    name: "The Shawshank Redemption",
    rate: "9.3",
    pub: "1994",
    genre: "Drama",
    type: ["ranking", "popularity", "rates"],
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    name: "The Godfather",
    rate: "9.2",
    pub: "1972",
    genre: "Crime Drama",
    type: ["ranking", "rates"],
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    name: "The Dark Knight",
    rate: "9.0",
    pub: "2008",
    genre: "Action Crime",
    type: ["ranking", "rates"],
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
    name: "12 Angry Men",
    rate: "9.0",
    pub: "1957",
    genre: "Crime Drama",
    type: ["ranking"],
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    name: "Schindler's List",
    rate: "9.0",
    pub: "1993",
    genre: "Biography Drama History",
    type: ["ranking"],
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    name: "The Lord of the Rings: The Return of the King",
    rate: "9.0",
    pub: "2003",
    genre: "Action Adventure Drama",
    type: ["ranking", "rates"],
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    name: "Pulp Fiction",
    rate: "8.9",
    pub: "1994",
    genre: "Crime Drama",
    type: ["ranking", "rates"],
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    name: "The Good, the Bad and the Ugly",
    rate: "8.8",
    pub: "1966",
    genre: "Adventure Western",
    type: ["ranking"],
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    name: "Oppemnheimer",
    rate: "8.4",
    pub: "2023",
    genre: "Biography Drama History",
    type: ["popularity"],
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    name: "Die Hard",
    rate: "8.2",
    pub: "1988",
    genre: "Action Thriller",
    type: ["popularity"],
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_FMjpg_UX1000_.jpg",
    name: "It's a Wonderful Life",
    rate: "8.6",
    pub: "1946",
    genre: "Drama Family Fantasy",
    type: ["popularity"],
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    name: "Spider-Man: Across the Spider-Verse",
    rate: "8.6",
    pub: "2023",
    genre: "Animation Action Adventure",
    type: ["popularity"],
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    name: "Interstellar",
    rate: "8.7",
    pub: "2014",
    genre: "Adventure Drama",
    type: ["popularity", "rates"],
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/M/MV5BM2Q2Njg3ZmQtMDlmZi00NzE5LWJlOWYtY2I5NzhiZDdmNTk3XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    name: "Klaus",
    rate: "8.2",
    pub: "2019",
    genre: "Animation Adventure Comedy",
    type: ["popularity"],
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg",
    name: "The Wolf of Wall Street",
    rate: "8.2",
    pub: "2013",
    genre: "Biography Comedy Crime",
    type: ["popularity"],
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    name: "Mad Max: Fury Road",
    rate: "8.6",
    pub: "2015",
    genre: "Action Adventure",
    type: ["popularity"],
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    name: "Inception",
    rate: "8.8",
    pub: "2010",
    genre: "Action Adventure",
    type: ["rates"],
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    name: "Fight Club",
    rate: "8.8",
    pub: "1999",
    genre: "Drama",
    type: ["rates"],
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    name: "Forrest Gump",
    rate: "8.8",
    pub: "1994",
    genre: "Drama Romance",
    type: ["rates"],
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    name: "The Matrix",
    rate: "8.7",
    pub: "1999",
    genre: "Action",
    type: ["rates"],
  },
];

export default data;