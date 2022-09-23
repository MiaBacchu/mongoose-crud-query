const { toursModel } = require("../models/toursModel");

module.exports.viewCount = async (req,res,next)=>{
    const {id} = req.params;
    try {
    await toursModel.updateOne({_id:id},{$inc:{viewCount: 1}});
    next();
    } catch (error) {
    res.status(500).json({
        messsage: 'There is a server side error'
      })    
}
}