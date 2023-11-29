

const initialState = {
    Token: null
}


const reducers = (state = initialState, action) =>{
    switch (action.type){
        case "loginUser":
            return {...state, Token: action.value}
        default:
            return state

    }
}


export default reducers