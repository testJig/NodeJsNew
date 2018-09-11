var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
//let http = require('http').Server(app);
var server  = require('http').createServer(app).listen(port);;

var io      = require('socket.io');

app.use(express.static(__dirname + '/public'));



// io.sockets.on('connection', function (socket) {
 
  // console.log('user connected');
  
   // socket.on('disconnect', function(){
     // console.log('user disconnected');
   // });
  
   // socket.on('add-message', function(message) {
     // socket.emit('message', {type:'new-message', text: message});    
   // });
 
// });



 app.get('/',function(req,res){
 console.log('hello from server');
 res.render('./public/index.html');
 });
//server.listen(port);

console.log('Server Listening at port'+port);

