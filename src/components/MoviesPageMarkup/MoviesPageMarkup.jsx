import React from 'react';

import {
  Movies,
  Ul,
  Li,
  StyledLink,
  Img,
  Title,
  Thumb, 
  Wrapper
} from './MoviesPageMarkup.styled';
import noImage from '../../NoImage.jpg';

const MoviesListMarkup = ({ movies, location }) => {

    return (
        <Wrapper>
          <Movies>
            <Ul>
              {movies.map((movie) => (
                <Li key={movie.id}>
                  <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                    <Thumb>
                      {movie.poster_path ? (
                        <Img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          width={`200`}
                          alt="preview"
                        />
                      ) : (
                        <Img src={noImage} alt="No Image Available" />
                      )}
                    </Thumb>
                    {movie.title && <Title>{movie.title}</Title>}
                    {movie.name && <Title>{movie.name}</Title>}
                  </StyledLink>
                </Li>
              ))}
            </Ul>
          </Movies>
        </Wrapper>

);


}

export default MoviesListMarkup;