# 🕐 Fuzzy Clock

A beautiful, multilingual fuzzy clock that displays time in a human-readable, natural language format. Instead of showing "3:47", it shows "almost four o'clock" or "hampir jam empat" depending on your language preference.

## ✨ Features

- 🌍 **5 Languages Support**: Indonesian, English, Japanese, Spanish, and Chinese
- 🌓 **Dark/Light Mode**: Beautiful theme toggle with smooth transitions
- 🎨 **Modern UI**: Clean, minimalist design with smooth animations
- ⚡ **Real-time Updates**: Clock updates every 10 seconds
- 🔤 **Custom Typography**: Uses SF Pro font for a premium look
- 📱 **Responsive**: Works seamlessly on all devices
- 🐳 **Docker Ready**: Easy deployment with Docker Compose

## 🌐 Supported Languages

Access different languages via URL paths:

- `/id` - 🇮🇩 Indonesian (Bahasa Indonesia)
- `/en` - 🇬🇧 English
- `/jp` - 🇯🇵 Japanese (日本語)
- `/es` - 🇪🇸 Spanish (Español)
- `/zh` - 🇨🇳 Chinese (中文)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker & Docker Compose (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rayhanzz772/fuzzy-clock.git
   cd fuzzy-clock-app
   ```

2. **Install dependencies**

   For frontend:
   ```bash
   cd frontend
   npm install
   ```

   For backend:
   ```bash
   cd backend
   npm install
   ```

3. **Run the application**

   **Option A: Development Mode**
   
   Frontend (Terminal 1):
   ```bash
   cd frontend
   npm run dev
   ```
   
   Backend (Terminal 2):
   ```bash
   cd backend
   npm start
   ```

   **Option B: Docker Compose**
   ```bash
   docker-compose up
   ```

4. **Access the app**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🏗️ Project Structure

```
fuzzy-clock-app/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── fuzzy-clock.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── contexts/     # React contexts
│   │   │   └── ThemeContext.jsx
│   │   ├── i18n/         # Internationalization
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── Dockerfile
│   └── package.json
├── backend/              # Express.js backend
│   ├── routes/
│   │   └── fuzzy.js
│   ├── utils/
│   │   └── fuzzy-logic.js
│   ├── index.js
│   ├── Dockerfile
│   └── package.json
├── src/                  # Shared utilities
│   └── utils/
│       └── fuzzy-logic.js
├── docker-compose.yml
└── README.md
```

## 🎨 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Styling with utility classes
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 🌟 Usage Examples

The fuzzy clock displays time in natural, human-readable phrases:

### Indonesian
- "Tepat jam Tiga" (Exactly three o'clock)
- "Setengah menuju jam Lima" (Half past four)
- "Hampir jam Delapan" (Almost eight)

### English
- "Exactly Three o'clock"
- "Half past Four"
- "Almost Eight"

### Japanese
- "ちょうど三時" (Exactly 3 o'clock)
- "五時半頃" (Around 5:30)
- "もうすぐ八時" (Almost 8)

### Spanish
- "Exactamente las Tres"
- "Las Cinco y media"
- "Casi las Ocho"

### Chinese
- "三点整" (3 o'clock sharp)
- "五点半左右" (Around 5:30)
- "快八点了" (Almost 8)

## 🎯 API Endpoints

### Get Fuzzy Time
```
GET /api/fuzzy-time?lang={language}
```

**Parameters:**
- `lang` (string): Language code (id, en, jp, es, zh)

**Response:**
```json
{
  "time": "14:47",
  "fuzzy": "Hampir jam Tiga",
  "language": "id"
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
```

### Customization

**Change update interval:** Edit `fuzzy-clock.jsx`
```javascript
const interval = setInterval(updateTime, 10000) // 10 seconds
```

**Modify theme colors:** Edit `App.jsx` and `ThemeToggle.jsx`

## 🐳 Docker Deployment

The project includes Docker configuration for easy deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**rayhanzz772**
- GitHub: [@rayhanzz772](https://github.com/rayhanzz772)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Inspired by the concept of "fuzzy time" from various smartwatches
- Built with modern web technologies
- Typography powered by SF Pro

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by rayhanzz772
