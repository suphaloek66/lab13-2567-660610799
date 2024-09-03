"use client";

import MovieRow from "@components/MovieRow";
import { movieDB } from "@lib/movieDB";

export default function SearchResultPage({ params }) {
  
  const processedSearchInput = String(params.searchInput).replaceAll("%20"," ");
  const moviesList = movieDB.filter((x) =>
    
    x.title.toLowerCase().includes(processedSearchInput.toLowerCase())
  );
  console.log(moviesList);

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {moviesList.length} result(s)
      </p>

      {moviesList.map((x, i) => (
        <MovieRow
        key={x.id}
        id={x.id}
        title={x.title}
        detail={x.detail}
        rating={x.rating}
        number={i + 1}
      />
      ))}
    </div>
  );
}