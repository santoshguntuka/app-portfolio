const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).send('All fields are required.');
    }
  
    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(200).send('Message received successfully!');
    } catch (err) {
      console.error('Error saving contact form submission:', err); // Log the full error object
      res.status(500).send('Failed to send message. Please try again.');
    }
  });
  
  

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
