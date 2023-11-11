const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const sportActivitySchema = new Schema({
    activityName: {
        type: String,
        required: true
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number
    },
    averagePace: {
        type: Number
    }
})

const sportActivity = mongoose.model('SportActivity', sportActivitySchema);

module.exports = {sportActivity, sportActivitySchema};
