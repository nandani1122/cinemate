import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const apikey="47edbe810731dc15c1339516c498c485";
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apikey}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}