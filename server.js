

  const routes = require('./routes/route-index');
  const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user.js'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use('/api/users', users);
app.use('/', routes);


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});