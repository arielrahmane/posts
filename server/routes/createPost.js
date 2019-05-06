import Post from '../sequelize';

var newPost = app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var data = {
    title: title,
    description: description
  };

  Post.create(data)
    .then(() => {
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
    .catch(err => {
      console.log("Problem creating post");
      res.status(500).json(err);
    })
});

module.exports = (app) => {
  newPost
};