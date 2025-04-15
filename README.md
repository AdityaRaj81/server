### 🛠️  **Server (Backend)**


# 📡 Contact Backend

Handles incoming contact form submissions and stores them in MongoDB Atlas. Built with Express & Mongoose.

## 🚀 Quick Setup

```bash
git clone https://github.com/AdityaRaj81/server.git
cd server
npm install
```

Create a `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run the server:
```bash
node index.js
```

## 🛠️ API Endpoint

```
POST /api/contact
```

Receives:
```json
{ "name": "", "email": "", "phone": "", "message": "" }
```

## 🌐 Deployed URL

[Render Backend URL](https://contact-form-backend-81l6.onrender.com)

---

### 👨‍💻 Maintained By
Aditya Raj
