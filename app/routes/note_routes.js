module.exports = function(app, db){
	app.post('/notes', (req, res) => {
		//You will create your note here
		console.log(req.body)
		res.send('Hello')
	});
};
