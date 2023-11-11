const fs = require('fs');

const generateRandomUserData = () => {
    const username = `user${Math.floor(Math.random() * 5000) + 1}`;
    const dailyCaloriesBurnGoal = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Random value between 100 and 1000
    let preferActivity;

    if (dailyCaloriesBurnGoal >= 200 && dailyCaloriesBurnGoal < 600) {
        preferActivity = 'bike';
    } else if (dailyCaloriesBurnGoal >= 600 && dailyCaloriesBurnGoal < 800) {
        preferActivity = 'run';
    } else {
        preferActivity = 'swim';
    }

    return { username, dailyCaloriesBurnGoal, preferActivity };
};


const generateTrainingData = (count) => {
    const trainingData = [];
    for (let i = 0; i < count; i++) {
        trainingData.push(generateRandomUserData());
    }
    return trainingData;
};

const trainingData = generateTrainingData(10000);

fs.writeFileSync('training_data.json', JSON.stringify(trainingData, null, 2));
console.log('Training data generated and saved to training_data.json');