const { toursModel } = require("../models/toursModel");

// post a tour
module.exports.tourPost = async (req,res)=>{
    const newTour = toursModel({...req.body,viewCount:0});
    await newTour.save((err)=>{
        if (err) {
            res.status(500).json({
                error:"There was a server side error"
            })
        }else{
            res.status(200).json({
                message: "Tours Successfully added"
            })
        }
    }
    )
};
// get all tours with query
module.exports.getAllTours = async (req,res)=>{
    const queryObject = req.query;
    const selectBy = queryObject?.fields?.split(',')?.join(' ');
    const sortBy = queryObject?.sort?.split(',')?.join(' ');
    const skipBy = queryObject?.page-1;
    const limitBy = queryObject?.limit;
    try {
        const tours = await toursModel.find({}).select(selectBy).sort(sortBy).skip(skipBy*3 || 0).limit(limitBy || 3);
        res.send(tours)
    } catch (error) {
      res.status(500).json({
        messsage: 'There is a server side error'
      })  
    }
}
// get a tour with id
module.exports.getTourById = async (req,res)=>{
    const id = req.params.id;
    try {
        const tour = await toursModel
        .where('_id').equals(id)
        res.send(tour);
    } catch (error) {
      res.status(500).json({
        messsage: 'There is a server side error'
      })  
    }
};