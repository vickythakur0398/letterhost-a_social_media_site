//all the same step ye humne user_controller ko access karne ke lie banaya h
const express = require('express');


const router = express.Router();

//ab passport se sign in karna h to we have acquore it
const passport = require(`passport`);

const user_controller = require('../controllers/user_controllers');



console.log('router loaded');
// if we want to acces this router this router has expoerted itself so to acces this we can access via index,js main kyuki use ne to ise acquire kia h
router.get('/profile', user_controller.profile);

//here we are getting from the sgnup and sign in
router.get('/sign-up', user_controller.signUp);
router.get('/sign-in', user_controller.signIn);

//this is routing to the action i.e user/create kar
router.post('/create',user_controller.create);

/*

// this is we are routing to sign in and action is /user/user-session
router.post('/create-session',user_controller.createSession); 

*/

// jo upar /* */ me h vo hume local branch me kia tha but by mistake it is also committed in the master barnch vo maual sign in authentication ke lie tha 

// this is by using passport as a middleware to authenticate in middle 
//action of form se match h
router.post(`/create-session` ,passport.authenticate(
    `local`,
    {failureRedirect: '/users/sign-in'},

) , user_controller.createSession);
module.exports = router;