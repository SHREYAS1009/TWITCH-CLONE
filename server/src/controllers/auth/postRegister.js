import User from '../../models/Users.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
 
  try{

     const{username,email,password}= req.body;

     const userexists = await User.exists({email});
     if(userexists)
      {
        return res.status(409).send("E-mail already in use");
      }
      const encryptedPassword=await bcrypt.hash(password,10);
      const user = await User.create({
        username,
        email:email.toLowerCase(),
        password:encryptedPassword,
      })

      //create JWT Token 
      const token=jwt.sign(
        //user details which we would like to encrypt in JWT token 
      {
           userId:user._id,
           email,

      },
      //secret
      process.env.TOKEN_KEY,
      //additional config
      {
        expiresIn:"8h",
      
      }
      );
       // send success response to the user with user data and JWT 
      return res.status(201).json({
        userDetails:{
          email,
          username,
          token,
        },
      });

      
      
  }catch(err)
  {
    console.log(err);
    return res.status(500).send("Error occured.Please try again")
      
   
  }


  return res.send("user has been added to database");
};
