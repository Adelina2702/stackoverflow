const ErrorHandler = require('./../utils/error-handler')

const UserService = require('./../services/user-service')

const signup = async (req, res, next) => {
    try{
        const {email, password, firstName, lastName} = req.body;

        const userData = await UserService.signup(email, password, firstName, lastName);
        

        res.json(userData)
    }catch(e){
        next(e)
    }
}

const login = async (req, res, next) => {
    try{
        const {email, password} = req.body

        const userData = await UserService.login(email, password)

        res.json(userData)
    }catch(e){
        next(e)
    }
}

const activate = async (req, res, next) => {
    try{
        const { link } = req.params
        await UserService.activate(link)
        res.redirect('https://www.google.com')
    }catch(e) {
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try{
        const 
        const users = await UserService.getAll()
        res.json(users)
    }catch(e){
        next(e)
    }
}

module.exports = {
    signup,
    getAll,
    login,
    activate
}