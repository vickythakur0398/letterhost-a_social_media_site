//...1 here we are exporting a function name home which will perform that work
// after creating this we have to aacquire it in routwr
module.exports.home = function(req,  res){
    //this is for showing ki agar cookie hoga to ye print karega or uske niche wal ah ki we can even send the cookie which we want or change
    // console.log(req.cookies);
    // res.cookie('user-id', 25);
    
    // return res.end('<h1>express is working on our letterhost</h1>')

    //now we want ki view ko ye render kare na ki ye bheje to uppar wala commented  or humne acess view ka main index wale me previous step me de dia tha git me dekh lio 
    return res.render('home',{
        title: "hii"
    });
}

