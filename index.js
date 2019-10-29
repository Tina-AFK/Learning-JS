const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


const users = []

app.post('/testPost', function (req, res) {
	  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
	const {user} = req.body;
	users.push(user);
	  res.send(users)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
