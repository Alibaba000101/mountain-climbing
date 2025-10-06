# Mountain Climbing Website

A beginner-friendly Node.js website about mountain climbing built with Express.js and EJS. This project showcases famous mountains, climbing techniques, and essential equipment for mountaineering enthusiasts.

## 🏔️ Features

- **7 Complete Routes**: Home, Mountains overview, Mountain details (Everest, K2), Climbing guide, Techniques, and Equipment
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Dynamic Content**: All data loaded from separate files using EJS templating
- **Modern UI**: Clean, professional design with CSS Grid and Flexbox
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Error Handling**: Custom 404 page and graceful error management

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

4. **Start the server**
   ```bash
   npm start
   ```

5. **View the website**
   - Open your browser to: http://localhost:3000
   - The site should load instantly


### Express.js Architecture

- **2 Routers**: Separate routing files for mountains and climbing sections
- **Environment Variables**: Port configuration via .env file
- **Error Handling**: 404 handler and global error middleware
- **Static Files**: CSS, JS, and images served from public directory


### Environment Variables (.env)

```env
PORT=3000                    # Server port (default: 3000)
NODE_ENV=development         # Environment mode
APP_NAME="Mountain Climbing Adventure"
```

### Local Deployment
```bash
npm install
npm start


This project is created for educational purposes. Feel free to use and modify for learning.


**🏔️ Happy Climbing!**

*Remember: Always climb responsibly and with proper safety equipment.*