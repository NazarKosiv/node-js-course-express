const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const mainRoutes = require('./routes/main');

const notFoundController = require('./controllers/notFound');

const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(mainRoutes);
app.use(notFoundController);

app.listen(5000);
