const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Backend/config/mongo');
const userRoutes = require('./Backend/routes/userRoutes');
const postRoutes = require('./Backend/routes/postRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
