import React, {Component} from 'react';

//Every class should have render method in it and render method should return some JSX

// All javascript classes have method called constructor and its only method called automatically whenever new instance of class got created

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term:''};  //whenever search term gets changed we want to record that change here
    }

    // Remember whenever state changes entire component will get re-rendered and also sub-components in it will get re-rendered

    // There is a concept called controlled component where its value changes when state changes and state will tell the component to update it's value

     render(){

         return(
             <div className="search-bar">

                <input
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}
                />

             </div>
         );
     }

    onInputChange(term){

        this.setState({term});
        this.props.onSearchTermChnage(term);
    }
}


export default SearchBar;