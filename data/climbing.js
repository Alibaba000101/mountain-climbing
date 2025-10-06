const climbingData = {
    description: "Master the art of mountain climbing with proper techniques and essential equipment. Whether you're a beginner or experienced climber, understanding the fundamentals is crucial for safe and successful mountain adventures.",

    techniquesPage: {
        title: "Essential Mountain Climbing Techniques",
        intro: "Mountain climbing requires a combination of physical fitness, technical skills, and mental preparation. These fundamental techniques will help you navigate various terrain and conditions safely.",
        safety: "Always climb with experienced partners, check weather conditions, and inform others of your climbing plans."
    },

    techniques: [
        {
            name: "Basic Rock Climbing",
            difficulty: "Beginner",
            description: "Learn fundamental rock climbing techniques including proper handholds, footholds, and body positioning.",
            steps: [
                "Maintain three points of contact (two hands and one foot, or two feet and one hand)",
                "Keep your weight over your feet, not hanging from your arms",
                "Look ahead to plan your route before moving",
                "Use your legs to push up, not your arms to pull",
                "Practice on easier routes before attempting difficult climbs"
            ],
            safetyTips: [
                "Always wear a properly fitted helmet",
                "Check all equipment before climbing",
                "Climb with a experienced partner",
                "Know how to fall safely"
            ]
        },
        {
            name: "Ice Climbing",
            difficulty: "Advanced",
            description: "Specialized technique for climbing frozen waterfalls and ice formations using ice axes and crampons.",
            steps: [
                "Learn proper ice axe techniques and self-arrest",
                "Practice crampon walking and front-pointing",
                "Understand ice conditions and quality assessment",
                "Master ice screw placement for protection",
                "Develop efficient movement on vertical ice"
            ],
            safetyTips: [
                "Check ice conditions and stability",
                "Wear appropriate cold weather clothing",
                "Carry avalanche safety equipment in alpine areas",
                "Never climb alone on ice"
            ]
        },
        {
            name: "Alpine Climbing",
            difficulty: "Expert",
            description: "Multi-pitch climbing combining rock, ice, and snow techniques at high altitude.",
            steps: [
                "Master both rock and ice climbing fundamentals",
                "Learn efficient belaying and rappelling techniques",
                "Practice rope management and multi-pitch systems",
                "Develop route finding and navigation skills",
                "Build physical and mental endurance for long climbs"
            ],
            safetyTips: [
                "Plan for weather changes and retreat options",
                "Carry emergency bivouac equipment",
                "Understand avalanche and rockfall hazards",
                "Train for self-rescue scenarios"
            ]
        },
        {
            name: "High Altitude Techniques",
            difficulty: "Expert",
            description: "Specialized skills for climbing at extreme altitudes where oxygen levels are significantly reduced.",
            steps: [
                "Acclimatize gradually to prevent altitude sickness",
                "Learn to recognize symptoms of altitude-related illnesses",
                "Practice efficient movement to conserve energy",
                "Master the use of supplemental oxygen systems",
                "Develop strategies for extreme cold weather climbing"
            ],
            safetyTips: [
                "Ascend slowly and allow time for acclimatization",
                "Stay hydrated and maintain proper nutrition",
                "Monitor team members for altitude sickness symptoms",
                "Have descent plans ready for emergencies"
            ]
        }
    ],

    equipmentPage: {
        title: "Essential Mountain Climbing Equipment",
        intro: "Proper equipment is crucial for safe mountain climbing. This guide covers the essential gear needed for different types of climbing, from basic day trips to multi-day alpine adventures.",
        safety: "Always inspect your equipment before each use and replace any damaged or worn items immediately."
    },

    equipment: [
        {
            category: "Climbing Hardware",
            essential: true,
            items: [
                {
                    name: "Climbing Harness",
                    description: "Distributes weight and provides attachment points for ropes and gear",
                    uses: ["All types of roped climbing", "Rappelling", "Belaying"],
                    features: ["Adjustable leg loops", "Gear loops", "Belay loop", "Comfort padding"]
                },
                {
                    name: "Climbing Helmet",
                    description: "Protects head from falling rocks and impact during falls",
                    uses: ["Rock climbing", "Ice climbing", "Alpine climbing"],
                    features: ["Lightweight construction", "Ventilation", "Adjustable fit", "Headlamp clips"]
                },
                {
                    name: "Dynamic Climbing Rope",
                    description: "Absorbs energy during falls and connects climbing team",
                    uses: ["Lead climbing", "Top rope climbing", "Rappelling"],
                    features: ["Energy absorption", "Various diameters (9-11mm)", "Dry treatment options", "High strength"]
                }
            ]
        },
        {
            category: "Protection and Anchors",
            essential: true,
            items: [
                {
                    name: "Carabiners",
                    description: "Metal clips for connecting rope to protection and anchors",
                    uses: ["Quickdraws", "Belaying", "Rappelling", "Anchor building"],
                    features: ["Locking and non-locking types", "Various shapes", "High strength", "Smooth operation"]
                },
                {
                    name: "Quickdraws",
                    description: "Pre-sewn slings with carabiners for protection while lead climbing",
                    uses: ["Sport climbing", "Traditional climbing", "Alpine climbing"],
                    features: ["Various lengths", "Bent gate carabiners", "Lightweight", "Easy clipping"]
                },
                {
                    name: "Nuts and Hexes",
                    description: "Passive protection pieces that wedge into rock cracks",
                    uses: ["Traditional climbing", "Alpine climbing", "Anchor building"],
                    features: ["Various sizes", "Lightweight", "Removable", "No moving parts"]
                }
            ]
        },
        {
            category: "Mountaineering Gear",
            essential: false,
            items: [
                {
                    name: "Ice Axe",
                    description: "Multi-purpose tool for ice climbing and snow travel",
                    uses: ["Ice climbing", "Snow climbing", "Self-arrest", "Cutting steps"],
                    features: ["Sharp pick", "Adze or hammer", "Spike", "Various lengths"]
                },
                {
                    name: "Crampons",
                    description: "Spiked metal frames that attach to boots for ice and snow",
                    uses: ["Ice climbing", "Snow climbing", "Glacier travel"],
                    features: ["10-12 points", "Adjustable binding", "Front points", "Anti-balling plates"]
                },
                {
                    name: "Mountaineering Boots",
                    description: "Insulated boots designed for cold weather and crampon compatibility",
                    uses: ["High altitude climbing", "Ice climbing", "Cold weather climbing"],
                    features: ["Insulation", "Waterproof", "Rigid sole", "Crampon compatibility"]
                }
            ]
        },
        {
            category: "Safety Equipment",
            essential: true,
            items: [
                {
                    name: "Belay Device",
                    description: "Controls rope during belaying and rappelling",
                    uses: ["Belaying", "Rappelling", "Lead climbing"],
                    features: ["Assisted braking options", "Multiple rope compatibility", "Lightweight", "Easy operation"]
                },
                {
                    name: "Personal Anchor System",
                    description: "Adjustable tether for securing yourself to anchors",
                    uses: ["Anchor cleaning", "Belaying", "Rest stops", "Rappelling"],
                    features: ["Adjustable length", "High strength", "Lightweight", "Easy adjustment"]
                },
                {
                    name: "First Aid Kit",
                    description: "Medical supplies for treating injuries in remote locations",
                    uses: ["Emergency medical care", "Blister treatment", "Pain relief"],
                    features: ["Compact size", "Waterproof", "Mountain-specific supplies", "Emergency medications"]
                }
            ]
        }
    ]
};

module.exports = climbingData;