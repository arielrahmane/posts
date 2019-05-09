module.exports = app => {
	app.get('/posts', (req, res) => {
	  res.send(
	    [{
	      title: "Hello World!",
	      description: "Hi there! How are you?"
	    }]
	  )
	})
};