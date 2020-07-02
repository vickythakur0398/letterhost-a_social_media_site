//....1  after using npm install on terminal we have  to acquire express which is already installed 
//here we have used const because we dont want ki koi ise overwrite kar de thats why we usually use const
const express = require('express');




//..3 jo banana h usme humne ise express ki property di
const app = express();
//..2  jis port pw chalega or production me 8080 pe chalta h 
const port = 8000;

//...8 after downloading the install express js layout useing npm install express-js-layouts we have to acquire it and use it in app 
const expressLayouts =require('express-ejs-layouts');
//here we have to use it before router kyuki router hi to call kar rha h views vagearh ko to use to pehle hi dalna hoga i.e got a tell our server to use it
app.use(expressLayouts);

//asett folder me static file ke lie
app.use(express.static('./assets'));

//...5 importing router from routes this router will be used if any request is coming denoted by / tthat is this route handle th home


//...6 if any further request comes in than simply render it from router files which we have to acquire kyki jab request user se aiegi to simply vo acquire karo jismee ye h i.e this route handle the acquire
// app.use('/users', require('./routes/user_router'))

// simply agar or bhi route request ko handle karne h to ye karo
// router.use('/pagename', require('./ etc mtlb us address ke route me jaha ye bana h vaha i.e routerfile'))


//....7 after installing npm install ejs for view engine we have 2 work one is to qcquire it and other is same as we are doing it for views do path to uska batana hoga i.e setting up  view engine
app.set('view engine', 'ejs');
//path jo ki views me html sabske page honge usko access krne kelie
app.set('views' , './views');


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

