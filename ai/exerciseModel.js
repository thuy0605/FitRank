const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const trainingDataPath = './training_data.json';
const trainingData = JSON.parse(fs.readFileSync(trainingDataPath, 'utf8'));

function getActivityIndex(activity) {
    const activityValues = { 'swim': 0, 'run': 1, 'bike': 2 };
    return activityValues[activity] || -1;
}

function oneHotEncode(index, numClasses) {
    return Array.from({ length: numClasses }, (_, i) => i === index ? 1 : 0);
}
const encodedLabels = trainingData.map(data => oneHotEncode(getActivityIndex(data.preferActivity), 3));

// Check if all encoded labels are arrays of length 3
if (!encodedLabels.every(label => label.length === 3)) {
    throw new Error("Not all labels are encoded into arrays of length 3");
}
// Convert training data to tensors
const inputTensor = tf.tensor2d(trainingData.map(data => [parseFloat(data.dailyCaloriesBurnGoal), getActivityIndex(data.preferActivity)]));
const labelTensor = tf.tensor2d(trainingData.map(data => [Number(getActivityIndex(data.preferActivity)), 3]), 'float32');

// Create a sequential model
const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [2], units: 10, activation: 'relu' }));
model.add(tf.layers.dense({ units: 3, activation: 'softmax' })); // 3 units for swim, run, and bike

// Compile the model
model.compile({
  optimizer: tf.train.adam(),
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});

// Train the model
model.fit(inputTensor, labelTensor, { epochs: 100 }).then(() => {
  model.save('file://./activity_model').then(() => {
    console.log('Model saved.');
  });
});

function makePredictions(model) {
  // Add prediction logic here
}
