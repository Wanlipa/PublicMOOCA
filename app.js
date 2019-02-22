const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// Controllers
const errorController = require('./controllers/error');
// Database
const sequelize = require('./util/database');

// Models

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// set routes
const mainRoutes = require('./routes/index');
const courseRoutes = require('./routes/course');

// Middleware set body parser to get image
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(courseRoutes);

app.use(errorController.get404);

sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
        console.log(result => {
            console.log(result);
        })
    })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log(err));


