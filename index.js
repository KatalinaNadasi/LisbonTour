const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index');


// views
app.set('views', './views');
app.set('view engine', 'pug');

// controller
app.use('/', routes);

app.listen(port, () => console.log(`We are listening on port ${port}`))
