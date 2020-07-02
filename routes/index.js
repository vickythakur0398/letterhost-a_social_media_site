//here we have created this so that we can cantrol all the action as we know router routes all the reqquest from controller or action 
//1 here we are acqyuiring express or inska instance pass hioga jise memory save hoti h kyuki main nidexx,js me humne ye pehle hi acquire kar lia h]

const express = require('express');


//..2 ab hum bas handle karna chahte h routes not controllers so express router ki documentation se dekh lio 

const router = express.Router();

//...5 here we are acquiring the funcn from controller ../ kyuki ye route ke bahar parallaly controllers ke andr h islie
const homeController = require('../controllers/home_controller');


console.log(`router is loaded`)

//..6 to control the action of homecontoller which we have imported from the contollers
router.get('/', homeController.home);

router.use('/users', require('./user_router'));



//...3 jo h use export bhi to karna h
//...4 export karne ke baad ise hum index.js main me acquire bhi karenge 
module.exports = router;