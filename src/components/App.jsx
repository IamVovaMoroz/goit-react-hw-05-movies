// App.jsx
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ContactPage from "./../pages/ContactPage";
import MoviesByYearPage from "pages/MoviesByYearPage";

// import HomePage from "./pages/HomePage"; Использование lazy с import позволяет отложить загрузку компонента HomePage до момента его фактического использования.  мы используем функцию lazy из React для динамической загрузки компонента HomePage. Это применяется вместе с механизмом код-разделения (code splitting) в React приложениях.
import Layout from "./Layout/Layout"; // Layout не делаем асинхронно
const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
     <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
       
        <Route path="contact" element={<ContactPage />} />
        <Route path="movies/year/:year" element={<MoviesByYearPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    
  );
};



