import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailer)
  // console.log("Movie ID:", movieId); 
  
  const getMoviesVideos = async () => {
    try {
     
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?", API_OPTIONS);
      const json = await data.json();

      console.log("Fetched Video Data:", json); 
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    !trailerVideo && 
    getMoviesVideos();
  }, []);  
};

export default useMovieTrailer;
