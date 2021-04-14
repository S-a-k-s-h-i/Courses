const express = require('express');
const app = express()
const people = require('./routes/people')

//tell our express application to use people route
app.use('/people',people);

app.listen(3000)