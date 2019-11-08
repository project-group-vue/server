const router = require('express').Router()
const auth = require('../middlewares/authenticate')
const { multer,sendUploadToGCS } = require('../middlewares/uploader')
const {uploadGCS,colorize,deepDream,neuralTalk,saveToPublic,findAll} = require('../controllers/imageControllers')

router.post('/uploadgcs',auth ,multer.single('image'),sendUploadToGCS,uploadGCS) 
router.post('/colorize',auth ,colorize) 
router.post('/deepdream',auth ,deepDream) 
router.post('/neuraltalk',auth ,neuralTalk) 
router.post('/share',auth,saveToPublic)
router.get('/findAll',findAll)

module.exports = router