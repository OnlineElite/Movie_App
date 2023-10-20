

const reducer = (state, action ) =>{
    switch(action.type){
        
        case 'FETCH_MOVIES':
            console.log('reducer data',action.payload)
            return{ ...state,movies : action.payload}
        
        case 'FETCH_MOVIE':
            let temp = []
            temp.push(action.payload)
            return{ ...state,movie : temp}

        case 'LOADING':
            return{ ...state,loading : action.payload}

        default:
            return state
    }
}

export  {reducer};