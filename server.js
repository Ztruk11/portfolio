const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const data = {
        person: {
            firstName: 'Daniel',
            lastName: 'Kurtz',
        }
    }

    res.render('index', data);
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/thanks', (req, res) => {
  res.render('thanks', { contact: req.body })
});

app.get('*', function (req, res) {
  res.send('Whoops, page not found 404').status(404);
})

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});