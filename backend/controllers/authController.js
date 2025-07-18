import mongoose from 'mongoose'
import userModel from '../models/authModel.js'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import bcrypt from 'bcrypt'


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


const registerUser = async (req, res) => {

    try {
        const {firstName, lastName, email, password} = req.body

        const userExists = await userModel.findOne({email})
        if(userExists){
            return res.json({success: false, message : "user already exits"})
        }

        if(!validator.isEmail(email)){
            return res.json({success : false, message : "Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success: false, message : "Password too short, please enter at least 8 characters"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })

        await newUser.save()

        const token = createToken(newUser._id)

        res.json({success: true, token, message: "user registered successfully"})

    } catch (error) {
        console.log(error.message);
        res.json({success : false, message:error.message})
        
    }


}

const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
          return res.json({success: false, message : "user does not exist, please register"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({success: true, token, message : "user login successful"})
        }else{
            res.json({success: false, message : "invalid credentials"})
        }
    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : error.message})
        
    }

}


export {registerUser, loginUser}