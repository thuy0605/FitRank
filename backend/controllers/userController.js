const express = require('express');
const router = express.Router();
const httpStatus = require('lib/httpStatus');
const User = require('../models/User');
const verifyToken = require('../lib/verifyToken');
const isLocationInRadius = require('../lib/locationService')

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
    const {gender, usertype, activityName, radius} = req.query

    let aggregationPipeline = prepareMatchOperation(gender, usertype, activityName, radius)

    const paceLogicAggregate = [{
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
          location: {$first: "$location"},
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
          location: 1,
          averagePaceLast1Days: 1,
          averagePaceLast7Days: 1,
          averagePaceLast30Days: 1,
        },
      },]

    aggregationPipeline =  [...aggregationPipeline, ...paceLogicAggregate]

    let results = await User.aggregate(aggregationPipeline);

    const userDTO = {
      activityName: activityName,
      leaderBoard: [
      ]
    }

    if (radius) {
      const user = await User.findById(req.userId, {location: 1})
      if (user) {
        results = results.filter((doc) => {
          return isLocationInRadius(user.location, doc.location,  radius);
        })
      }
    }

    results.forEach(result => {
      userDTO.leaderBoard.push(
          {
            username: result.username,
            averagePaceDaily: parseFloat(result.averagePaceLast1Days),
            averagePaceWeekly: parseFloat(result.averagePaceLast7Days),
            averagePaceMonthly: parseFloat(result.averagePaceLast30Days)
          }
      )
    })

    res.status(httpStatus.OK).json(userDTO);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.get('/leaderBoard/_distance/', verifyToken, async function (req, res,next){
  try {
    const {gender, usertype, activityName, radius} = req.query

    let aggregationPipeline = prepareMatchOperation(gender, usertype, activityName, radius)

    let distanceLogicAggregate = [{
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
          location: {$first: "$location"},
          averageDistanceLast7Days: {
            $avg: {
              $arrayElemAt: [
                "$latest7Activities.activeInfo.choosenActivity.distance",
                0
              ]
            }
          },
          averageDistanceLast30Days: {
            $avg: {
              $arrayElemAt: [
                "$latest30Activities.activeInfo.choosenActivity.distance",
                0
              ]
            }
          },
          averageDistanceLast1Days: {
            $avg: {
              $arrayElemAt: [
                "$latest1Activities.activeInfo.choosenActivity.distance",
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
          location: 1,
          averageDistanceLast1Days: 1,
          averageDistanceLast7Days: 1,
          averageDistanceLast30Days: 1,
        },
      }]

    aggregationPipeline =  [...aggregationPipeline, ...distanceLogicAggregate]
    let results = await User.aggregate(aggregationPipeline);

    const userDTO = {
      activityName: activityName,
      leaderBoard: [
      ]
    }

    if (radius) {
      const user = await User.findById(req.userId, {location: 1})
      if (user) {
        results = results.filter((doc) => {
          return isLocationInRadius(user.location, doc.location,  radius);
        })
      }
    }

    results.forEach(result => {
      userDTO.leaderBoard.push(
          {
            username: result.username,
            averageDistanceDaily: parseFloat(result.averageDistanceLast1Days),
            averageDistanceWeekly: parseFloat(result.averageDistanceLast7Days),
            averageDistanceMonthly: parseFloat(result.averageDistanceLast30Days)
          }
      )
    })

    res.status(httpStatus.OK).json(userDTO);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

const prepareMatchOperation = (gender, usertype, activityName, radius) =>{
  let aggregationPipeline = []

  const matchStage = {
    fitnessHistory: { $exists: true, $ne: [] }
  }

  if (gender) {
    matchStage.gender = gender;
  }

  if (usertype) {
    matchStage.usertype = usertype;
  }

  aggregationPipeline.push({ $match: matchStage })

  if (activityName) {
    aggregationPipeline.push({
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
    })
  }

  return aggregationPipeline
}


module.exports = router;
