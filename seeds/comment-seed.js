const { Comment } = require('../models');

const commentsData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: 'I love JavaScript!',
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: 'JavaScript is not my thang yall!',
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: 'Looking forward to learning more about backend!',
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;