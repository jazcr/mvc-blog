const express = require('express');
// const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const path = require('path');

// const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3004;

//need to add sessions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(routes);

// turn on connection to db and server
    app.listen(PORT, () => console.log('Now listening on http://localhost:3004'));
