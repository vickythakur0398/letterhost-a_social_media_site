//all the same step ye humne user_controller ko access karne ke lie banaya h
const express = require('express');


const router = express.Router();

const user_controller = require('../controllers/user_controllers' )



console.log('router loaded');
// if we want to acces this router this router has expoerted itself so to acces this we can access via index,js main kyuki use ne to ise acquire kia h
router.get('/profile', user_controller.profile );

//here we are getting from the sgnup and sign in
router.get('/sign-up', user_controller.signUp);
router.get('/sign-in', user_controller.signIn);

module.exports = router;