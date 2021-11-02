
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

//define paths and static directory
app.use(express.static(path.join(__dirname, '../public')))
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req,res) => {
    res.render('index', {
        title: 'Hello World',
        name: 'Paul Krisman'
    })
})


app.listen(port, () => {
    console.log('Server is up at port ' + port)
})
