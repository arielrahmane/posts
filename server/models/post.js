const Sequelize = require('sequelize');
const Model = Sequelize.Model;
// var Schema = mongoose.Schema;

/*
var PostSchema = new Schema({
  title: String,
  description: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
*/

module.exports = (sequelize, type) => {
	return sequelize.define('post', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: type.STRING,
		description: type.STRING
	})
};
