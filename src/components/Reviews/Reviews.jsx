import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import '../Spinner/spinner.css';
import { Wrapper, Container, ReviewsTitle, Ul, Li, P, NoReviews } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <span className="loader"></span>
      ) : reviews && reviews.length > 0 ? (
        <Wrapper>
          <Container>
            <ReviewsTitle>Reviews</ReviewsTitle>
            <Ul>
              {reviews.map(({ author, content, id }) => (
                <Li key={id}>
                  <P>{author}</P>
                  {content && <p>{content}</p>}
                </Li>
              ))}
            </Ul>
          </Container>
        </Wrapper>
      ) : (
        <Wrapper>
          <Container>
            <NoReviews>No reviews found</NoReviews>
          </Container>
        </Wrapper>
      )}
    </div>
  );
}

export default Reviews;
