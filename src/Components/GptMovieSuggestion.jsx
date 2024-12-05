import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptSearchSuggestion = () => {
  const { movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || !Array.isArray(movieNames) || movieNames.length === 0) {
    return (
      <div className="text-white rounded-md container h-96 mx-auto m-8 flex flex-col items-center justify-center capitalize font-bold text-xl bg-black text-center">
        <p></p>
        <p className="mt-5 text-gray-400 capitalize">
        "Hey! I'm here to help you find the perfect movie. Just share your feelings, and I'll provide you with a list of your favorite movies.🤩"
        </p>
      </div>
    );
  }

  return (
    <div className="space-x-4 p-4">
      <div className="overflow-hidden">
        {movieNames.map((movie, index) => (
          <GptMovieList movie={movie} key={movie.id || index} />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestion