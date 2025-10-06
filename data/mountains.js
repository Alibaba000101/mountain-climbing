const mountainsData = {
    description: "Discover the world's most magnificent and challenging peaks. From the highest summit on Earth to the savage beauty of K2, these mountains represent the ultimate test of human endurance and the incredible power of nature.",

    mountains: [
        {
            name: "Mount Everest",
            slug: "everest",
            height: "8,848.86 meters (29,031.7 feet)",
            location: "Nepal/Tibet border",
            difficulty: "Extreme",
            firstAscent: "May 29, 1953",
            climbers: "Edmund Hillary and Tenzing Norgay",
            description: "Mount Everest, known as Sagarmatha in Nepal and Chomolungma in Tibet, is Earth's highest mountain above sea level. Located in the Mahalangur Himal sub-range of the Himalayas, it attracts experienced mountaineers from around the world.",
            facts: [
                "Also known as Sagarmatha (Nepal) and Chomolungma (Tibet)",
                "The summit ridge separates Nepal and Tibet",
                "Over 6,000 people have successfully climbed Everest",
                "The climbing season is typically April-May and September-October",
                "The mountain grows approximately 4mm per year due to tectonic activity"
            ],
            dangers: [
                "Altitude sickness and oxygen deprivation",
                "Avalanches and icefalls",
                "Extreme weather conditions",
                "Crowded summit routes",
                "High cost and extensive preparation required"
            ],
            image: "/images/everest.jpg"
        },
        {
            name: "K2",
            slug: "k2",
            height: "8,611 meters (28,251 feet)",
            location: "Pakistan/China border",
            difficulty: "Extreme Plus",
            firstAscent: "July 31, 1954",
            climbers: "Italian expedition led by Ardito Desio",
            description: "K2, also known as the Savage Mountain, is the second-highest mountain on Earth and is considered one of the most difficult and dangerous of the eight-thousanders to climb. Located on the China–Pakistan border, it has a fatality rate much higher than Everest.",
            facts: [
                "Known as the 'Savage Mountain' due to its difficulty",
                "Second highest peak in the world",
                "Located in the Karakoram mountain range",
                "Has a pyramid-like shape with steep slopes",
                "Much more technically challenging than Mount Everest"
            ],
            dangers: [
                "Extremely technical climbing routes",
                "Unpredictable and severe weather",
                "High fatality rate (approximately 1 in 4)",
                "No rescue helicopter access due to altitude",
                "Frequent avalanches and rockfall"
            ],
            image: "/images/k2.jpg"
        },
        {
            name: "Denali",
            slug: "denali",
            height: "6,190 meters (20,310 feet)",
            location: "Alaska, USA",
            difficulty: "Very High",
            firstAscent: "June 7, 1913",
            climbers: "Hudson Stuck, Harry Karstens, Walter Harper, and Robert Tatum",
            description: "Denali, formerly known as Mount McKinley, is the highest peak in North America. Located in Alaska, it's known for its extreme cold temperatures and challenging weather conditions that can change rapidly.",
            facts: [
                "Highest peak in North America",
                "Native name 'Denali' means 'the tall one'",
                "Located in Denali National Park",
                "Experiences some of the coldest temperatures on Earth",
                "Has the largest base-to-peak rise of any mountain on land"
            ],
            dangers: [
                "Extreme cold (temperatures can drop to -40°F)",
                "Rapid weather changes",
                "Crevasse fields on glaciers",
                "Altitude sickness despite lower elevation",
                "Limited rescue options in remote location"
            ],
            image: "/images/denali.jpg"
        }
    ]
};

module.exports = mountainsData;