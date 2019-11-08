const deepai = require('deepai');
const User = require('../models/user')
const Image = require('../models/images')
deepai.setApiKey(process.env.DEEP_AI_KEY);

class ImageController{

  static async uploadGCS(req,res,next){
    try {
      let _id = req.user.id
      let name = req.file.originalname
      let location = req.file.cloudStoragePublicUrl
      let data = {name,location}
      const updateUser = await User.updateOne({_id},{image : location})
      res.status(201).json({data,updateUser})
    } catch (error) {
      next(error)
    }
  }

  static async deepDream(req,res,next){
    try {
      let { imageUrl }= req.body
        var resp = await deepai.callStandardApi("deepdream", {
                image: `${imageUrl}`,
        });
        console.log(resp);
        res.status(200).json(resp.output_url)
    } catch (error) {
        console.log(error)
        next(error)
    }
  }

  static async colorize(req,res,next){
    try {
      let { imageUrl }= req.body
        var resp = await deepai.callStandardApi("colorizer", {
                image: `${imageUrl}`,
        });
        res.status(200).json(resp.output_url)
    } catch (error) {
        next(error)
    }
  }


  static async neuralTalk(req,res,next){
    try {
      let { imageUrl } = req.body
        var resp = await deepai.callStandardApi("neuraltalk", {
                image: `${imageUrl}`,
        });
        console.log(resp);
        res.status(200).json(resp.output)
    } catch (error) {
        console.log(error)
        next(error)
    }
  }

  static async saveToPublic(req,res,next){
    try {
      let _id = req.user.id
      let image = req.body.image
      const created = await Image.create({image,userId : _id})
      const updateImage = await User.updateOne({_id},{image})
      res.status(200).json({created,updateImage}) 
    } catch (error) {
      next(error)
    }
  }

  static async findAll(req,res,next){
    try {
      let find = await Image.find()
      res.status(200).json(find)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = ImageController