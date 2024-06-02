import express from 'express';

const router=express.Router();
router.get('/register',(req,res)=>{
    return res.send("This is register page");
});


router.get('/login',(req,res)=>{
    return res.send("This is a login page");
});

export default router