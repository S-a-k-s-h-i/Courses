const express = require("express");
const app = express();
const router = require('./routes/router');


//load routers
app.use(router);

//PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))