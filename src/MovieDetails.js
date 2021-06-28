import React from 'react';
import './index.css';
import homeLogo from './static/Home.png'
import { Link } from 'react-router-dom';

const apiKey = "1fbec0cb91cd2469e96f871badde99f8";


class MovieDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {movieId : this.props.match.params.movieId, movieDetails: [], castDetails : []}
    }
    componentDidMount()
    {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=${apiKey}&language=en-US`).then(response => response.json()).then(data => {
            this.setState({movieDetails : data});
        });
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieId}/credits?api_key=${apiKey}&language=en-US`).then(response => response.json()).then(data => {
            this.setState({castDetails : data});
        });
    }

  render() {
        const year = String(this.state.movieDetails.release_date).slice(0,4);
        const data = this.state.castDetails.crew;
        let director = "";
        let cast = [];
        console.log(data)
        for(const i in data)
        {
            if(data[i].job === "Director")
            {
                director = data[i].name;
            }
            cast.push(data[i].name);
        }
      return <div class="main">
        <div class="header">
        <span>Movie Details</span>
        <Link to="/"><img src={homeLogo} alt="home logo" /></Link></div>
        <div class="details-body">
        <div class="movie-poster"><img src={`https://image.tmdb.org/t/p/w500${this.state.movieDetails.poster_path}`} alt="moviePoster" class="moviePoster"></img>
        </div>
        <div class="movie-details">
        <div class="movie-title">
        <span>{this.state.movieDetails.title}</span>
        {this.state.movieDetails.vote_average ? <span class="rating">({this.state.movieDetails.vote_average})</span> : <span class="rating">(Ratings not available)</span>}
        </div>
        <div class="movie-info">
            {year} | {director}
        </div>
        <div class="movie-cast">
            Cast : {cast[0]}, {cast[1]}...
        </div>
        
        <div class="overview">
            Description : {this.state.movieDetails.overview}
        </div>


        </div>
        </div>
        </div>
  }
}
export default MovieDetails;