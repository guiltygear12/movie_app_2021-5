import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie-data">
                <h3 className="movie-title" style={{backgroundColor:'white'}}>{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genres,index)=>{
                        return<li key={index} className="movie-genres">{genres}</li>
                    })}
                </ul>
                <p className="movie-summary">{summary.slice(0,180)}...</p>
            </div>
        </div> 
    ) 
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;