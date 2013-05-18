//var http = require('http');
//
//http.createServer(function(req, res) {    
//    res.end('hello javascript');
//}).listen(8000);

var express = require('express');

var events = require('/models/events')

var app = express();

var events = [];

events.push({
    title: 'Hartford Code Camp 6',
    location: 'Bloomfield, CT',
    time: '9am - 5pm'
});


app.set('port', 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());


app.get('/', function(req, res) {
//    res.end('hello with express');
    res.render('index', {
        title: 'Home',
        message: 'hello javascript'
    });
});

app.get('/events', function(req, res) {
    res.render('list', {
        title: 'List Events',
        events: events
    }); 
});

app.get('/event/new', function(req, res) {
    res.render('new', {
        title: 'New Event'
    });
});

app.post('/new', function(req, res) {
    var newEvent = {
        title: req.body.title,
        location: req.body.location,
        time: req.body.time
    };
    
    events.push(newEvent);
    
    res.redirect('/events');
});

app.get('/bye', function(req, res) {
    res.send('bye'); 
});

app.listen(app.get('port'));