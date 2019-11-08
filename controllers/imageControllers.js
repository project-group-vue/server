const deepai = require('deepai');
const User = require('../models/user')
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
        res.status(200).json(resp)
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
        res.status(200).json(resp)
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
      res.status(200).json(resp)
  } catch (error) {
      console.log(error)
      next(error)
  }
}

}

module.exports = ImageController