const router = require('express').Router()
const auth = require('../middlewares/authenticate')
const { multer,sendUploadToGCS } = require('../middlewares/uploader')
const {uploadGCS,colorize,deepDream,neuralTalk} = require('../controllers/imageControllers')

router.post('/uploadgcs',auth ,multer.single('image'),sendUploadToGCS,uploadGCS) //auth belum dipasang
router.post('/colorize',auth ,colorize) //auth belum dipasang
router.post('/deepdream',auth ,deepDream) //auth belum dipasang
router.post('/neuraltalk',auth ,neuralTalk) //auth belum dipasang

module.exports = router