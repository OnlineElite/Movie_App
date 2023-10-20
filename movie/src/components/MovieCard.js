import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import '../MovieStyle.css'

function MovieCard({movie}){
    //console.log('card data' ,movie)


    return(
        <div className="card" >
            <img src= {movie.Poster} className="card-img-top" alt="title"/>
            <div className="card-body">
                <h5 className="card-title"> {movie.Title} </h5>
                <Link to = {'/movie/'+ movie.imdbID} >
                    <button  className="btn btn-primary">
                        Movie Details <FontAwesomeIcon icon="fa-solid fa-angle-right" />   
                    </button>
                </Link>               
            </div>
        </div>
    )
}

export default MovieCard;