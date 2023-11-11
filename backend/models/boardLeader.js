const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const paceUserBoardSchema = new Schema({
    username :{
        type: String,
        require: true,
    },
    averagePaceDaily: {
        type: Number,
        require: true,
    },averagePaceWeekly: {
        type: Number,
        require: true,
    },averagePaceMonthly: {
        type: Number,
        require: true,
    }
})

const paceBoardLeaderSchema = new Schema({
    activityName : {
        type: String,
        required: true
    },
    leaderBoard: {
        type: [paceUserBoardSchema],
        required: true
    }

})

const distanceUserBoardSchema = new Schema({
    username :{
        type: String,
        require: true,
    },
    averageDistanceDaily: {
        type: Number,
        require: true,
    },averageDistanceWeekly: {
        type: Number,
        require: true,
    },averageDistanceMonthly: {
        type: Number,
        require: true,
    }
})

const distanceBoardLeaderSchema = new Schema({
    activityName : {
        type: String,
        required: true
    },
    leaderBoard: {
        type: [distanceUserBoardSchema],
        required: true
    }

})



const distanceBoardLeader = mongoose.model('DistanceBoardLeader', distanceBoardLeaderSchema)

const paceBoardLeader = mongoose.model('PaceBoardLeader', paceBoardLeaderSchema)

module.exports = {distanceBoardLeader, paceBoardLeader}