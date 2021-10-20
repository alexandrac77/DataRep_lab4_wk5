import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';


class Read extends Component
{
    //lifecycle hook make a http get call that will return the json data from the api 
    //and assign it to the component state
    componentDidMount(){
        //console.log("Active");
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')

        //fulfilled state of promise
        .then((response)=>{
            this.setState({mymovies: response.data.movies})
        })//then

        //display error
        .catch((error)=>{
            console.log(error);
        })//catch
    }


    state = {
        mymovies: []            
    };




    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;