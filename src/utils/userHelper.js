const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function hashPassword(password) {
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds);
    return newPassword;
}

async function comparePassword(userEnteredPassword, storedPassword) {
    console.log(storedPassword);
    const result = await bcrypt.compare(userEnteredPassword, storedPassword);
    return result;
}

async function generateToken(user) {
    const secretKey = process.env.SECRETKEY;
    const token = jwt.sign(user, secretKey, {expiresIn: '1h'});
    return token;
}
module.exports = {
    hashPassword,
    comparePassword,
    generateToken
}