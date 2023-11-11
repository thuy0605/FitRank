const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
const {sportActivitySchema} = require('./sportActivity')

const fitnessRecordSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    activeInfo: {
        activeTime: {
            type: Number,
            required: true
        },
        choosenActivity: [sportActivitySchema],
    }
});

const FitnessRecord = mongoose.model('FitnessRecord', fitnessRecordSchema);

module.exports = {FitnessRecord, fitnessRecordSchema};
