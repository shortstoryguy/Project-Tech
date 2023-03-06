const express = require(`express`);
const app = express();
const { engine } = require(`express-handlebars`);
const PORT = 1337;
app.get(`/`, onHome).listen(PORT, console.log(`Running on port: ${PORT}`));

app.use(express.static(`static`));
app.engine(`.hbs`, engine({ extname: `.hbs` }));
app.set(`view engine`, `.hbs`);
app.set(`views`, `./views`);



function onHome(req, res) {
	res.render(`test.hbs`);
}

app.get(`/`, (req, res) => {
	res.render(onHome);
});

app.get(`/filter`, (req, res) => {
	res.send(`/styles/style.css`);
});

app.get(`/overons`, (req, res) => {
	res.send(`Overons`);
});


