import React from 'react';

class SearchBar extends React.Component {
    
    handleFormSumbit = (event)=>{
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSumbit}>
                <div className="form-row mb-5">
                    <input onChange={this.props.searhMovieProp} type="text" className="form-control" 
                    placeholder="Search a Movie" />
                </div>
            </form>
        )
    }
}

export default SearchBar;