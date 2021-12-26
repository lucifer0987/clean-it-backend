const express = require('express');
const app = express();
const db = require('./db/db')();
const auth = require('./auth/auth');
const schedule_pickup = require('./pickup_apis/schedule_pickup')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Clean It');
});

app.use('/auth', auth);
app.use('/pickup', schedule_pickup);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})
