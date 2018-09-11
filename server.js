let app = require('express')();
//let http = require('http').Server(app);



/*
var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
//let http = require('http').Server(app);
var server  = require('http').createServer(app).listen(port);;

var io      = require('socket.io');

//app.use(express.static(__dirname + '/public'));

var socket = io.listen(server); 

// io.sockets.on('connection', function (socket) {
 
  // console.log('user connected');
  
   // socket.on('disconnect', function(){
     // console.log('user disconnected');
   // });
  
   // socket.on('add-message', function(message) {
     // socket.emit('message', {type:'new-message', text: message});    
   // });
 
// });

 socket.on('connection', function (client) {        
        client.on('add-message', function(msg){ 
            console.log('message arrive'); 
           // client.send('some message'); 
			socket.emit('message', {type:'new-message', text: message}); 
        });
     
        client.on('disconnect', function(){ 
            console.log('connection closed'); 
       }); 
    });

 // app.get('/',function(req,res){
 // console.log('hello from server');
 // res.render('./public/index.html');
 // });
//server.listen(port);

console.log('Server Listening at port'+port);

*/