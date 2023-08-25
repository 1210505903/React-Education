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
        }
        ]
    }

    deleteMovie =(movie) =>{
        const newMovieList = this.state.movies.filter(
            m => m.id!== movie.id
        );
        this.setState({
            movies: newMovieList
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-1g-12">
                        <SearchBar />
                    </div>
                </div>
                <MoveList 
                    movies = {this.state.movies}
                    deleteMovieProp = {this.deleteMovie} />
            </div>
        )

    }



}
export default App;