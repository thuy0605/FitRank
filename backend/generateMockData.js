const fs = require('fs');

function roundToTwoDecimalPlaces(value) {
    return parseFloat(value.toFixed(2));
}
function generateRandomUser(baseUser) {
    const randomUser = {
        username: generateRandomString(),
        firstname: generateRandomString(),
        lastname: generateRandomString(),
        country: generateRandomCountry(),
        age: generateRandomNumber(18, 60),
        gender: generateRandomGender(),
        weight: roundToTwoDecimalPlaces(generateRandomFloat(45.0, 90.0)),
        height: roundToTwoDecimalPlaces(generateRandomFloat(150.0, 190.0)),
        usertype: "regular",
        location: generateRandomLocation(baseUser.location),
        dailyActiveGoal: roundToTwoDecimalPlaces(generateRandomFloat(2.0, 4.0)),
        weeklyActiveGoal: roundToTwoDecimalPlaces(generateRandomFloat(10.0, 15.0)),
        dailyCaloriesBurnGoal: generateRandomNumber(800, 1200),
        fitnessHistory: generateRandomFitnessHistory()
    };

    return randomUser;
}

function generateRandomUsers(numUsers, baseUser) {
    const users = [];

    for (let i = 0; i < numUsers; i++) {
        const randomUser = generateRandomUser(baseUser);
        users.push(randomUser);
    }

    return users;
}

function generateRandomLocation(baseLocation) {
    const randomLocation = {
        latitude: baseLocation.latitude + generateRandomFloat(-0.3, 0.3),
        longitude: baseLocation.longitude + generateRandomFloat(-0.3, 0.3)
    };

    return randomLocation;
}

function generateRandomFitnessHistory() {
    const fitnessHistory = [];

    for (let i = 0; i < 30; i++) {
        const currentMonth = 10 + Math.floor((10 + i) / 31); // October or November
        const dayInMonth = (10 + i) % 31 + 1;

        const date = `2023-${currentMonth.toString().padStart(2, '0')}-${dayInMonth.toString().padStart(2, '0')}`;

        const activityInfo = {
            date: date,
            activeInfo: {
                activeTime: roundToTwoDecimalPlaces(generateRandomFloat(2.0, 4.0)),
                choosenActivity: [generateRandomActivity()],
            },
        };

        fitnessHistory.push(activityInfo);
    }

    return fitnessHistory;
}

function generateRandomActivity() {
    const activityName = generateRandomActivityName();
    let distance, pace;

    switch (activityName) {
        case "swim":
            distance = generateRandomNumber(800, 3000);
            pace = roundToTwoDecimalPlaces(generateRandomFloat(2.0, 2.5));
            break;
        case "run":
            distance = generateRandomNumber(3000, 8000);
            pace = roundToTwoDecimalPlaces(generateRandomFloat(4.0, 6.0));
            break;
        case "bike":
            distance = generateRandomNumber(8000, 12000);
            pace = roundToTwoDecimalPlaces(generateRandomFloat(20.0, 25.0));
            break;
        default:
            distance = generateRandomNumber(3000, 12000);
            pace = roundToTwoDecimalPlaces(generateRandomFloat(10.0, 15.0));
    }

    const duration = roundToTwoDecimalPlaces(distance / generateRandomFloat(30, 120));
    const caloriesBurned = generateRandomNumber(300, 900);

    const activity = {
        activityName: activityName,
        distance: distance,
        duration: duration,
        caloriesBurned: caloriesBurned,
        pace: pace
    };

    return activity;
}

function generateRandomActivityName() {
    const activityNames = ["run", "swim", "bike"];
    const randomIndex = Math.floor(Math.random() * activityNames.length);
    return activityNames[randomIndex];
}

function generateRandomString() {
    return Math.random().toString(36).substring(7);
}

function generateRandomCountry() {
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany"];
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

function generateRandomGender() {
    const genders = ["male", "female"];
    const randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomFloat(min, max) {
    const randomFloat = Math.random() * (max - min) + min;
    return roundToTwoDecimalPlaces(randomFloat);
}

// Base user data
const baseUser = {
    _id: "6092a67f1109db001eac65e3",
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    country: "United States",
    age: 28,
    gender: "female",
    weight: 65.8,
    height: 167.5,
    usertype: "regular",
    location: {
        latitude: 34.0522,
        longitude: -118.2437
    },
    dailyActiveGoal: 2.5,
    weeklyActiveGoal: 12.5,
    dailyCaloriesBurnGoal: 1000,
    fitnessHistory: []
};

const numberOfUsers = 30; // Change this number as needed

// Generate random users with the same amount of data
const randomUsers = generateRandomUsers(numberOfUsers, baseUser);

// Print the generated user data to a JSON file
fs.writeFile('random_users.js', JSON.stringify(randomUsers, null, 2), (err) => {
    if (err) throw err;
    console.log(`Random user data for ${numberOfUsers} users has been written to random_users.json`);
});
