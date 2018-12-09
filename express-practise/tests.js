let express = require('express');
let app = express();
const port = 1337;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html');
});
app.listen(port);
