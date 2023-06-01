
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/Api';
import noImage from '../../NoImage.jpg';
import "../Spinner/spinner.css"
import {
  Section,
  CastTitle,
  CastList,
  CastItem,
  ActorImg,
  ActorName,
  Character,
} from './Cast.styled';



function Cast() {
    const {movieId} = useParams()
    const [cast, setCast] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      if (!movieId) {
        return;
      }
      setLoading(true);
      getMovieCredits(movieId)
        .then((data) => {
     
          setCast(data.cast);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [movieId]);


  return (
    <div>
       
       {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <Section>
            {error && <p>{error}</p>}
            <CastTitle>Cast and Crew</CastTitle>
            <CastList>
              {cast.map(({ credit_id, profile_path, name, character }) => (
                <CastItem key={credit_id}>
                  <>
                    <ActorImg
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                          : noImage
                      }
                      alt="preview"
                    />
                  </>

                  <ActorName>{name}</ActorName>
                  <Character>Character:{character}</Character>
                </CastItem>
              ))}
            </CastList>
          </Section>
        </>
      )}
    </div>



  )
}

export default Cast

