const { toursModel } = require("../models/toursModel");

// Patch a tour with id
module.exports.tourPatch = async (req,res)=>{
    const id = req.params.id;
    try {
        await toursModel.updateOne({_id:id},{$set:req.body},{ runValidators: true});
        res.status(500).json('Successfully Updated');
    } catch (error) {
      res.status(500).json({
        messsage: 'There is a server side error'
      })  
    }
};
// get trending tours
module.exports.getTrendingTour = async (req,res)=>{
    try {
        const tours = await toursModel
        .where().sort("-viewCount name").limit(3);
        res.send(tours);
    } catch (error) {
      res.status(500).json({
        messsage: 'There is a server side error for trending'
      })  
    }
}
// get cheapest tours
module.exports.getCheapestTour = async (req,res)=>{
    try {
        const tours = await toursModel
        .where().sort("price").limit(3);
        res.send(tours);
    } catch (error) {
      res.status(500).json({
        messsage: 'There is a server side error'
      })  
    }
}