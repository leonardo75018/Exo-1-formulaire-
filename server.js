const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()


//Monteur de template
app.engine("handlebars", handlebars({defaultLayout: "main"}) )
app.set("view engine", "handlebars");

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Routes 
app.get('/', function (req, res) {
  res.render("formulaire")
})

// Quand tu envoie des datas 
app.post('/', function (req, res) {
    console.log(req.body)
    res.redirect("/")
    // console.log("bien envoyer")
})

app.listen(4000, function () {
  console.log('Example app listening on port 3000!')
})