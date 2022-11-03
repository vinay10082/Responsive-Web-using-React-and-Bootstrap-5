import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const resetPassword = async (req, res) => {

    const {email, existingPassword, newPassword} = req.body;

    try {
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }
        const isPasswordCrt = await bcrypt.compare(existingPassword, existinguser.password)
        
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12)
        existinguser.update({password:hashedPassword})

    } catch (error)  {

    }

}