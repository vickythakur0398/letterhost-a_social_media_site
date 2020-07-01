//....1  after using npm install on terminal we have  to acquire express which is already installed 
//here we have used const because we dont want ki koi ise overwrite kar de thats why we usually use const
const express = require('express');

//..2  jis port pw chalega or production me 8080 pe chalta h 
const port = 8000;


//..3 jo banana h usme humne ise express ki property di
const app = express();


//...4 ab hume ye bhi handle karna h ki error aie agar server na chale to kya msg de jise pata chale ki chal rha h ya nhi
app.listen(port, function(err){
    if(err){
        // console.log('error hit and error is', err);
        //by interpolation method 
        console.log(`error has hit : ${err}`);
        
    }

    console.log(`woo! server is successfully running on port: ${port}`);
}) 

