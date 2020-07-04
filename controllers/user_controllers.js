const User = require("../models/user");

//same jo baki me kai tha ek function banaya h or use export krna h jise ki roy=te me use kar skae
module.exports.profile = function(req, res){
    /*
    res.end(`<h1>This is user profile</h1>`)
}
*/

/*
return res.render('profile',{
    // title: "wooohhh taking a break "
    title: 'user profile'
});*/
// ye hum show karne ke lie kar rhe h user details 
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(user){
                return res.render('user_profile',{
                    title: "User Profile",
                    user:user
                })
            }
            return res.redirect(`users/sign-in`);
        });
    }else{
        return res.redirect(`users/sign-in`);
    }

}


//we have to add action for signup and render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "letterhost / sign Up"
    })
}


//similar for the sign in
//now after this we have view we have contoller actio and we need route ki is pe aie request aie to ye send kare route se browser ko
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "letterhost / sign IN"
    })
}

//jo humne sign up form banaya h uska bhi router chaie to uska controller h ye  i.e to get the signup dta in database
module.exports.create = function(req, res){

    // console.log('hii', req.body.confirmpassword);
    // res.redirect('back')   // tm yahi se back ho ja rhe the so error tha 
    //will do it 
    //s1 if confirm pass word and password is correct
    
    if(req.body.password != req.body.confirmpassword){   
        // console.log("not same password");
        return res.redirect('back');
    }

    // console.log('email',req.body.email);

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in our database '); 
        return}

        // if user is not there create account
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user'); 
                    return;
                }
                // here we have redirected it to form 
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
        // crux if password wont match or user is already present in both cases we are sending it back 
        // else just redirected to the sign page now we have to rote it as route is already mention in action of form we just have to match that in routes file of user
    });
    
}


// this is for singin to get that data
module.exports.createSession = function(req, res){
    //will do it
    //so after doing user sign up we are proceeding with the user sing in 
    //we are going to check if the user exist if yes than match password with the password in the database if that matchess than we stores the user identity in the cookie and send it off fto the browser
    //steps to authenticate the user
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log(`error in finding the user in signing in`); return};

            //handle user found
console.log("user",user)
            if(user){
                //handle if password doesnt matches
                if(user.password != req.body.password){
                    console.log("password wrong")
                    return res.redirect(`back`);
                }


                //if passowrd matches
                //we have to handle session create
                res.cookie('user_id' , user._id);
                console.log(user.id)
                return res.redirect('/users/profile');


            }


            else{
                //handle if user not found
                console.log("else");
                return res.redirect(`back`);
            }



    });

}
//this is must to export userSession or iske bad humne dekha ki jo user h uski detail s kya h to vo show kare uske profile me to iske lie humne user profile me change kia h upar 
// module.exports.userSession = function(req,res){
//     return res.redirect('/users/user_profile');
// }