//...1 here we are exporting a function name home which will perform that work
// after creating this we have to aacquire it in routwr
module.exports.home = function(req,  res){
    
    
    return res.end('<h1>express is working on our letterhost</h1>')
}

