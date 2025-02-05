import MovieCard from "./MovieCard";

const GptMovieList = ({ movie }) => {
    if (!movie) {
      console.error("Invalid movie prop:", movie);
      return null;
    }
  
    return (
      <div className="p-6 bg-black flex my-8 ">
        <div className="m-2">
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        </div>
        <div>
            <h1 className="text-lg md:text-3xl my-4 font-bold py-4 text-white">{movie.title}</h1>
            <h1 className="text-lg md:text-2xl my-2 text-gray-400">{movie.release_date}</h1>
            <h1 className="text-lg hidden md:inline-block text-xl text-white">{movie.overview}</h1>
        </div>
       
      </div>
    );
  };
  
  export default GptMovieList