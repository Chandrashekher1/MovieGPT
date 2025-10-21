import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, OpenAi_key } from '../utils/constants';
import { addGptMoviesResult } from '../utils/gptSlice';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch movie details from TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie.trim()}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        console.error('TMDB API Error:', response.statusText);
        return [];
      }

      const json = await response.json();
      return json.results || [];
    } catch (error) {
      console.error('Error fetching from TMDB API:', error);
      return [];
    }
  };

  // Function to handle GPT Search
  const handleGptSearch = async () => {
  const query = searchText.current?.value?.trim();
  if (!query) {
    console.error('Search query is empty!');
    return;
  }

  setIsLoading(true);

  try {
    // GPT Query
    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: "${query}". Provide 10 movie names, comma-separated.`;
    
      // Initialize GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(OpenAi_key);
  
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });  
    const result = await model.generateContent( gptQuery );
    
    // Parse the GPT response
    const gptMovies =result?.response?.candidates[0]?.content?.parts[0]?.text.split(',').map((movie) => movie.trim()) || [];
    // console.log(gptMovies);
    
    if (gptMovies.length === 0) {
      console.error('No movies returned by GPT.');
      return;
    }

    // Fetch movie details from TMDB
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie.trim()));
    const tmdbResults = await Promise.all(promiseArray);

    // Extract only the first result for each movie
    const formattedResults = tmdbResults.map((result) => result[0] || null).filter(Boolean);
    // console.log(formattedResults);
    // console.log(gptMovies);
    

    // Dispatch results to the store
    dispatch(addGptMoviesResult({ movieNames: formattedResults}));
  } catch (error) {
    console.error('Error during GPT search:', error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="pt-[60%] md:pt-[9%] flex justify-center">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey]?.gptPlaceholder || 'Search movies...'}
          className=" md:p-4 m-4 col-span-9 focus:outline-none"
        />
        <button
          className={`py-2 px-4 m-4 ${isLoading ? 'bg-gray-500' : 'bg-red-700'} rounded-lg col-span-3 font-semibold`}
          onClick={handleGptSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : lang[langKey]?.search || 'Search'}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
