const loginUser = (Token) =>{
    return {
        type: "loginUser",
        value: Token
    }
}

// on déclare une action qui contient la variable à stocker


export {
    loginUser
}