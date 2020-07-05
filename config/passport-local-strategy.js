// to require passport
const passport = require(`passport`);
//ye khud import ho jata h jab bhi hum User. likhte h to 
const User = require("../models/user");
//to acquire local passport strategy and specifically strategu is the property to require from
const LocalStrategy = require(`passport-local`).Strategy;
//we need to acquire user and we are creating authentication so for that we need to tell password to use this local strategy that we have created
//authetication using passport
passport.use(new LocalStrategy ({
    //to detect the email for that syntax is usernamefield
    usernameField: `email`
    },
    //so whenever this email is called than thesee are passed to the function
    //here done is the callback function we can name that anything
    function(email,password, done){
        //find a user and establish identity
        //whenever email is called both email and password both are get by this 
        User.findOne({email:email}, function(err,user){
            if(err){
                console.log(`error in finding user in passport `);
                return done(err);
            }
            // if user is not found or the password wont matches
            if(!user || user.password!= password){
                console.log(`invalid username/password`);
                // done can also takes two argument null is in place of error because it dont have error and other for the authentication is false 
                return done(null, false )
            }

            //if the user is found just pass to the user
            //null because there is nor error
            return done(null, user);
            
        }
        
        
        );

        

    }




    ));


  //serializing the user to decide which key is to be kept in the cookie
  passport.serializeUser(function(user, done){
      //here this will store user id in the encrypted format in the cookie
      
      done(null, user.id);
  })
  //deserializing the iser from the key in the cookies

  //now the cookie is sent to the browser and when the browser makes the request the cookie is sent back the cookie so we need to deserialize it
  passport.deserializeUser(function(user, done){
      user.findOne(id, function(err, user){
          if(err){
              console.log(`error in finding user`);
          }

          return done(null, user);
      } );
  });

  // exporting is the must step after all the efforts
  module.exports =passport; //we are only exporting the passport not strategy 