const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

/*
User -> many Posts -> ref:user_id
Post -> 1 User -> ref:user_id

User -> many Comments --> -> ref:user_id
Comment -> 1 User --> -> ref:user_id

Post -> many Comments --> -> ref:post_id
Comment -> 1 Post -->ref:post_id
*/
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
module.exports = { User, Post, Comment };
