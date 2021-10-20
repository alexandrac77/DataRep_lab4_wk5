import React, { Component } from 'react';

class Create extends Component {
    constructor() {

        super(); //needed for using forms

        this.handleSubmit = this.handleSubmit.bind(this); //bind to this instance (binding events to constructor)
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        //assign state to blank
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }//
    }


    handleSubmit(event) {

        //alert to show what movie was added
        alert("Movie Name: " + this.state.Title + "Movie Year:" +this.state.Year + "Movie Poster:" +this.state.Poster);
        
        event.preventDefault(); //stop calling button multiple times
   
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }//
    }//handleSubmit

    onChangeMovieName(event) {
        //update state
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }


    render() {
        return (
            <div>
                <h1>This is my Create Component!</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName} />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear} />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster} />
                    </div>

                    {/*add movie button */}
                    <div>
                        <input
                            type="submit"
                            value="Add New Movie"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;