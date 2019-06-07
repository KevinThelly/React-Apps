import React from 'react';

class SearchBar extends React.Component{

    state= { term: ''};

    onFormSubmit = (event) =>{
        event.preventDefault();  //this will prevent the form from reenddering after every entry. ie disabling the default actions
        //console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }
    //brackets function creation is used here to resolve the this error occuring

    render() {
        return (
        <div className="ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event) => this.setState({term: event.target.value})}
                        />   
                    {/*we dont put the parenthesis (this.onInputChange())here since we dont want the function to be called every time the component in rendered, we just make a reference*/}
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;