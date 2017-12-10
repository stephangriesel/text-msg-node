const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// init app 
const app = express();

//template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/public'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Index Route 
app.get('/', (req, res) => {
    res.render('index');
});

// Catch form submit 
app.post('/', () => {
    res.send(req.body);
    console.log(req.body);
});

// define port
const port = 3000;

// start server

const server = app.listen(port, () => console.log(`Server started on port ${port}`));
