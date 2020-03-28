require('dotenv').config().parsed;
const express = require('express');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/order');
const cors = require('cors');
const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use('/order', orderRoute);

app.get('/', (req, res) => {
	res.json({
		message: 'Success',
		API: 'Running'
	});
});

app.listen(process.env.PORT || 4040, () => console.log(`Server running on port: ${process.env.PORT || 4040}`));
