// Require extension
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// home
app.get('/', routes.home);

// Movie single
app.get('/star_wars_movie_number/:episode_number?', routes.movie_single);

// not found
app.get('*', routes.not_found);



// Port settings
app.listen(process.env.PORT || 3000);