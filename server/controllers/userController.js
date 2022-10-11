const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest(('User with this email already exist')))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket. create({userId: user.id})
        const jwt = jwt.sign({id: user.id, email, role}, )
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()