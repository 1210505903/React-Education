import React from 'react';
import SearchBar from './SearchBar';
import MoveList from './MoveList';
class App extends React.Component {

    state = {
        movies: [{
            "id": 1,
            "name": "The Flash",
            "rating": 8.3,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/free-psd/music-shop-poster-template_23-2148855476.jpg?w=826&t=st=1692783640~exp=1692784240~hmac=7aa1c0b4360e433bb7314b5e1cb721059499b9fcff470ed071c517083d1670e1"
        }, {
            "id": 2,
            "name": "Interstellar",
            "rating": 6.8,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/free-psd/black-lives-matter-poster-template_23-2148585425.jpg?w=826&t=st=1692783679~exp=1692784279~hmac=552370f0e6947c69f1431a880114415c9d73b7c9c5b436564f89b7d491370701"
        }, {

            "id": 3,
            "name": "Arrow",
            "rating": 7.9,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/premium-psd/poster-design-photo-manipulation-template_528542-1009.jpg?w=740"
        },
        {
            "id": 4,
            "name": "Superman",
            "rating": 7.3,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/premium-photo/movie-poster-design_841014-8788.jpg?w=740"
        }, {
            "id": 5,
            "name": "The Witcher",
            "rating": 6.8,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg?w=826&t=st=1692963518~exp=1692964118~hmac=db800847863e0f7da7f02717b25506efc92458b8858e5a228eef0f7f41a9b981"
        }, {

            "id": 6,
            "name": "Breaking Bad",
            "rating": 7.9,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://img.freepik.com/free-psd/world-forest-day-poster-template_23-2148899237.jpg?w=826&t=st=1692963839~exp=1692964439~hmac=dac8580730698edacc79b4e1b0be70df6cf4df9dab6e5fdbe4a495a0307a5d36"
        }
        ],
        searchQuery: ""
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState({
            movies: newMovieList
        })
    }
    searchMovie = (event) => {
        //console.log(event.target.value);
        this.setState({ searchQuery: event.target.value })
    }
    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
            }
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1g-12">
                        <SearchBar
                            searhMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MoveList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )

    }



}
export default App;