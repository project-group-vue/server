

class ImageController{

  static async uploadGCS(req,res,next){
    try {
      let name = req.file.originalname
      let location = req.file.cloudStoragePublicUrl
      console.log(name)
      console.log(location);
      let data = {name,location}
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async deepDream(req,res,next){
    try {
        var resp = await deepai.callStandardApi("deepdream", {
                image: "IMAGE_URL",
        });
        console.log(resp);
    } catch (error) {
        console.log(error)
        next(error)
    }
  }

  static async colorize(req,res,next){
    try {
      let url = req.body.imageUrl
        var resp = await deepai.callStandardApi("colorizer", {
                image: `${url}`,
        });
        console.log(resp);
    } catch (error) {
        console.log(error)
        next(error)
    }
  }


  static async neuralTalk(req,res,next){
  try {
      var resp = await deepai.callStandardApi("neuraltalk", {
              image: "IMAGE_URL",
      });
      console.log(resp);
  } catch (error) {
      console.log(error)
      next(error)
  }
}

}

module.exports = ImageController