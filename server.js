const express = require ("express");
const mongoose = require ("mongoose");
const path = require("path")
const routes = require ("./routes/route-index");
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const app = express ();
const PORT = process.env.PORT || 3003;

const users = require('./routes/user'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

// app.get('/', function(req, res) {
//     res.send('hello');
// });
// const user = require("./backend/routes/user"); 
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Add routes, both API and view
 app.use(routes);

 

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weddingplanner");

// Start the API server
app.listen(PORT, () => {
    console.log(` API Server now listening on PORT ${PORT}!`);
  });
 




