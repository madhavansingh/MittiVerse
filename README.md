# MittiVerse

A modern AI-powered full-stack platform that helps Indian farmers monitor soil health, manage farms, receive smart crop recommendations, and track environmental sustainability metrics. The system combines a React-based frontend with a FastAPI backend to deliver real-time insights, analytics, and community features for farmers.

---

## Features

### 1. Interactive Dashboard (📊)

- **Farm Activity Monitoring**
  - Real-time activity feed with timestamp and status indicators
  - Visual activity icons and color-coded status
  - Automatic time-based updates using date-fns

- **Emissions Tracking**
  - Weekly CO₂ emissions visualization
  - Daily emissions trend analysis
  - Interactive line charts with tooltips
  - Trend indicators (Increasing / Decreasing / Stable)

- **AI Crop Suggestions**
  - Smart crop recommendations based on soil and climate data
  - Historical suggestion tracking
  - Integration with soil analysis data

- **Achievement System**
  - Gamified farming achievements
  - Progress tracking and badges
  - Motivational feedback for farmers

---

### 2. Farm Management (🗺️)

- **Farm Registry**
  - Add and manage multiple farms
  - Track farm size, soil type, and location
  - View historical farm data

- **Interactive Mapping**
  - Leaflet-based maps for farm visualization
  - Location markers and boundaries
  - Satellite and terrain views

- **Soil Analysis**
  - Upload soil data for AI-driven analysis
  - Monitor soil health trends
  - Receive actionable recommendations

---

### 3. Community Features (👥)

- **Farmer Forum**
  - Discussion threads and knowledge sharing
  - Expert guidance and peer support
  - Community-driven collaboration

- **Chat Support**
  - Real-time AI chatbot for quick help
  - Expert connections and file sharing
  - Integrated chat system for assistance

---

### 4. User Interface (📱)

- **Responsive Design**
  - Mobile-first and adaptive layouts
  - Cross-device compatibility
  - Smooth animations and interactive elements

- **Interactive Components**
  - Framer Motion animations
  - Recharts-based data visualization
  - Toast notifications and dynamic loading

---

### 5. Environmental Impact (🌍)

- **Emission & Sustainability Tracking**
  - CO₂ emission calculations and insights
  - Environmental impact scoring
  - Improvement suggestions and reports

- **Eco Achievements**
  - Green badges and gamified incentives
  - Track eco-friendly farming practices
  - Visual impact reports

---

### 6. Data Analytics (📈)

- **Performance Insights**
  - Analyze productivity and resource use
  - View yield trends and historical comparisons
  - Export reports and analytics data

---

### 7. Backend Capabilities (⚙️)

- **User Management**
  - Secure registration and JWT authentication
  - Profile updates and password encryption

- **Farm & Soil APIs**
  - CRUD endpoints for farms and soil data
  - AI-driven soil and crop recommendation system
  - Emission and environmental tracking endpoints

- **Community API**
  - Forum threads and user discussions
  - Notification and achievement systems

- **AI Integration**
  - Text and image-based soil analysis
  - Crop and irrigation recommendations
  - Climate-aware pest and water management alerts

---

## Tech Stack

### Frontend
- **Framework:** React 18  
- **Build Tool:** Vite  
- **Routing:** React Router DOM v6  
- **Styling:** TailwindCSS  
- **State Management:** React Context  
- **API Integration:** Axios  
- **Visualization:** Recharts  
- **Maps:** React Leaflet  
- **Animation:** Framer Motion  
- **Date Handling:** date-fns  

### Backend
- **Framework:** FastAPI  
- **Database:** PostgreSQL with SQLModel ORM  
- **Authentication:** JWT tokens with bcrypt  
- **Containerization:** Docker & Docker Compose  
- **Migration:** Alembic  
- **Docs:** Swagger UI + ReDoc  

---

## Project Structure

```bash
MittiVerse/
├── mittiverse-frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── mittiverse-backend/
│   ├── app/
│   ├── tests/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── alembic.ini
│
├── .gitignore
├── README.md
```

---

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.
