var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  
});

app.get('/ribbon.css', function(req, res){
  res.sendFile(__dirname + '/ribbon.css');
  
});

io.on('connection', function(socket){
  console.log('connected');
  socket.on('chat', function(msg){
    console.log('message: ' + msg);
	 io.emit('chat', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});