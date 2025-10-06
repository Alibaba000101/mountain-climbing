# Mountain Climbing Website

A beginner-friendly Node.js website about mountain climbing built with Express.js and EJS. This project showcases famous mountains, climbing techniques, and essential equipment for mountaineering enthusiasts.

## 🏔️ Features

- **7 Complete Routes**: Home, Mountains overview, Mountain details (Everest, K2), Climbing guide, Techniques, and Equipment
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Dynamic Content**: All data loaded from separate files using EJS templating
- **Modern UI**: Clean, professional design with CSS Grid and Flexbox
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Error Handling**: Custom 404 page and graceful error management

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd Mountain-Climb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add images** (optional)
   - Place your mountain images in `public/images/`
   - See `public/images/README.md` for image requirements
   - The site works without images (shows placeholder paths)

4. **Start the server**
   ```bash
   npm start
   ```

5. **View the website**
   - Open your browser to: http://localhost:3000
   - The site should load immediately!

### Development Mode

For development with auto-restart on file changes:

```bash
npm run dev
```

## 📁 Project Structure

```
Mountain-Climb/
├── index.js                 # Main Express server
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables
├── routes/
│   ├── mountains.js         # Mountains router (/mountains/*)
│   └── climbing.js          # Climbing router (/climbing/*)
├── data/
│   ├── mountains.js         # Mountain data (Everest, K2, etc.)
│   └── climbing.js          # Techniques and equipment data
├── views/
│   ├── partials/
│   │   ├── header.ejs       # HTML head and navigation
│   │   ├── navigation.ejs   # Site navigation menu
│   │   └── footer.ejs       # Footer and closing HTML
│   ├── index.ejs            # Home page template
│   ├── mountains.ejs        # Mountains overview page
│   ├── mountain-detail.ejs  # Individual mountain pages
│   ├── climbing.ejs         # Climbing guide overview
│   ├── climbing-detail.ejs  # Techniques/equipment details
│   └── 404.ejs              # Error page template
└── public/
    ├── css/
    │   └── style.css        # All website styles
    ├── js/
    │   └── main.js          # Client-side JavaScript
    └── images/
        └── README.md        # Image requirements
```

## 🛠️ Technical Implementation

### Express.js Architecture

- **2 Routers**: Separate routing files for mountains and climbing sections
- **Environment Variables**: Port configuration via .env file
- **Error Handling**: 404 handler and global error middleware
- **Static Files**: CSS, JS, and images served from public directory

### EJS Templating

- **Partials**: Reusable header, navigation, and footer components
- **Data Passing**: All content passed via locals object (no hardcoded content)
- **Conditional Rendering**: Safe data checking with if statements and loops
- **Dynamic Navigation**: Active page highlighting

### Data Organization

- **Separate Data Files**: Mountains and climbing data in dedicated modules
- **Variable Testing**: All variables checked before use to prevent errors
- **Structured Content**: Organized data with proper categorization

### Responsive CSS

- **CSS Variables**: Consistent theming and easy customization
- **Mobile-First**: Responsive design that works on all screen sizes
- **CSS Grid/Flexbox**: Modern layout techniques
- **Image Support**: Responsive images with proper aspect ratios

## 🌐 Website Routes

| Route | Description | Data Source |
|-------|-------------|-------------|
| `/` | Home page | Hardcoded content |
| `/mountains` | Mountains overview | `data/mountains.js` |
| `/mountains/everest` | Mount Everest details | `data/mountains.js` |
| `/mountains/k2` | K2 mountain details | `data/mountains.js` |
| `/climbing` | Climbing guide overview | `data/climbing.js` |
| `/climbing/techniques` | Climbing techniques | `data/climbing.js` |
| `/climbing/equipment` | Equipment guide | `data/climbing.js` |

## 🎨 Customization

### Adding New Mountains

1. Edit `data/mountains.js`
2. Add new mountain object to the `mountains` array
3. Create a new route in `routes/mountains.js`
4. Add the image to `public/images/`

### Modifying Styles

- Edit `public/css/style.css`
- Use CSS variables in `:root` for consistent theming
- All responsive breakpoints are included

### Adding Content

- Mountains data: `data/mountains.js`
- Climbing content: `data/climbing.js`
- Templates: `views/*.ejs`

## 🔧 Configuration

### Environment Variables (.env)

```env
PORT=3000                    # Server port (default: 3000)
NODE_ENV=development         # Environment mode
APP_NAME="Mountain Climbing Adventure"
```

### Package.json Scripts

```json
{
  "start": "node index.js",           # Production start
  "dev": "nodemon index.js"          # Development with auto-restart
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Change port in .env file or kill the process
   lsof -ti:3000 | xargs kill -9
   ```

2. **Images not showing**
   - Check that images exist in `public/images/`
   - Verify image paths in data files
   - See `public/images/README.md` for requirements

3. **CSS not loading**
   - Restart the server: `npm start`
   - Check browser console for errors
   - Verify `public/css/style.css` exists

4. **EJS template errors**
   - Check that all data variables are defined
   - Verify EJS syntax in templates
   - Check server console for detailed errors

### Debug Mode

```bash
DEBUG=* npm start
```

## 📚 Learning Objectives Met

- ✅ **7+ Routes**: Home, mountains overview, 2 mountain details, climbing overview, techniques, equipment
- ✅ **2 Routers**: Separate files for mountains and climbing routes
- ✅ **Environment Variables**: Port configuration via .env
- ✅ **EJS Templates**: All pages use EJS with partials
- ✅ **Dynamic Content**: Data passed from separate files via locals
- ✅ **Conditional Logic**: Safe data checking throughout templates
- ✅ **Responsive CSS**: Mobile-friendly design with images
- ✅ **Static Files**: CSS, JS, and images served from public/
- ✅ **Error Handling**: Custom 404 page and error middleware
- ✅ **Beginner-Friendly**: Well-commented, clean code

## 🌟 Deployment

### Local Deployment
```bash
npm install
npm start
```

### Production Considerations
- Set `NODE_ENV=production` in .env
- Use a process manager like PM2
- Set up reverse proxy with nginx
- Enable HTTPS in production

## 📄 License

This project is created for educational purposes. Feel free to use and modify for learning.

## 🤝 Contributing

This is a beginner-level assignment. Feel free to:
- Add more mountains to the data
- Improve the responsive design
- Add more climbing techniques
- Enhance the user interface

## 📞 Support

If you encounter any issues:
1. Check this README for troubleshooting
2. Verify all files are in the correct locations
3. Check the browser console for JavaScript errors
4. Check the terminal for server errors

---

**🏔️ Happy Climbing!**

*Remember: Always climb responsibly and with proper safety equipment.*