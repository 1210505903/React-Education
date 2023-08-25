import React from 'react';

const MoveList = (props) => {
   /* function handleClick(event){
        console.log(event.pageX);
        //alert("OOOOOOOOOOOOOOOOOOOOOOOOO");
    }*/

    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie"></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className='card-text'>{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={(event)=> props.deleteMovieProp(movie)} type="button" className="btn btn-outline-danger" ></button>
                                <h2><span className="badge bg-info">{movie.raitng}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default MoveList;