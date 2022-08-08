const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    console.log(req.body);
    // expects {title: 'Taskmaster goes public!', body: 'This is an awesome site', user_id: 1}
    Post.create({
      title: req.body.title,
      body: req.body.postBody,
      user_id: req.session.user_id,
      
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;