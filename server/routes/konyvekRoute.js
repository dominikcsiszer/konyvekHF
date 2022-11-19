const express = require('express')
const router = express.Router()

const konyvekController = require('../controllers/konyvekController')

/* API */
router.get('/konyvek', konyvekController.konyvek)
router.get('/konyv/:id', konyvekController.konyv)

module.exports = router