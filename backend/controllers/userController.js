const express = require('express');
const router = express.Router();
const httpStatus = require('lib/httpStatus');
const User = require('../models/User');
const verifyToken = require('../lib/verifyToken');

router.get('/me', verifyToken, async function (req, res, next) {
  try {
    const user = await User.findById(req.userId);

    if (user) {
      res.status(httpStatus.OK).json(user);
    } else {
      res.status(httpStatus.NOT_FOUND).send(`User not found (_id: ${req.userId})`);
    }
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${error.message}`);
  }
});

router.get('/leaderBoard/_pace/', verifyToken, async function (req, res,next){
 try {
   const {gender, usertype, activityName} = req.query
   console.log(gender)
   console.log(usertype)
   console.log(activityName)
   let results = await User.aggregate([
     {
       $match: {
         gender: gender,
         usertype: usertype,
         fitnessHistory: { $exists: true, $ne: [] },
       },
     },
     {
       $addFields: {
         fitnessHistory: {
           $filter: {
             input: "$fitnessHistory",
             as: "history",
             cond: {
               $gt: [
                 {
                   $size: {
                     $filter: {
                       input: "$$history.activeInfo.choosenActivity",
                       as: "activity",
                       cond: {
                         $eq: ["$$activity.activityName", activityName],
                       },
                     },
                   },
                 },
                 0,
               ],
             },
           },
         },
       },
     },
     {
       $addFields: {
         latest7Activities: {
           $slice: ["$fitnessHistory", -7],
         },
       },
     },
     {
       $addFields: {
         latest30Activities: {
           $slice: ["$fitnessHistory", -30],
         },
       },
     },
     {
       $addFields: {
         latest1Activities: {
           $slice: ["$fitnessHistory", -1],
         },
       },
     },
     {
       $unwind: "$latest7Activities",
     },
     {
       $unwind: "$latest30Activities",
     },
     {
       $unwind: "$latest1Activities",
     },
     {
       $group: {
         _id: "$username",
         gender: { $first: "$gender" },
         userType: { $first: "$usertype" },
         averagePaceLast7Days: {
           $avg: {
             $arrayElemAt: [
               "$latest7Activities.activeInfo.choosenActivity.pace",
               0
             ]
           }
         },
         averagePaceLast30Days: {
           $avg: {
             $arrayElemAt: [
               "$latest30Activities.activeInfo.choosenActivity.pace",
               0
             ]
           }
         },
         averagePaceLast1Days: {
           $avg: {
             $arrayElemAt: [
               "$latest1Activities.activeInfo.choosenActivity.pace",
               0
             ]
           }
         },
       },
     },
     {
       $project: {
         _id: 0,
         username: "$_id",
         gender: 1,
         userType: 1,
         averagePaceLast1Days: 1,
         averagePaceLast7Days: 1,
         averagePaceLast30Days: 1,
       },
     },
   ]);

   const userDTO = {
     activityName: activityName,
     leaderBoard: [
     ]
   }

   results.forEach(result => {
     userDTO.leaderBoard.push(
         {
           username: result.username,
           averagePaceDaily: result.averagePaceLast1Days,
           averagePaceWeekly: result.averagePaceLast7Days,
           averagePaceMonthly: result.averagePaceLast30Days
         }
     )
   })

   res.status(httpStatus.OK).json(userDTO);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal Server Error' });
 }

})

module.exports = router;
