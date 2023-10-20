import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import {connect} from 'react-redux'
import { useState } from 'react'
function MoviesContainer(props){

    const [first , setFirst] = useState([])

    useEffect(()=>{
        const APIKey = 'a117c37d'
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${'hero'}`
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('data fetched', data.Search)
            setFirst(data.Search)
        })
    })

    return(
        <div className='moviCont'>
            <div className='container'>
            {props.loading === true? <h1>Loding...</h1> : 
            (props.movies.length !== 0? props.movies : first).map((item)=>(
                <MovieCard movie = {item} />
            ))}
            </div>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        movies : state.movies,
        loading : state.loading
    }
}

export default connect(mapStateToProps)(MoviesContainer);