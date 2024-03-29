const express = require('express');
const router = express.Router();

const signup = require('./signup');
const login = require('./login');


// Définit les routes pour l'inscription et la connexion
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
