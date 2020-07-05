//....1  after using npm install on terminal we have  to acquire express which is already installed 
//here we have used const because we dont want ki koi ise overwrite kar de thats why we usually use const
const express = require('express');
const cookieParser = require('cookie-parser');




//..3 jo banana h usme humne ise express ki property di
const app = express();
//..2  jis port pw chalega or production me 8080 pe chalta h 
const port = 8000;

//....10 acquiring mongoosedb
const db = require('./config/mongoose');

//.....13 we have to install npm install express-session as we have user passport library and we knew that serializing and deserilizing cocept related to cookies but that encryption is not done by passport for that we uses express session library going to do that  or passport local startegy usko bhi acquire  kia h
const session = require(`express-session`); 
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//...14 now we have to add a middleware which takes the cookies and encrypt it but we have to do it after the views niche dekh lio





//...8 after downloading the install express js layout useing npm install express-js-layouts we have to acquire it and use it in app 
const expressLayouts =require('express-ejs-layouts');
const { urlencoded } = require('express');
const { use } = require('./routes');
//here we have to use it before router kyuki router hi to call kar rha h views vagearh ko to use to pehle hi dalna hoga i.e got a tell our server to use it
app.use(expressLayouts);

//......11 here we are using to get object value of our need when  we post it 
app.use(express.urlencoded());
//...12  as we have installef npm install -cookie-parser so now we have to acquire that and use it 
app.use(cookieParser());


//...9 here we want ki our script and style sheets must went to the head of the body so for that we are writing this is available in the expressejs documentation after doing this we have to add <%- style %> above to add that in head and <%- script %> below thattto add js script i.e to extract styles and scripts from sub pages into ;layout
app.set(`layout extractStyles`,  true);
app.set(`layout extractScripts`,  true);


//asett folder me static file ke lie
app.use(express.static('./assets'));



//...6 if any further request comes in than simply render it from router files which we have to acquire kyki jab request user se aiegi to simply vo acquire karo jismee ye h i.e this route handle the acquire
// app.use('/users', require('./routes/user_router'))

// simply agar or bhi route request ko handle karne h to ye karo
// router.use('/pagename', require('./ etc mtlb us address ke route me jaha ye bana h vaha i.e routerfile'))


//....7 after installing npm install ejs for view engine we have 2 work one is to qcquire it and other is same as we are doing it for views do path to uska batana hoga i.e setting up  view engine
app.set('view engine', 'ejs');
//path jo ki views me html sabske page honge usko access krne kelie
app.set('views' , './views');


//...14 now we have to add a middleware which takes the cookies and encrypt it but we have to do it after the views niche dekh lio we are using express-session but we have stored it in variable session
app.use(session({
    name: 'letterhost',
    //TODO change the secret before deployement in production node

    secret :'blahsomething',
    saveUninitialized: false,
    resave : false,
    //no how much time later we want it to expire
    cookie:{
        maxAge:(1000*60*100)
    }



}));



//..15 we need to tell the app to use passport and session names of variable 
app.use(passport.initialize());
app.use(passport.session());
//now we have to change the user controller

app.use(passportLocal.setAuthenticateUser);

//...5 importing router from routes this router will be used if any request is coming denoted by / tthat is this route handle th home 
//.isko bad me yaha dalna pada h kyuki ye passporrt ke baad aana chaie
app.use('/', require('./routes'));




//...4 ab hume ye bhi handle karna h ki error aie agar server na chale to kya msg de jise pata chale ki chal rha h ya nhi
app.listen(port, function(err){
    if(err){
        // console.log('error hit and error is', err);
        //by interpolation method 
        console.log(`error has hit : ${err}`);
        
    }

    console.log(`woo! server is successfully running on port: ${port}`);
});

