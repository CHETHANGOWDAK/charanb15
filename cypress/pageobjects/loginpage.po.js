class loginpage{

UserNameInput(){
    return'input[name="username"]'
}
passwordInput(){

    return'input[type="password"]'
}

loginButton(){
    return'button[type="submit"]'
}
loginErrorMessage(){
    return'Invalid credentials'
}
}

const login = new loginpage ()

export default login