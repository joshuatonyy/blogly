const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    const articles = [{
        title: 'Test 1',
        createdAt: new Date(),
        description: 'As the policeman pulled back the sheet, she knew immediately that'
    }, {
        title: 'Test 2',
        createdAt: new Date(),
        description: "The little boy's idea of heaven was"
    }]
    res.render('articles/index', {articles: articles})
})

module.exports = route;