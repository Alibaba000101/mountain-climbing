const express = require('express');
const router = express.Router();
const mountainsData = require('../data/mountains');

router.get('/', (req, res) => {
    const mountains = mountainsData?.mountains || [];
    const description = mountainsData?.description || 'Explore the world\'s most famous mountains.';

    res.render('mountains', {
        title: 'Famous Mountains of the World',
        page: 'mountains',
        mountains: mountains,
        description: description
    });
});

router.get('/:slug', (req, res) => {
    const mountains = mountainsData?.mountains || [];
    const mountain = mountains.find(m => m.slug === req.params.slug);

    if (!mountain) {
        return res.status(404).render('404', {
            title: 'Mountain Not Found',
            page: '404'
        });
    }

    res.render('mountain-detail', {
        title: `${mountain.name} - Mountain Details`,
        page: 'mountains',
        mountain: mountain
    });
});

module.exports = router;