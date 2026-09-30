const express = require('express'); 

const router = express.Router(); 

//edit
const { protect, authorizeRoles } = require('../middleware/authMiddleware'); 

const { 

  getAllGadgets, 

  getGadgetById, 

  createGadget,
  
  updateGadget, 

  deleteGadget 

} = require('../controllers/gadgetController'); 

const validateGadgetInput = require('../middleware/validateGadgetInput'); 

router.get('/', getAllGadgets); 

router.get('/:id', getGadgetById); 

router.post('/', validateGadgetInput, createGadget); 

//edit
router.put('/:id', protect, validateGadgetInput, updateGadget); 

//edit
router.delete('/:id', protect, authorizeRoles('admin'), deleteGadget); 

module.exports = router; 
