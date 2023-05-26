import React from 'react'
import { Link } from 'react-router-dom';

function MoviesPage() {
  return (
    <div>
     {["movies-id-1", "movies-id-2", "movies-id-3", "movies-id-4"].map( movie => {
      // `${movie}` чтобы прописать путь url и для строк и цифр для получаемых. Link - активная ссылку
      return <Link key={movie} to={`${movie}`}>{movie}</Link>;
      })}
    </div>
  );
};

export default MoviesPage
