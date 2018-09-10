var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
var server  = require('http').createServer(app);
var io      = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));


io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});    
  });
});



app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/index.html');
});

app.listen(port);
console.log('Server Listening at port'+port);