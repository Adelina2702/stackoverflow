require('dotenv').config()

const express = require('express')
const cors = require('cors');
const fileupload = require('express-fileupload')
const sequlize = require('./db')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(cors())
app.use(fileupload({createParentPath: true}))
app.use(express.static(path.resolve('static')))
app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 8080;

const startServer = async (req, res) => {
    try{
        await sequlize.authenticate();
        await sequlize.sync({ force: false}); // сбрасывает базу данных
        app.listen(PORT, () => console.log('server running on port' + PORT))
    }catch(e){
        console.log(e);
    }
}

startServer()