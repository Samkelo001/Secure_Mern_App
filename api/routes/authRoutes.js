const express = require('express'); 

const router = express.Router(); 

const { register, login, getProfile } = require('../controllers/authController'); 

const { protect } = require('../middleware/authMiddleware'); 

/*edit*/
const { validateRegisterInput, validateLoginInput } = require('../middleware/validateAuthInput'); 

/*edit*/
const { authLimiter } = require('../middleware/rateLimiters'); 

/*edit*/
router.post('/register', authLimiter, validateRegisterInput, register); 

/*edit*/
router.post('/login', authLimiter, validateLoginInput, login);  

router.get('/me', protect, getProfile); 

module.exports = router; 
