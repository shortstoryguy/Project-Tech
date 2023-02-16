const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 1337;
app.get(`/`, onHome).listen(PORT, console.log(`Running on port: ${PORT}`));

function onHome(req, res){
	res.send(`Hallo`) 
}
