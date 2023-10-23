
const fetchMovies =(movies)=>{
    return {
        type :'FETCH_MOVIES',
        payload : movies
    }
}

const fetchMovie =(movie)=>{
    return {
        type :'FETCH_MOVIE',
        payload : movie
    }
}

const loading =(value)=>{
    return {
        type :'LOADING',
        payload : value
    }
}


const moviesThunk = (value) => (dispatch)=>{
    dispatch(loading(true))
    const APIKey = 'a117c37d'
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${value}`
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log('data fetched', data.Search)
        dispatch(fetchMovies(data.Search))
        dispatch(loading(false))
    })
}


export {moviesThunk, fetchMovie, loading}