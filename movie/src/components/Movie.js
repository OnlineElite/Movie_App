import React, { useEffect } from 'react'
import '../MovieStyle.css'
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchMovie, loading} from '../actions/MovieActions'
import {Link} from 'react-router-dom'
import '../MovieStyle.css'
function Movie(props){
    let movie_id = useParams().movieId
    
    
    function fetchDetails(){
        props.load(true)
        fetch(`https://www.omdbapi.com/?apikey=a117c37d&i=${movie_id}`)
        .then((res)=>{
            return res.json()
        })
        .then((details)=>{ 
            console.log('details fetched', details)
            props.next(details)
            props.load(false)
        })
    }
    useEffect(()=>{
        fetchDetails()
    }, [])

    return(
        <div className='details'>
            {props.loading === true? <h1>Loding...</h1> :
            props.movieDetails.map((movie)=>(
                <div className='container' key={movie.imdbID}>
                    <div className='row'>
                        <div className=' imgcont col-md-4 colg-lg-4 col-sm-12 col-12'>
                            <img src= {movie.Poster} alt= {movie.Title} />
                        </div>
                        <div className='col-md-8 colg-lg-8 col-sm-12 col-12'>
                            <h4> {movie.Title} </h4>
                            <div className='det'>
                                <div>Genre: <span>{movie.Genre}</span> </div>
                                <div>Released: <span>{movie.Released}</span> </div>
                                <div>Rated: <span>{movie.Rated}</span> </div>
                                <div>IMDB Rating: <span>{movie.imdbRating}</span> </div>
                                <div>Director: <span>{movie.Director}</span> </div>
                                <div>Writer: <span>{movie.Writer}</span> </div>
                                <div>Actors: <span>{movie.Actors}</span> </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row buttom bg-dark'>
                        <h2>About</h2>
                        <p> {movie.Plot} </p>
                        <hr className='text-light '/>
                        <div className='btns'>
                            <Link to={'https://www.imdb.com/title/' + movie.imdbID} >
                                <button className='btn btn-primary'>View on IMDB</button>
                            </Link>
                            <Link to ='/' >
                                <button className='btn btn-secondary'>Go Back To Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        allmovies : state.movies,
        movieDetails : state.movie,
        loading : state.loading
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        next: (movie)=>{
            dispatch(fetchMovie(movie))
        },
        load : (value)=>{
            dispatch(loading(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);