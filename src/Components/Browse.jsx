import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { BG_URL } from '../utils/constants'

const Browse = () => { 

  const toggleGptSeacrh = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  
  return (
    <div>
      <Header/>
      {
        toggleGptSeacrh ? <GptSearch/> : <><MainContainer/>
      <SecondaryContainer/>
      </>
      }
      
    </div>
  )
}

export default Browse