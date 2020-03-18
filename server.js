
const routes = require('./routes/route-index');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/user.js'); 


const PORT = process.env.PORT || 3003;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weddingplanner");
const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use('/api/users', users);
app.use('/', routes);



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
