import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  // console.log("Movie ID:", movieId); 
  
  const getTopRatedMovies = async () => {
    try {
     
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json();

      console.log("Fetched Video Data:", json); 
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results;
        // console.log(trailer);
      dispatch(addTopRatedMovies(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    !topRatedMovies && 
    getTopRatedMovies();
  }, []);  
};

export default useTopRatedMovies
