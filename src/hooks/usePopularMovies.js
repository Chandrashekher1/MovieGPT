import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies} from '../utils/movieSlice';

const usePopularMovies = (movieId) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.PopularMovies)
  // console.log("Movie ID:", movieId); 
  
  const getPopularMovies = async () => {
    try {
     
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await data.json();

    //   console.log("Fetched Video Data:", json); 
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results;
        // console.log(trailer);
      dispatch(addPopularMovies(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
   !popularMovies &&
    getPopularMovies();
  }, []);  
};

export default usePopularMovies;
