//same jo baki me kai tha ek function banaya h or use export krna h jise ki roy=te me use kar skae
module.exports.profile = function(req, res){
    /*
    res.end(`<h1>This is user profile</h1>`)
}
*/
return res.render('profile',{
    // title: "wooohhh taking a break "
    title: 'user profile'
});
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
    //will do it 
    
}

// this is for singin to get that data
module.exports.create = function(req, res){
    //will do it

}