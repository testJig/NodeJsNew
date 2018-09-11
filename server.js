var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
//let http = require('http').Server(app);
var server  = require('http').createServer(app);

var io      = require('socket.io')(server);

//app.use(express.static(__dirname + '/public'));

app.get(/^socket.io.js$/, function(req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'TRUE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  res.sendfile('socket.io.js');
  next();
  
  });

io.sockets.on('connection', function (socket) {
 
  console.log('user connected');
  
   socket.on('disconnect', function(){
     console.log('user disconnected');
   });
  
   socket.on('add-message', function(message) {
     socket.emit('message', {type:'new-message', text: message});    
   });
 
});



// app.get('/',function(req,res){
// console.log('hello from server');
 // res.render('./public/index.html');
// });
server.listen(port);

console.log('Server Listening at port'+port);