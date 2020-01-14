const express = require("express")
const mongoose = require("mongoose")

const routes = require('../src/routes')

const app = express();

mongoose.connect('mongodb://malves:marcel25@ds153179.mlab.com:53179/devs', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);