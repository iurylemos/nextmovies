## Dados API Filmes

> Site: `themoviedb.org (TMDB)`;

### GET Movies - Filmes em destaque

- GET
- trending/all

`/trending/{media_type}/{time_window} https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>`

### Get Details - Detalhes de um filme por id

- GET
- /movie/{movie_id}
  `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`

### GET - Search Movies - Busca por filmes

- GET
- /search/movie
  `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`
