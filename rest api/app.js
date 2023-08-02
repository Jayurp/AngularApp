const express = require('express');
const app = express();
const detailRoute = require('./routes/det/per_details');

app.use('/jayur', detailRoute)

app.use((req, res, next)=>{
    res.status(200).json({
        message: 'app is running'
    });
    res.header("Access-Control-Allow-Origin",
			"http://localhost:4200");
	res.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/api/message', (req, res) => {
	res.json({ message:
			'Hello GEEKS FOR GEEKS Folks from the Express server!' });
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});

module.exports = app;