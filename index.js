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
    res.render('index', {
        title: 'Mountain Climbing Adventure',
        page: 'home'
    });
});

app.use('/mountains', mountainsRouter);
app.use('/climbing', climbingRouter);

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        page: '404'
    });
});

app.listen(PORT, () => {
    console.log(`Mountain Climbing website running on http://localhost:${PORT}`);
});

module.exports = app;