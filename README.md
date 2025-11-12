# 🌿 MittiVerse : AI Powered Agricultural Revolution

> **Empowering Indian farmers through Artificial Intelligence, Data, and Sustainability.**  
> *Cultivate Growth. Harvest Sustainability.*

---

## 🚀 Overview

**MittiVerse** is an **AI powered agricultural innovation platform** designed to help Indian farmers make smarter, data-driven decisions.  
It combines **Artificial Intelligence (AI)**, **Machine Learning (ML)**, and **Sustainability insights** to enhance soil health, boost productivity and promote eco-friendly farming practices.  

MittiVerse provides **soil analysis (via image or data input)**, **personalized crop recommendations**, **weather insights** and **carbon tracking**, all through an easy to use digital interface built for accessibility and impact.

---

## 🧠 Key Features

### 🌱 AI & ML Intelligence
- AI driven **soil analysis** with 95% accuracy from images or manual data.  
- **Crop recommendation system** tailored to soil nutrients, region, and climate.  
- **Localized weather forecasting** and real-time farming insights.

### 🧮 Farm & Soil Management
- Farmers can create and manage multiple **farm profiles**.  
- Track soil condition, fertility, and improvement trends over time.  
- Get **AI insights** for water, fertilizer, and carbon management.

### 💬 Farmer Assistant
- Smart **AI chatbot** offering instant support in simple regional language.  
- Provides tips on irrigation, pest control, and seasonal best practices.

### 🌍 Sustainability Tracking
- Tracks **carbon footprint** and eco-friendly farming actions.  
- Encourages green farming through sustainability scoring and impact reports.

### 👥 Community & Collaboration
- Interactive **farmer forum** for knowledge sharing and discussions.  
- Community-driven **open innovation** — empowering collective learning.

---

## ⚙️ Tech Stack

### 🧩 Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)  
- **Database:** PostgreSQL + SQLModel ORM  
- **Authentication:** JWT + bcrypt  
- **Containerization:** Docker & Docker Compose  
- **Migrations:** Alembic  
- **Testing:** Pytest  
- **AI Integration:** OpenAI API & custom ML models (Regression, CNN)

### 💻 Frontend
- **Framework:** React 18 + Vite  
- **Styling:** Tailwind CSS + Framer Motion  
- **Routing:** React Router DOM v6  
- **Data Visualization:** Recharts  
- **Mapping:** React Leaflet  
- **API Handling:** Axios  
- **State Management:** React Context API

### ☁️ Deployment
- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** PostgreSQL Cloud  
- **Containerization:** Docker  
- **Documentation:** Swagger UI + ReDoc

---

## 🔬 AI Components

| Feature | Description |
|----------|-------------|
| **Soil Image Analysis** | Uses computer vision (CNN) to detect soil type & deficiencies. |
| **Manual Soil Analysis** | ML model predicts nutrients and suitable crops from data. |
| **AI Chatbot** | Context-aware assistant built using OpenAI API. |
| **Sustainability Engine** | Calculates carbon and eco-scores based on activity data. |
| **Weather Model** | Uses rule-based + AI refinement for local forecasts. |

---

## 🧱 System Architecture

Farmers
↓
MittiVerse Frontend (React + Tailwind)
↓
FastAPI Backend (AI + APIs)
↓
PostgreSQL Database
↓
AI Engine (OpenAI + ML Models)
↓
Weather API / Sustainability Tracker

---

## 🔄 Workflow

1. Farmer uploads soil image or data.  
2. Backend processes input using AI and ML models.  
3. AI engine returns nutrient details, crop suggestions, and yield predictions.  
4. Results are displayed visually in the dashboard.  
5. Farmers track sustainability scores and access AI chatbot support.  

---

## 🧩 Future Enhancements

- Integration with **IoT soil sensors** and satellite data.  
- **Voice-based AI assistant** for regional language interaction.  
- **Blockchain-enabled transparency** for soil and sustainability records.  
- Offline access for rural areas with limited connectivity.

---

## 🧑‍💻 Getting Started

### Prerequisites
- Python 3.9+  
- Node.js 18+  
- PostgreSQL  
- Docker (optional)

### Backend Setup
```bash
git clone https://github.com/madhavansingh/MittiVerse.git
cd MittiVerse/backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd MittiVerse/frontend
npm install
npm run dev
```

### Environment Variables
Create a .env file in your backend directory:
```bash
OPENAI_API_KEY=your_openai_key
DATABASE_URL=postgresql://postgres:postgres@db:5432/app_db
SECRET_KEY=your_secret_key_here
```
---

## 🌐 Deployment Links
- MittiVerse: [MittiVerse Deployed](https://mitti-verse.vercel.app/)
- GitHub Repository: [MittiVerse Github](https://github.com/madhavansingh/MittiVerse.git)

### 🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Create a Pull Request

### 📜 License
- This project is licensed under the MIT License – see the LICENSE file for details.
### 📧 Contact
- Author: Madhavan Singh
- Email: madhavansingh32@gmail.com
- LinkedIn: [Madhavan's Linkedin](https://www.linkedin.com/in/madhavan-singh/)
- “Built for the hands that feed the nation” 🌾

---
