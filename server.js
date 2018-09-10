var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
var server  = require('http').createServer(app);
server.listen(port);
var io      = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));



io.sockets.on('connection', function (socket) {
 
  console.log('user connected');
  
  // socket.on('disconnect', function(){
    // console.log('user disconnected');
  // });
  
  // socket.on('add-message', (message) => {
    // io.sockets.emit('message', {type:'new-message', text: message});    
  // });
 
});



app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/index.html');
});


console.log('Server Listening at port'+port);