import { handlebars } from 'hbs'
const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 1337
app.get(`/`, onHome).listen(PORT, console.log(`Running on port: ${PORT}`))

app.use(express.static('static'))
app.use(express.static('views'))
<<<<<<< HEAD
<<<<<<< HEAD
app.set('view engine', 'hbs')
app.set('view engine', 'html')
app.engine('html', require('hbs').__express)
=======
=======
>>>>>>> parent of ed2d45b (HBS werkend maken 1.1)

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
>>>>>>> parent of ed2d45b (HBS werkend maken 1.1)

function onHome(req, res){
	res.render(`index.hbs`) 
}

app.get('/filter', (req, res) => {
	res.send('Filterpagina')
	res.send(`/static/styles/style.css`)
})

app.get('/overons', (req, res) => {
	res.send('Overons')
})

app.get('/', (req, res) => {
	res.send('Hello World!')
})