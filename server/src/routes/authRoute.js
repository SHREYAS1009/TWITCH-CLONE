import express1 from 'express';
import {postLogin,postRegister } from "../controllers/controller.js";
import Joi from 'joi';
import ExpressValidation from 'express-joi-validation'

const validator = ExpressValidation.createValidator({});
const registerSchema =Joi.object({

    username:Joi.string().min(3).max(12).required(),
    password:Joi.string().min(6).max(12).required(),
    email:Joi.string().email().required(),

})


const loginSchema =Joi.object({

    
    password:Joi.string().min(6).max(12).required(),
    email:Joi.string().email().required(),

})
const router=express.Router();
router.get('/register',validator.body(registerSchema), postRegister);


router.get('/login',validator.body(loginSchema),postLogin);

export default router;