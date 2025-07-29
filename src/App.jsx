import Header from "./components/Header"
import MovieGenres from "./components/MovieGenres"
import MovieInfo from "./components/MovieInfo"
import MovieRating from "./components/MovieRating"
import MovieActions from "./components/MovieActions"
import PopularMoviesSlider from "./components/PopularMoviesSlider"
import MovieAgeLimit from "./components/MovieAgeLimit"

function App() {
	return (
		<>
			<Header></Header>
			<main>
				<MovieGenres></MovieGenres>
				<MovieInfo></MovieInfo>
				<MovieRating></MovieRating>
				<MovieActions></MovieActions>
				<PopularMoviesSlider></PopularMoviesSlider>
				<MovieAgeLimit></MovieAgeLimit>
			</main>
		</>
	)
}

export default App
