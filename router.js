const express = require('express');
const router = express.Router();
const {getAllPersonnel, getPersonnel, addPersonnel} = require('./controller')



router.get('/', getAllPersonnel);
router.get('/:id', getPersonnel);
router.post('/', addPersonnel);

module.exports = router;