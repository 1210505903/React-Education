import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery: ""
    }
    handleFormSumbit = (event)=>{
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSumbit}>
                <div className="form-row mb-5">
                    <input onChange={(event) => this.setState({ searchQuery: event.target.value })} type="text" className="form-control" 
                    placeholder="Search a Movie" value={this.state.searchQuery} />
                </div>
            </form>
        )
    }
}

export default SearchBar;