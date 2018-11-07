const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const mainRoutes = require('./routes/main');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(mainRoutes);

app.listen(5000);
