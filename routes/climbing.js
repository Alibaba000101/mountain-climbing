const express = require('express');
const router = express.Router();
const climbingData = require('../data/climbing');

router.get('/', (req, res) => {
    const techniques = climbingData?.techniques || [];
    const equipment = climbingData?.equipment || [];
    const description = climbingData?.description || 'Learn about mountain climbing techniques and equipment.';

    res.render('climbing', {
        title: 'Mountain Climbing Guide',
        page: 'climbing',
        techniques: techniques,
        equipment: equipment,
        description: description
    });
});

router.get('/techniques', (req, res) => {
    const techniques = climbingData?.techniques || [];
    const techniquesInfo = climbingData?.techniquesPage || {};

    res.render('climbing-detail', {
        title: 'Mountain Climbing Techniques',
        page: 'climbing',
        detailType: 'techniques',
        items: techniques,
        pageInfo: techniquesInfo,
        description: 'Master essential mountain climbing techniques for safe and successful ascents.'
    });
});

router.get('/equipment', (req, res) => {
    const equipment = climbingData?.equipment || [];
    const equipmentInfo = climbingData?.equipmentPage || {};

    res.render('climbing-detail', {
        title: 'Mountain Climbing Equipment',
        page: 'climbing',
        detailType: 'equipment',
        items: equipment,
        pageInfo: equipmentInfo,
        description: 'Essential gear and equipment for safe mountain climbing adventures.'
    });
});

module.exports = router;