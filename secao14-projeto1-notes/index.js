// Configurações
const express = require('express');
// const exphbs = require('express-handlebars'); --> jeito original
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

// DB
const db = require('./db/connection');

const app = express();
const port = 8000;

// Template engine
// app.engine('handlebars', exphbs()); --> jeito original
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Importação de rotas
const notesRoutes = require('./routes/notes');

/* // Rotas
app.get('/', function(req, res) {
    (async() => {
        const notes = await db.getDb().db().collection('notes').find({}).toArray();
        res.render('home', {notes});
    })()
    
    // res.send('O aplicativo está funcionando');
}); */

// Rotas
app.get('/', async function(req, res) {
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', {notes});
});

app.use('/notes', notesRoutes);

// app.listen(port, () => {
//     console.log(`Projeto rodando na porta: ${port}`);
// });

db.initDb((err, db) => {
    if(err) {
        console.log(err);
    } else {
        console.log("O banco conectou com sucesso!");
        app.listen(port, () => {
            console.log(`Projeto rodando na porta: ${port}`);
        })
    }
});