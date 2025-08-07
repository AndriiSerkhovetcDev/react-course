import Header from "./components/Header/Header"
import MovieGenres from "./components/MovieGenres/MovieGenres"
import MovieInfo from "./components/MovieInfo/MovieInfo"
import MovieRating from "./components/MovieRating/MovieRating"
import MovieActions from "./components/MovieAction/MovieActions"
import PopularMoviesSlider from "./components/PopularMoviesSlider/PopularMoviesSlider"
import MovieAgeLimit from "./components/MovieAgeLimit/MovieAgeLimit"
import { 
	headerProps,
	movieGenresProps,
	movieInfoProps,
	movieRatingProps,
	popularSliderProps,
	movieAgeLimitProps } from "./data/mockData"
import "./App.css"

function App() {
	return (
		<>
			<div className="container">
				<Header {...headerProps} />

				<main className="main">
					<MovieGenres {...movieGenresProps} />
					<MovieInfo {...movieInfoProps} />
					<MovieRating {...movieRatingProps} />
					<MovieActions />
					
					<div className="main-row">
						<PopularMoviesSlider {...popularSliderProps} />
						<MovieAgeLimit {...movieAgeLimitProps} />
					</div>
				</main>
			</div>
		</>
	)
}

export default App
