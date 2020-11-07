import express from 'express'

function renderFullPage(html, css) {

}


function handleRender(req, res) {

}

const app = express();

//fired at every request
app.use(handleRender);


const port = 3000;
app.listen(port);