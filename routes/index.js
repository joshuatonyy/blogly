const express = require('express')
const route = express.Router()
const Article = require('../models/article')

route.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', {articles: articles})
})

module.exports = route;