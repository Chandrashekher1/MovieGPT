import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../utils/movieSlice';

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies)
  // console.log("Movie ID:", movieId); 
  
  const getUpComingMovies = async () => {
    try {
     
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();

    //   console.log("Fetched Video Data:", json); 
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results;
        // console.log(trailer);
      dispatch(addUpComingMovies(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    !upComingMovies && 
    getUpComingMovies();
  }, []);  
};

export default useUpComingMovies
