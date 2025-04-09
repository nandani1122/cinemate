import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        {/* Homepage Route with additional content */}
        <Route 
          path="/" 
          element={
            <div>
              <h1 className="text-center text-4xl py-8">Welcome to MovieHub</h1>
              <MovieList apiPath="movie/now_playing" title="Now Playing" />
              <MovieList apiPath="movie/popular" title="Popular Movies" />
            </div>
          }
        />

        {/* Detail page route for individual movie */}
        <Route path="movie/:id" element={<MovieDetail />} />

        {/* Specific movie categories */}
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />

        {/* Search route */}
        <Route path="search" element={<Search apiPath="search/movie" />} />

        {/* 404 route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
