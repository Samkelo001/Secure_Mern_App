const express = require('express'); 

const router = express.Router(); 

//edit
const { register, login, getProfile } = require('../controllers/authController'); 

//edit
const { protect } = require('../middleware/authMiddleware'); 

router.post('/register', register); 

router.post('/login', login); 

//edit
router.get('/me', protect, getProfile); 

module.exports = router; 
