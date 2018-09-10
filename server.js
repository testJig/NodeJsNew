var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
let http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/index.html');
});

app.listen(port);
console.log('Server Listening at port'+port);