const { User } = require('../models');

const userData = [
    {
        username: 'techGirl101',
        email: 'girl@tech.tech',
        password: 'password1',
    },
    {
        username: 'techDude',
        email: 'dude@tech.tech',
        password: 'password2',
    },
    {
        username: 'javaScriptGirl',
        email: 'jsgirl@tech.tech',
        password: 'password3',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;