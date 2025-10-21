import MovieCard from "./MovieCard";

const GptMovieList = ({ movie }) => {
    if (!movie) {
      console.error("Invalid movie prop:", movie);
      return null;
    }
  
    return (
      <div className="px-1 md:px-6 py-2 bg-black flex my-4 ">
        <div className="m-2">
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            overview={movie.overview}
          />
        </div>
        <div>
            <h1 className="text-lg md:text-3xl my-4 font-bold py-4 text-white">{movie.title}</h1>
            <h1 className="text-lg md:text-2xl my-2 text-gray-400">{movie.release_date}</h1>
            <h1 className="hidden md:inline-block md:text-xl text-white">{movie.overview}</h1>
        </div>
       
      </div>
    );
  };
  
  export default GptMovieList