const express = require("express");
const app = express();
const router = require('./routes/router');


//load routers
app.use(router);

app.listen(3000)