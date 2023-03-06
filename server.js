const express = require(`express`);
const app = express();
const { engine } = require(`express-handlebars`);
const PORT = 1337;
app.get(`/`, onHome).listen(PORT, console.log(`Running on port: ${PORT}`));

app.use(express.static(`static`));
app.engine(`handlebars`, engine());
app.set(`view engine`, `handlebars`);
app.set(`views', './views`);



function onHome(req, res) {
	res.render(`test.hbs`);
}

app.get(`/`, onHome());

app.get(`/filter`, (req, res) => {
	res.send(`/styles/style.css`);
});

app.get(`/overons`, (req, res) => {
	res.send(`Overons`);
});


