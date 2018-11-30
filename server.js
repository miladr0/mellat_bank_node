const cors = require('cors')();
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

global.publicDir = __dirname + "/public/";

const routes = require('./routes/index');


app.use(cors);
app.options('*', cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use('/', routes);

let server = require('http').createServer(app);

global.mainPort = process.env.MAIN_PORT;
server.listen(mainPort, function () {
    console.log("Listening on " + mainPort);
});
