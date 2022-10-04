if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles.js')
const indexRouter = require('./routes/index')
const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))


app.use('/', indexRouter)
app.use('/articles', articleRouter)


app.listen(process.env.PORT || 5000)