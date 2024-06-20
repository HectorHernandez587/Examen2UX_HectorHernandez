const express = require('express');
const router = express.Router();
const admin = require('../config/firebase');

router.post('/createUser', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/logIn', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().getUserByEmail(email);
    res.status(200).json({ message: 'User logged in', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/logOut', (req, res) => {
  res.status(200).json({ message: 'User logged out' });
});

module.exports = router;
