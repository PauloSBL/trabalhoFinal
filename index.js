const mysql = require('mysql2')
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const conn = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"teste"
})


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
app.set('views', './app/views');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/login', (req, res) => {
    res.render('login');
});


app.listen(3000);