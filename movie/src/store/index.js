import { createStore, applyMiddleware } from "redux";
import {reducer} from '../reducers/MovieReducer'
import thunk from 'redux-thunk'

const initialState = {
    movies: [],
    loading: false,
    movie: []
}


export const store = createStore(reducer, initialState, applyMiddleware(thunk))