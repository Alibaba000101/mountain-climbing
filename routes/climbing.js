const express = require('express');
const router = express.Router();

const climbingData = require('../data/climbing');

router.get('/', (req, res) => {
    try {
        const techniques = climbingData && climbingData.techniques ? climbingData.techniques : [];
        const equipment = climbingData && climbingData.equipment ? climbingData.equipment : [];

        res.render('climbing', {
            title: 'Mountain Climbing Guide',
            page: 'climbing',
            techniques: techniques,
            equipment: equipment,
            description: climbingData && climbingData.description ? climbingData.description : 'Learn about mountain climbing techniques and equipment.'
        });
    } catch (error) {
        console.error('Error loading climbing page:', error);
        res.status(500).send('Error loading climbing data');
    }
});

router.get('/techniques', (req, res) => {
    try {
        const techniques = climbingData && climbingData.techniques ? climbingData.techniques : [];
        const techniquesInfo = climbingData && climbingData.techniquesPage ? climbingData.techniquesPage : {};

        res.render('climbing-detail', {
            title: 'Mountain Climbing Techniques',
            page: 'climbing',
            detailType: 'techniques',
            items: techniques,
            pageInfo: techniquesInfo,
            description: 'Master essential mountain climbing techniques for safe and successful ascents.'
        });
    } catch (error) {
        console.error('Error loading techniques page:', error);
        res.status(500).send('Error loading techniques data');
    }
});

router.get('/equipment', (req, res) => {
    try {
        const equipment = climbingData && climbingData.equipment ? climbingData.equipment : [];
        const equipmentInfo = climbingData && climbingData.equipmentPage ? climbingData.equipmentPage : {};

        res.render('climbing-detail', {
            title: 'Mountain Climbing Equipment',
            page: 'climbing',
            detailType: 'equipment',
            items: equipment,
            pageInfo: equipmentInfo,
            description: 'Essential gear and equipment for safe mountain climbing adventures.'
        });
    } catch (error) {
        console.error('Error loading equipment page:', error);
        res.status(500).send('Error loading equipment data');
    }
});

module.exports = router;