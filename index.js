require('dotenv').config();

const express = require('express');
const path = require('path');

const mountainsRouter = require('./routes/mountains');
const climbingRouter = require('./routes/climbing');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.render('index', {
            title: 'Mountain Climbing Adventure',
            page: 'home'
        });
    } catch (error) {
        console.error('Error rendering home page:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use('/mountains', mountainsRouter);
app.use('/climbing', climbingRouter);

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        page: '404'
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Mountain Climbing website is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;