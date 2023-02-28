const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use(expressLayouts);


const PORT = 80;


app.get('/', (req, res) => {
    res.status(200).render('index', { page: 'softwares' });
});

app.get('/sheets', (req, res) => {
    res.status(200).render('sheets', { page: 'sheets' });
});

app.get('/compilers', (req, res) => {
    res.status(200).render('compilers', { page: 'compilers' });
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});