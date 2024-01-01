import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-custom">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="cona">
        <h1 className="head">Action Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'ACTION')}
        />
        <h1 className="head">Comedy Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'COMEDY')}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
