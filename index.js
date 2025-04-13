const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("❌ Error while saving to MongoDB:", error); // Add this line
    res.status(500).json({ message: 'Server Error' });
  }
});


app.get('/', (req, res) => {
  res.send("Backend running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

