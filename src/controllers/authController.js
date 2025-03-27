const {createUserAccount, loginUser} = require('../services/authService.js')

const registerUser = async(req, res) => {
    try {
        const user = await createUserAccount(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const login = async(req, res) => {
    try {
        const response = await loginUser(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    registerUser,
    login
}