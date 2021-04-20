const express = require("express")
const bodyParser = require("body-parser")
const router = require("./routes/user")
const app = express()

const port = 5000 || process.env.PORT

app.use(bodyParser.json());

app.use('/users',router)

app.listen(port,() => {
    console.log(`listening on port : http://localhost:${port}`)
})
