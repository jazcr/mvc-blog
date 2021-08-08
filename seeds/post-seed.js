const { Post } = require('../models');

const postData = [
    {
        title: 'My New Project',
        post_content: 'I am working on a new full-stack project!',
        user_id: 1,
    },
    {
        title: 'First Internship',
        post_content: 'I got my first ever tech internship at Google. Stay tuned for updates!',
        user_id: 2,
    },
    {
        title: 'Working Remotely',
        post_content: 'I have been working remotely for over a year now and these are the reasons I would never go back:',
        user_id: 3,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
