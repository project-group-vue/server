const router = require('express').Router()
const auth = require('../middlewares/authenticate')
const { multer,sendUploadToGCS } = require('../middlewares/uploader')
const {uploadGCS,colorize,deepDream,neuralTalk} = require('../controllers/imageControllers')

router.post('/uploadgcs',multer.single('image'),sendUploadToGCS,uploadGCS) //auth belum dipasang
router.post('/colorize',auth,colorize)
router.post('/deepdream',auth,deepDream)
router.post('/neuraltalk',auth,neuralTalk)

// router.post('/upload',  upload.multer.single('image'), upload.sendUploadToGCS, fotoController.getLinkUploaded)

module.exports = router