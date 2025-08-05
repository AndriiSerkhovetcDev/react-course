import Header from "./components/Header/Header"
import MovieGenres from "./components/MovieGenres/MovieGenres"
import MovieInfo from "./components/MovieInfo/MovieInfo"
import MovieRating from "./components/MovieRating/MovieRating"
import MovieActions from "./components/MovieAction/MovieActions"
import PopularMoviesSlider from "./components/PopularMoviesSlider/PopularMoviesSlider"
import MovieAgeLimit from "./components/MovieAgeLimit/MovieAgeLimit"
import "./App.css"

function App() {
	return (
		<>
			<div className="container">
				<Header></Header>

				<main className="main">
					<MovieGenres></MovieGenres>
					<MovieInfo></MovieInfo>
					<MovieRating></MovieRating>
					<MovieActions></MovieActions>
					
					<div className="main-row">
						<PopularMoviesSlider></PopularMoviesSlider>
						<MovieAgeLimit></MovieAgeLimit>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
