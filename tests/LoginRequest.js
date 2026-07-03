class LoginRequest{
    constructor(userEmail,userPassword){
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}

module.exports = {LoginRequest};