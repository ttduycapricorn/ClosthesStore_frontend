const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

const PORT = 2222;

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cookie parser
app.use(cookieParser());

// config CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
);

app.use((req, res) => {
    return res.send('404 not found!');
});

app.listen(PORT || process.env.PORT, () => {
    console.log('server running at port: ' + PORT);
});

app.get('/', (req, res) => {
    res.send('chung ta cua hien tai');
});
