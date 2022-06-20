const router=require('express').Router();
const{signUp,verify0tp}=require('../Controllers/userController')



router.route('/signup')
    .post(signUp);


router.route('/signup/verify')
    .post(verify0tp);


    
module.exports=router;