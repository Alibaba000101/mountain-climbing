const express = require('express');
const router = express.Router();

const mountainsData = require('../data/mountains');

router.get('/', (req, res) => {
    try {
        const mountains = mountainsData && mountainsData.mountains ? mountainsData.mountains : [];

        res.render('mountains', {
            title: 'Famous Mountains of the World',
            page: 'mountains',
            mountains: mountains,
            description: mountainsData && mountainsData.description ? mountainsData.description : 'Explore the world\'s most famous mountains.'
        });
    } catch (error) {
        console.error('Error loading mountains page:', error);
        res.status(500).send('Error loading mountains data');
    }
});

router.get('/everest', (req, res) => {
    try {
        const mountains = mountainsData && mountainsData.mountains ? mountainsData.mountains : [];
        const everest = mountains.find(mountain => mountain.slug === 'everest');

        if (!everest) {
            return res.status(404).render('404', {
                title: 'Mountain Not Found',
                page: '404'
            });
        }

        res.render('mountain-detail', {
            title: `${everest.name} - Mountain Details`,
            page: 'mountains',
            mountain: everest
        });
    } catch (error) {
        console.error('Error loading Everest page:', error);
        res.status(500).send('Error loading mountain data');
    }
});

router.get('/k2', (req, res) => {
    try {
        const mountains = mountainsData && mountainsData.mountains ? mountainsData.mountains : [];
        const k2 = mountains.find(mountain => mountain.slug === 'k2');

        if (!k2) {
            return res.status(404).render('404', {
                title: 'Mountain Not Found',
                page: '404'
            });
        }

        res.render('mountain-detail', {
            title: `${k2.name} - Mountain Details`,
            page: 'mountains',
            mountain: k2
        });
    } catch (error) {
        console.error('Error loading K2 page:', error);
        res.status(500).send('Error loading mountain data');
    }
});

module.exports = router;