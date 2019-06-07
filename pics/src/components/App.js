import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term){
        console.log(term); 
    }


    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {/*onSubmit here is a user defined attribute unlike onChange or onSubmit(in normal jsx element) and stuff*/}
            </div>
        );
    }
};

export default App;


