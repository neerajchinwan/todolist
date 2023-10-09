const jwt = require('jsonwebtoken')
const util = require('util');
const User = require('./../models/userModel');

const SECRET_STRING = 'kdsjflsjdlfkjaskldjfifjjjf'

function jwtToken(id){
    return jwt.sign({ id }, SECRET_STRING, {
        expiresIn: 10000000
    })
}

exports.signup = async (request, response) => {
    try{

        const newUser = await User.create(request.body);
        newUser.password = undefined;

        response.status(200)
                .json({
                    status: 'success',
                    data: {
                        newUser
                    }
                })
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.login = async (request, response) => {
    try{
        const email = request.body.email;
        const password = request.body.password;
        const user = await User.findOne({ email }).select('+password');
        if(!user || !await user.comparePassword(password, user.password)){
            return response.status(400)
                            .json({
                                status: 'fail',
                                message: 'Please Enter valid Email and password'
                            })
        }
        const token = jwtToken(user._id);

        response.status(200)
                .json({
                    status: 'success',
                    message: `welcome ${user.name}`,
                    token
                })

    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.protect = async (request, response, next) => {
    try{
        const token = request.headers.authorization
        let authToken;

        // console.log()
        if(token && token.startsWith('Bearer')){
            authToken = token.split(' ')[1]
        }

        if(!token){
            return response.status(401)
                            .json({
                                status: 'fail',
                                message: 'You are not logged in'
                            })
        }

        const decodeToken = await util.promisify(jwt.verify)(authToken, SECRET_STRING);

        const user = await User.findById(decodeToken.id);

        if(!user){
            return response.status(400)
                            .json({
                                status: 'fail',
                                message: 'User with given token does not valid'
                            })
        }

        request.user = user
        next()
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}