"use strict";
require("dotenv").config()
const cors = require("cors")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const errorHandler = require("./middlewares/errorHandler")
const router = require('./routes/index')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app