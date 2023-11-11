const users = [
  {
    "username": "06lpx",
    "firstname": "7ppse",
    "lastname": "blero5",
    "country": "United States",
    "age": 55,
    "gender": "female",
    "weight": 65.74,
    "height": 158.93,
    "usertype": "regular",
    "location": {
      "latitude": 34.2922,
      "longitude": -118.0637
    },
    "dailyActiveGoal": 2.18,
    "weeklyActiveGoal": 12.39,
    "dailyCaloriesBurnGoal": 886,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2562,
              "duration": 27.06,
              "caloriesBurned": 725,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.76,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11567,
              "duration": 128,
              "caloriesBurned": 830,
              "pace": 22.8
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9800,
              "duration": 112.19,
              "caloriesBurned": 502,
              "pace": 24.45
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.9,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1458,
              "duration": 15.98,
              "caloriesBurned": 893,
              "pace": 2.46
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5347,
              "duration": 66.47,
              "caloriesBurned": 615,
              "pace": 4.88
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3275,
              "duration": 39.17,
              "caloriesBurned": 810,
              "pace": 5.09
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1045,
              "duration": 12.65,
              "caloriesBurned": 476,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1627,
              "duration": 23.77,
              "caloriesBurned": 810,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1249,
              "duration": 31.04,
              "caloriesBurned": 411,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.11,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1671,
              "duration": 15.39,
              "caloriesBurned": 307,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8427,
              "duration": 109.5,
              "caloriesBurned": 707,
              "pace": 24.74
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10883,
              "duration": 138.3,
              "caloriesBurned": 481,
              "pace": 22.89
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1628,
              "duration": 26.43,
              "caloriesBurned": 654,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.85,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7473,
              "duration": 79.95,
              "caloriesBurned": 532,
              "pace": 5.63
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10496,
              "duration": 342.45,
              "caloriesBurned": 858,
              "pace": 20.92
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2440,
              "duration": 20.62,
              "caloriesBurned": 459,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.13,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7660,
              "duration": 226.63,
              "caloriesBurned": 640,
              "pace": 4.67
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6762,
              "duration": 81.39,
              "caloriesBurned": 742,
              "pace": 4.52
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4012,
              "duration": 41.77,
              "caloriesBurned": 324,
              "pace": 4.91
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.23,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1071,
              "duration": 10.76,
              "caloriesBurned": 438,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.49,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2735,
              "duration": 31.7,
              "caloriesBurned": 444,
              "pace": 2.41
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2010,
              "duration": 35.08,
              "caloriesBurned": 737,
              "pace": 2.22
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11899,
              "duration": 131.18,
              "caloriesBurned": 725,
              "pace": 23.64
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.8,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11144,
              "duration": 139.86,
              "caloriesBurned": 481,
              "pace": 21.36
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1544,
              "duration": 19.12,
              "caloriesBurned": 459,
              "pace": 2.15
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.95,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1067,
              "duration": 12.3,
              "caloriesBurned": 347,
              "pace": 2.07
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2451,
              "duration": 55.1,
              "caloriesBurned": 654,
              "pace": 2.2
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.22,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1500,
              "duration": 22.46,
              "caloriesBurned": 429,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9418,
              "duration": 139.07,
              "caloriesBurned": 419,
              "pace": 20.17
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5166,
              "duration": 88.72,
              "caloriesBurned": 712,
              "pace": 4.08
            }
          ]
        }
      }
    ]
  },
  {
    "username": "je0h8v",
    "firstname": "h5jyk",
    "lastname": "8ug21k",
    "country": "United Kingdom",
    "age": 25,
    "gender": "female",
    "weight": 82.26,
    "height": 178.6,
    "usertype": "regular",
    "location": {
      "latitude": 34.0022,
      "longitude": -118.1537
    },
    "dailyActiveGoal": 2.62,
    "weeklyActiveGoal": 10.16,
    "dailyCaloriesBurnGoal": 962,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.49,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9502,
              "duration": 161.32,
              "caloriesBurned": 611,
              "pace": 22.84
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7659,
              "duration": 110.3,
              "caloriesBurned": 327,
              "pace": 5.12
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7222,
              "duration": 74.29,
              "caloriesBurned": 879,
              "pace": 4.56
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6429,
              "duration": 75.25,
              "caloriesBurned": 772,
              "pace": 4.63
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10315,
              "duration": 104.82,
              "caloriesBurned": 470,
              "pace": 21.65
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.85,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10725,
              "duration": 120.36,
              "caloriesBurned": 766,
              "pace": 24.65
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8455,
              "duration": 224.39,
              "caloriesBurned": 359,
              "pace": 22.23
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.69,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1459,
              "duration": 22.29,
              "caloriesBurned": 885,
              "pace": 2.39
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7564,
              "duration": 243.76,
              "caloriesBurned": 588,
              "pace": 5.75
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8057,
              "duration": 71.77,
              "caloriesBurned": 333,
              "pace": 23.38
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1006,
              "duration": 20.76,
              "caloriesBurned": 588,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7950,
              "duration": 76.27,
              "caloriesBurned": 646,
              "pace": 5.75
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3342,
              "duration": 77.18,
              "caloriesBurned": 313,
              "pace": 5.06
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8956,
              "duration": 217.64,
              "caloriesBurned": 431,
              "pace": 20.65
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.48,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9586,
              "duration": 106.37,
              "caloriesBurned": 390,
              "pace": 22.34
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.95,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 995,
              "duration": 9.22,
              "caloriesBurned": 626,
              "pace": 2.5
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5062,
              "duration": 57.2,
              "caloriesBurned": 302,
              "pace": 4.52
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1294,
              "duration": 15.28,
              "caloriesBurned": 798,
              "pace": 2.43
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.47,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10051,
              "duration": 135.42,
              "caloriesBurned": 591,
              "pace": 20.49
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8679,
              "duration": 78.25,
              "caloriesBurned": 660,
              "pace": 21.78
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9566,
              "duration": 88.67,
              "caloriesBurned": 825,
              "pace": 24.86
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9294,
              "duration": 132.98,
              "caloriesBurned": 317,
              "pace": 23.13
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.39,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9627,
              "duration": 84.7,
              "caloriesBurned": 338,
              "pace": 22.56
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10517,
              "duration": 101.85,
              "caloriesBurned": 731,
              "pace": 23.76
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7855,
              "duration": 79,
              "caloriesBurned": 484,
              "pace": 4.55
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6263,
              "duration": 188.53,
              "caloriesBurned": 565,
              "pace": 4.07
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.46,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 827,
              "duration": 9.61,
              "caloriesBurned": 499,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8679,
              "duration": 74.37,
              "caloriesBurned": 691,
              "pace": 22.36
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8585,
              "duration": 136.49,
              "caloriesBurned": 869,
              "pace": 22.64
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2824,
              "duration": 29.66,
              "caloriesBurned": 675,
              "pace": 2.04
            }
          ]
        }
      }
    ]
  },
  {
    "username": "z23s0h",
    "firstname": "5exdj3m",
    "lastname": "azo6e",
    "country": "Australia",
    "age": 59,
    "gender": "male",
    "weight": 77.1,
    "height": 178.73,
    "usertype": "regular",
    "location": {
      "latitude": 33.852199999999996,
      "longitude": -118.2937
    },
    "dailyActiveGoal": 2.48,
    "weeklyActiveGoal": 11.24,
    "dailyCaloriesBurnGoal": 833,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8822,
              "duration": 195.44,
              "caloriesBurned": 716,
              "pace": 20.93
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.2,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10063,
              "duration": 191.57,
              "caloriesBurned": 360,
              "pace": 21.4
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.8,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1803,
              "duration": 15.38,
              "caloriesBurned": 629,
              "pace": 2.41
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.35,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2277,
              "duration": 22.5,
              "caloriesBurned": 840,
              "pace": 2.27
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.87,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8987,
              "duration": 97.89,
              "caloriesBurned": 575,
              "pace": 22.55
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5746,
              "duration": 72.81,
              "caloriesBurned": 559,
              "pace": 5.08
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6665,
              "duration": 135.38,
              "caloriesBurned": 456,
              "pace": 5.72
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2135,
              "duration": 33.52,
              "caloriesBurned": 894,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.33,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9208,
              "duration": 135.97,
              "caloriesBurned": 383,
              "pace": 21.29
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.25,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10762,
              "duration": 98.18,
              "caloriesBurned": 472,
              "pace": 22.11
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2112,
              "duration": 31.96,
              "caloriesBurned": 869,
              "pace": 2.26
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4164,
              "duration": 40.21,
              "caloriesBurned": 369,
              "pace": 5.19
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5823,
              "duration": 183.86,
              "caloriesBurned": 326,
              "pace": 4.26
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 838,
              "duration": 12.72,
              "caloriesBurned": 504,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.7,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10029,
              "duration": 183.61,
              "caloriesBurned": 309,
              "pace": 20.87
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.77,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6185,
              "duration": 180.53,
              "caloriesBurned": 699,
              "pace": 5.65
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.22,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6758,
              "duration": 57.23,
              "caloriesBurned": 656,
              "pace": 4.19
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.78,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9759,
              "duration": 91.04,
              "caloriesBurned": 548,
              "pace": 24.66
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11553,
              "duration": 262.51,
              "caloriesBurned": 873,
              "pace": 21.32
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6739,
              "duration": 111.63,
              "caloriesBurned": 446,
              "pace": 5.78
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.38,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1983,
              "duration": 60.85,
              "caloriesBurned": 586,
              "pace": 2.28
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.39,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5280,
              "duration": 46.68,
              "caloriesBurned": 532,
              "pace": 4.43
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.85,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6188,
              "duration": 67.49,
              "caloriesBurned": 547,
              "pace": 4.9
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5388,
              "duration": 90.42,
              "caloriesBurned": 462,
              "pace": 5.7
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11952,
              "duration": 236.95,
              "caloriesBurned": 382,
              "pace": 22.84
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3175,
              "duration": 49.87,
              "caloriesBurned": 315,
              "pace": 4.57
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1133,
              "duration": 28.54,
              "caloriesBurned": 849,
              "pace": 2.19
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.82,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6743,
              "duration": 104.64,
              "caloriesBurned": 332,
              "pace": 4.41
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10446,
              "duration": 275.55,
              "caloriesBurned": 617,
              "pace": 24.98
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.71,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10706,
              "duration": 255.76,
              "caloriesBurned": 370,
              "pace": 22.52
            }
          ]
        }
      }
    ]
  },
  {
    "username": "6gshi",
    "firstname": "a23ybr",
    "lastname": "cga92v",
    "country": "Canada",
    "age": 54,
    "gender": "female",
    "weight": 82,
    "height": 174.61,
    "usertype": "regular",
    "location": {
      "latitude": 34.3222,
      "longitude": -118.08370000000001
    },
    "dailyActiveGoal": 3.43,
    "weeklyActiveGoal": 11.33,
    "dailyCaloriesBurnGoal": 1035,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1470,
              "duration": 15.65,
              "caloriesBurned": 617,
              "pace": 2.43
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.88,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 909,
              "duration": 11.24,
              "caloriesBurned": 446,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11836,
              "duration": 189.92,
              "caloriesBurned": 836,
              "pace": 22.4
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.37,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8642,
              "duration": 98.31,
              "caloriesBurned": 740,
              "pace": 24.47
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3468,
              "duration": 40.07,
              "caloriesBurned": 359,
              "pace": 4.29
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7405,
              "duration": 145.91,
              "caloriesBurned": 802,
              "pace": 5.29
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.18,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2185,
              "duration": 33.7,
              "caloriesBurned": 597,
              "pace": 2.14
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.26,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2368,
              "duration": 76.31,
              "caloriesBurned": 766,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.02,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2843,
              "duration": 54.62,
              "caloriesBurned": 647,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10474,
              "duration": 94,
              "caloriesBurned": 886,
              "pace": 24.56
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10466,
              "duration": 130.87,
              "caloriesBurned": 440,
              "pace": 21.93
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10690,
              "duration": 115.88,
              "caloriesBurned": 376,
              "pace": 24.87
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9267,
              "duration": 178.97,
              "caloriesBurned": 726,
              "pace": 23.71
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1179,
              "duration": 27.35,
              "caloriesBurned": 587,
              "pace": 2
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.35,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5459,
              "duration": 65.07,
              "caloriesBurned": 774,
              "pace": 5.91
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2088,
              "duration": 19.37,
              "caloriesBurned": 549,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3961,
              "duration": 44.71,
              "caloriesBurned": 505,
              "pace": 5.63
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2973,
              "duration": 82.01,
              "caloriesBurned": 684,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.53,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 909,
              "duration": 22.98,
              "caloriesBurned": 840,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6705,
              "duration": 71.44,
              "caloriesBurned": 417,
              "pace": 5.2
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2089,
              "duration": 23.57,
              "caloriesBurned": 541,
              "pace": 2.35
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.98,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11621,
              "duration": 333.46,
              "caloriesBurned": 751,
              "pace": 22.89
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.93,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7275,
              "duration": 125.73,
              "caloriesBurned": 846,
              "pace": 5.62
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7896,
              "duration": 108.84,
              "caloriesBurned": 357,
              "pace": 4.49
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10304,
              "duration": 89.9,
              "caloriesBurned": 730,
              "pace": 21.25
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1779,
              "duration": 15.27,
              "caloriesBurned": 764,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2338,
              "duration": 39.21,
              "caloriesBurned": 310,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9498,
              "duration": 96.93,
              "caloriesBurned": 895,
              "pace": 23.01
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6967,
              "duration": 154.68,
              "caloriesBurned": 491,
              "pace": 4.31
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.55,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2836,
              "duration": 24.96,
              "caloriesBurned": 419,
              "pace": 2.13
            }
          ]
        }
      }
    ]
  },
  {
    "username": "ytcplo",
    "firstname": "zqr85",
    "lastname": "edvlgs",
    "country": "United States",
    "age": 50,
    "gender": "male",
    "weight": 82.14,
    "height": 177.69,
    "usertype": "regular",
    "location": {
      "latitude": 33.9522,
      "longitude": -118.22370000000001
    },
    "dailyActiveGoal": 2.42,
    "weeklyActiveGoal": 13.92,
    "dailyCaloriesBurnGoal": 1079,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.49,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2551,
              "duration": 47.11,
              "caloriesBurned": 300,
              "pace": 2.35
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10393,
              "duration": 125.91,
              "caloriesBurned": 539,
              "pace": 22.18
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.08,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7438,
              "duration": 75.12,
              "caloriesBurned": 642,
              "pace": 4.84
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.44,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2376,
              "duration": 38.22,
              "caloriesBurned": 751,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.61,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4147,
              "duration": 63.37,
              "caloriesBurned": 469,
              "pace": 5.42
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2313,
              "duration": 21.99,
              "caloriesBurned": 548,
              "pace": 2.29
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1451,
              "duration": 13.16,
              "caloriesBurned": 365,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2155,
              "duration": 32.43,
              "caloriesBurned": 555,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4012,
              "duration": 35.01,
              "caloriesBurned": 675,
              "pace": 4.06
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.97,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1230,
              "duration": 21.96,
              "caloriesBurned": 485,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.48,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11669,
              "duration": 160.55,
              "caloriesBurned": 652,
              "pace": 24.98
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1246,
              "duration": 22.9,
              "caloriesBurned": 303,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.86,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5643,
              "duration": 130.35,
              "caloriesBurned": 782,
              "pace": 5.22
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 903,
              "duration": 14.31,
              "caloriesBurned": 887,
              "pace": 2
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.49,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1173,
              "duration": 15.15,
              "caloriesBurned": 730,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2617,
              "duration": 25.57,
              "caloriesBurned": 833,
              "pace": 2.02
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9589,
              "duration": 97.36,
              "caloriesBurned": 628,
              "pace": 20.6
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.7,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1899,
              "duration": 33.16,
              "caloriesBurned": 527,
              "pace": 2.26
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.45,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2107,
              "duration": 42.82,
              "caloriesBurned": 485,
              "pace": 2.31
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8817,
              "duration": 73.79,
              "caloriesBurned": 691,
              "pace": 22.8
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11980,
              "duration": 317.02,
              "caloriesBurned": 312,
              "pace": 22.92
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1942,
              "duration": 26.57,
              "caloriesBurned": 591,
              "pace": 2.11
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.74,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7051,
              "duration": 67.86,
              "caloriesBurned": 894,
              "pace": 5.94
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7144,
              "duration": 84.83,
              "caloriesBurned": 462,
              "pace": 4.54
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5927,
              "duration": 50.88,
              "caloriesBurned": 889,
              "pace": 4.9
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6822,
              "duration": 138.97,
              "caloriesBurned": 875,
              "pace": 5.54
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3370,
              "duration": 28.93,
              "caloriesBurned": 573,
              "pace": 5.8
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4142,
              "duration": 106.89,
              "caloriesBurned": 689,
              "pace": 4.48
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.73,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 879,
              "duration": 17.74,
              "caloriesBurned": 817,
              "pace": 2
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1257,
              "duration": 22.62,
              "caloriesBurned": 503,
              "pace": 2.1
            }
          ]
        }
      }
    ]
  },
  {
    "username": "c6pvb9",
    "firstname": "8lmwo9",
    "lastname": "b8c4k8",
    "country": "Canada",
    "age": 19,
    "gender": "female",
    "weight": 59.25,
    "height": 155.58,
    "usertype": "regular",
    "location": {
      "latitude": 33.9422,
      "longitude": -118.33370000000001
    },
    "dailyActiveGoal": 3.22,
    "weeklyActiveGoal": 13.13,
    "dailyCaloriesBurnGoal": 1097,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8670,
              "duration": 101.76,
              "caloriesBurned": 862,
              "pace": 24.45
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.58,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4434,
              "duration": 65.77,
              "caloriesBurned": 529,
              "pace": 5.7
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.09,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7098,
              "duration": 229.34,
              "caloriesBurned": 358,
              "pace": 4.84
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.13,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1253,
              "duration": 25.55,
              "caloriesBurned": 303,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10325,
              "duration": 186.04,
              "caloriesBurned": 381,
              "pace": 21.16
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.23,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11956,
              "duration": 108.46,
              "caloriesBurned": 500,
              "pace": 23.71
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5608,
              "duration": 70.28,
              "caloriesBurned": 378,
              "pace": 4.47
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 956,
              "duration": 8.3,
              "caloriesBurned": 763,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.2,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1243,
              "duration": 19.38,
              "caloriesBurned": 611,
              "pace": 2.19
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10373,
              "duration": 127.86,
              "caloriesBurned": 525,
              "pace": 24.71
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.19,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10369,
              "duration": 127.62,
              "caloriesBurned": 325,
              "pace": 20.01
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.8,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6714,
              "duration": 65.94,
              "caloriesBurned": 419,
              "pace": 5.15
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7073,
              "duration": 66.4,
              "caloriesBurned": 879,
              "pace": 4.39
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.51,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10407,
              "duration": 88.62,
              "caloriesBurned": 792,
              "pace": 21.22
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.79,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2932,
              "duration": 71.67,
              "caloriesBurned": 675,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.68,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11374,
              "duration": 331.51,
              "caloriesBurned": 702,
              "pace": 24.02
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7925,
              "duration": 240.74,
              "caloriesBurned": 786,
              "pace": 4.56
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.55,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4220,
              "duration": 59.19,
              "caloriesBurned": 320,
              "pace": 5.3
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4334,
              "duration": 39.57,
              "caloriesBurned": 760,
              "pace": 5.11
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9590,
              "duration": 214.73,
              "caloriesBurned": 716,
              "pace": 22.37
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6499,
              "duration": 68.18,
              "caloriesBurned": 483,
              "pace": 4.08
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.07,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11704,
              "duration": 193.9,
              "caloriesBurned": 703,
              "pace": 20.31
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.16,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9668,
              "duration": 113.7,
              "caloriesBurned": 718,
              "pace": 23.81
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5321,
              "duration": 118.59,
              "caloriesBurned": 851,
              "pace": 4.63
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.89,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1567,
              "duration": 13.55,
              "caloriesBurned": 301,
              "pace": 2.34
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9766,
              "duration": 152.52,
              "caloriesBurned": 540,
              "pace": 23.53
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4668,
              "duration": 46.8,
              "caloriesBurned": 598,
              "pace": 5.83
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3280,
              "duration": 34.4,
              "caloriesBurned": 432,
              "pace": 4.19
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.79,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9148,
              "duration": 145.02,
              "caloriesBurned": 479,
              "pace": 22.64
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.93,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3833,
              "duration": 33.21,
              "caloriesBurned": 732,
              "pace": 4.75
            }
          ]
        }
      }
    ]
  },
  {
    "username": "m1mvkv",
    "firstname": "q3ijkb",
    "lastname": "6k7i8",
    "country": "Canada",
    "age": 22,
    "gender": "female",
    "weight": 87.24,
    "height": 153.96,
    "usertype": "regular",
    "location": {
      "latitude": 34.1122,
      "longitude": -118.00370000000001
    },
    "dailyActiveGoal": 3.88,
    "weeklyActiveGoal": 11.71,
    "dailyCaloriesBurnGoal": 1172,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.13,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8163,
              "duration": 254.3,
              "caloriesBurned": 368,
              "pace": 23.86
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2782,
              "duration": 69.27,
              "caloriesBurned": 368,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11592,
              "duration": 112.11,
              "caloriesBurned": 861,
              "pace": 22.01
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9089,
              "duration": 91.97,
              "caloriesBurned": 373,
              "pace": 22.58
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.42,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8549,
              "duration": 158.81,
              "caloriesBurned": 390,
              "pace": 20.62
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10519,
              "duration": 241.43,
              "caloriesBurned": 613,
              "pace": 23.56
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2636,
              "duration": 40.94,
              "caloriesBurned": 688,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1489,
              "duration": 17.97,
              "caloriesBurned": 895,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10449,
              "duration": 210.37,
              "caloriesBurned": 509,
              "pace": 20.23
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6716,
              "duration": 204.82,
              "caloriesBurned": 739,
              "pace": 5.28
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 930,
              "duration": 10.44,
              "caloriesBurned": 478,
              "pace": 2.32
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11078,
              "duration": 273.53,
              "caloriesBurned": 900,
              "pace": 21.82
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8617,
              "duration": 75.86,
              "caloriesBurned": 333,
              "pace": 21.9
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8065,
              "duration": 84.89,
              "caloriesBurned": 436,
              "pace": 21.05
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.37,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2508,
              "duration": 52.52,
              "caloriesBurned": 615,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.48,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3808,
              "duration": 114.66,
              "caloriesBurned": 853,
              "pace": 5.67
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.1,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6624,
              "duration": 195.57,
              "caloriesBurned": 636,
              "pace": 4.79
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11095,
              "duration": 160.47,
              "caloriesBurned": 625,
              "pace": 22.18
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3281,
              "duration": 76.87,
              "caloriesBurned": 845,
              "pace": 4.05
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3015,
              "duration": 53.98,
              "caloriesBurned": 621,
              "pace": 4.85
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8095,
              "duration": 131.2,
              "caloriesBurned": 617,
              "pace": 20.52
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.54,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9383,
              "duration": 86.19,
              "caloriesBurned": 599,
              "pace": 22.95
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8030,
              "duration": 166.63,
              "caloriesBurned": 403,
              "pace": 22.7
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.46,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7288,
              "duration": 101.48,
              "caloriesBurned": 407,
              "pace": 4.91
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.48,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7762,
              "duration": 191.09,
              "caloriesBurned": 867,
              "pace": 4.61
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.96,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6267,
              "duration": 52.96,
              "caloriesBurned": 862,
              "pace": 4.8
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4326,
              "duration": 92.44,
              "caloriesBurned": 611,
              "pace": 4.57
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.87,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6749,
              "duration": 76.06,
              "caloriesBurned": 361,
              "pace": 5.91
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.07,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6029,
              "duration": 67.67,
              "caloriesBurned": 575,
              "pace": 4.26
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.2,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2030,
              "duration": 42.89,
              "caloriesBurned": 821,
              "pace": 2.09
            }
          ]
        }
      }
    ]
  },
  {
    "username": "pnf318",
    "firstname": "vwz8y",
    "lastname": "brk4s",
    "country": "Canada",
    "age": 30,
    "gender": "female",
    "weight": 67.94,
    "height": 178.27,
    "usertype": "regular",
    "location": {
      "latitude": 33.8722,
      "longitude": -118.5237
    },
    "dailyActiveGoal": 2.88,
    "weeklyActiveGoal": 11.87,
    "dailyCaloriesBurnGoal": 807,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.42,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6149,
              "duration": 89.25,
              "caloriesBurned": 468,
              "pace": 5.58
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11274,
              "duration": 101.45,
              "caloriesBurned": 521,
              "pace": 20.22
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.22,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4046,
              "duration": 73.1,
              "caloriesBurned": 766,
              "pace": 4.63
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.26,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2985,
              "duration": 34.09,
              "caloriesBurned": 778,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2741,
              "duration": 32.58,
              "caloriesBurned": 359,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.13,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9160,
              "duration": 90.1,
              "caloriesBurned": 896,
              "pace": 23.8
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.7,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9486,
              "duration": 83.45,
              "caloriesBurned": 666,
              "pace": 23.39
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11137,
              "duration": 342.05,
              "caloriesBurned": 342,
              "pace": 24.66
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7421,
              "duration": 134.54,
              "caloriesBurned": 361,
              "pace": 5.9
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3833,
              "duration": 59.36,
              "caloriesBurned": 677,
              "pace": 4.67
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.33,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1522,
              "duration": 14.82,
              "caloriesBurned": 451,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.73,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4123,
              "duration": 86.2,
              "caloriesBurned": 379,
              "pace": 4.64
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.35,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4514,
              "duration": 48.65,
              "caloriesBurned": 441,
              "pace": 5.61
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5047,
              "duration": 61.59,
              "caloriesBurned": 613,
              "pace": 5.76
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1434,
              "duration": 12.09,
              "caloriesBurned": 632,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.46,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11547,
              "duration": 260.01,
              "caloriesBurned": 443,
              "pace": 23.73
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.55,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2737,
              "duration": 26.62,
              "caloriesBurned": 417,
              "pace": 2.44
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.69,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2569,
              "duration": 22.74,
              "caloriesBurned": 339,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.28,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4708,
              "duration": 97.66,
              "caloriesBurned": 304,
              "pace": 5.65
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.82,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8684,
              "duration": 89.96,
              "caloriesBurned": 576,
              "pace": 24.76
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1833,
              "duration": 19.1,
              "caloriesBurned": 705,
              "pace": 2.05
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.47,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5854,
              "duration": 80.66,
              "caloriesBurned": 393,
              "pace": 4.92
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.34,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6117,
              "duration": 64.87,
              "caloriesBurned": 808,
              "pace": 5.32
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11138,
              "duration": 359.87,
              "caloriesBurned": 719,
              "pace": 24.97
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 902,
              "duration": 9.91,
              "caloriesBurned": 397,
              "pace": 2.39
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.13,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7050,
              "duration": 68,
              "caloriesBurned": 426,
              "pace": 5.49
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9671,
              "duration": 117.81,
              "caloriesBurned": 678,
              "pace": 22.03
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.92,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1180,
              "duration": 11.56,
              "caloriesBurned": 586,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10179,
              "duration": 96.56,
              "caloriesBurned": 624,
              "pace": 20.67
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10600,
              "duration": 106.43,
              "caloriesBurned": 336,
              "pace": 24.97
            }
          ]
        }
      }
    ]
  },
  {
    "username": "7mf39q",
    "firstname": "v6zz5b",
    "lastname": "2u4tsb",
    "country": "Germany",
    "age": 44,
    "gender": "male",
    "weight": 52.06,
    "height": 177.15,
    "usertype": "regular",
    "location": {
      "latitude": 34.0022,
      "longitude": -118.3237
    },
    "dailyActiveGoal": 3.25,
    "weeklyActiveGoal": 13.16,
    "dailyCaloriesBurnGoal": 917,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5604,
              "duration": 135.4,
              "caloriesBurned": 755,
              "pace": 5.64
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2253,
              "duration": 21.76,
              "caloriesBurned": 401,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1703,
              "duration": 14.37,
              "caloriesBurned": 610,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9180,
              "duration": 86.89,
              "caloriesBurned": 421,
              "pace": 20.66
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.04,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3602,
              "duration": 53.49,
              "caloriesBurned": 524,
              "pace": 4.6
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2865,
              "duration": 61.64,
              "caloriesBurned": 402,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3448,
              "duration": 50.16,
              "caloriesBurned": 406,
              "pace": 4.92
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.17,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7694,
              "duration": 163.98,
              "caloriesBurned": 775,
              "pace": 4.56
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8989,
              "duration": 75.05,
              "caloriesBurned": 399,
              "pace": 24.08
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.43,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11378,
              "duration": 273.9,
              "caloriesBurned": 612,
              "pace": 24.28
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.39,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10304,
              "duration": 90.37,
              "caloriesBurned": 694,
              "pace": 21.79
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8820,
              "duration": 80.26,
              "caloriesBurned": 702,
              "pace": 22.77
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6748,
              "duration": 70.53,
              "caloriesBurned": 752,
              "pace": 5.69
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.07,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3411,
              "duration": 69.41,
              "caloriesBurned": 800,
              "pace": 5.43
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.38,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2739,
              "duration": 24.16,
              "caloriesBurned": 417,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1131,
              "duration": 10.3,
              "caloriesBurned": 677,
              "pace": 2.31
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.03,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9559,
              "duration": 95.17,
              "caloriesBurned": 656,
              "pace": 20.82
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.61,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7051,
              "duration": 83.79,
              "caloriesBurned": 890,
              "pace": 4.93
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11849,
              "duration": 111.86,
              "caloriesBurned": 319,
              "pace": 20.2
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2352,
              "duration": 72.62,
              "caloriesBurned": 392,
              "pace": 2.02
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.98,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4976,
              "duration": 61.17,
              "caloriesBurned": 805,
              "pace": 5.27
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10894,
              "duration": 110.36,
              "caloriesBurned": 377,
              "pace": 22.88
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5984,
              "duration": 180.57,
              "caloriesBurned": 784,
              "pace": 4.25
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.98,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2052,
              "duration": 17.37,
              "caloriesBurned": 629,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.17,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5520,
              "duration": 155.45,
              "caloriesBurned": 824,
              "pace": 4.5
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.48,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1759,
              "duration": 49.37,
              "caloriesBurned": 574,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.68,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5071,
              "duration": 97.05,
              "caloriesBurned": 610,
              "pace": 4.48
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.96,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1938,
              "duration": 47.41,
              "caloriesBurned": 657,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6721,
              "duration": 58.63,
              "caloriesBurned": 437,
              "pace": 4.69
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2197,
              "duration": 30.46,
              "caloriesBurned": 456,
              "pace": 2.03
            }
          ]
        }
      }
    ]
  },
  {
    "username": "acndvl",
    "firstname": "fnuzf",
    "lastname": "g40fdh",
    "country": "United States",
    "age": 21,
    "gender": "female",
    "weight": 47.23,
    "height": 183.8,
    "usertype": "regular",
    "location": {
      "latitude": 34.1822,
      "longitude": -118.0137
    },
    "dailyActiveGoal": 2.57,
    "weeklyActiveGoal": 13.14,
    "dailyCaloriesBurnGoal": 1150,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.77,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11002,
              "duration": 166.77,
              "caloriesBurned": 725,
              "pace": 21.46
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5075,
              "duration": 53.72,
              "caloriesBurned": 482,
              "pace": 5.4
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.28,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11984,
              "duration": 277.79,
              "caloriesBurned": 872,
              "pace": 21.82
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6045,
              "duration": 166.57,
              "caloriesBurned": 602,
              "pace": 4.5
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9322,
              "duration": 121.05,
              "caloriesBurned": 685,
              "pace": 22.26
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9665,
              "duration": 291.11,
              "caloriesBurned": 663,
              "pace": 22.15
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.96,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6529,
              "duration": 110.55,
              "caloriesBurned": 808,
              "pace": 4.8
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.43,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10779,
              "duration": 90.85,
              "caloriesBurned": 413,
              "pace": 20.12
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.55,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1078,
              "duration": 16.42,
              "caloriesBurned": 801,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2796,
              "duration": 23.84,
              "caloriesBurned": 426,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1080,
              "duration": 12.42,
              "caloriesBurned": 813,
              "pace": 2.27
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1769,
              "duration": 26.39,
              "caloriesBurned": 408,
              "pace": 2.05
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.07,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10987,
              "duration": 243.67,
              "caloriesBurned": 535,
              "pace": 21.1
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11587,
              "duration": 173.87,
              "caloriesBurned": 839,
              "pace": 23.96
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10915,
              "duration": 101.21,
              "caloriesBurned": 710,
              "pace": 23.05
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5678,
              "duration": 78.98,
              "caloriesBurned": 625,
              "pace": 4.73
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7362,
              "duration": 163.53,
              "caloriesBurned": 864,
              "pace": 5.93
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.85,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11504,
              "duration": 219.88,
              "caloriesBurned": 857,
              "pace": 20.96
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6747,
              "duration": 72.07,
              "caloriesBurned": 813,
              "pace": 4.27
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.38,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9530,
              "duration": 114.71,
              "caloriesBurned": 358,
              "pace": 22.76
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.82,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10814,
              "duration": 99.98,
              "caloriesBurned": 316,
              "pace": 22.43
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.08,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5865,
              "duration": 88.73,
              "caloriesBurned": 471,
              "pace": 5.36
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5021,
              "duration": 46.34,
              "caloriesBurned": 660,
              "pace": 5.54
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9540,
              "duration": 144.5,
              "caloriesBurned": 575,
              "pace": 23.28
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3131,
              "duration": 85.17,
              "caloriesBurned": 504,
              "pace": 4.69
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.42,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1267,
              "duration": 14.92,
              "caloriesBurned": 784,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11043,
              "duration": 138.42,
              "caloriesBurned": 420,
              "pace": 21.32
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.55,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6071,
              "duration": 78.55,
              "caloriesBurned": 689,
              "pace": 4.15
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11628,
              "duration": 233.73,
              "caloriesBurned": 727,
              "pace": 23.96
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4306,
              "duration": 37.11,
              "caloriesBurned": 305,
              "pace": 4.13
            }
          ]
        }
      }
    ]
  },
  {
    "username": "pblwwt",
    "firstname": "5xdgvr",
    "lastname": "rpc1up",
    "country": "Germany",
    "age": 28,
    "gender": "male",
    "weight": 57.5,
    "height": 161.9,
    "usertype": "regular",
    "location": {
      "latitude": 34.0622,
      "longitude": -118.0437
    },
    "dailyActiveGoal": 3.36,
    "weeklyActiveGoal": 12.86,
    "dailyCaloriesBurnGoal": 824,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.97,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8664,
              "duration": 88.26,
              "caloriesBurned": 744,
              "pace": 20.31
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2213,
              "duration": 63.08,
              "caloriesBurned": 747,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.9,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10199,
              "duration": 233.07,
              "caloriesBurned": 805,
              "pace": 21.38
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.71,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4601,
              "duration": 73.99,
              "caloriesBurned": 496,
              "pace": 4.24
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9328,
              "duration": 127.71,
              "caloriesBurned": 467,
              "pace": 21.75
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4553,
              "duration": 131.97,
              "caloriesBurned": 745,
              "pace": 5.51
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2129,
              "duration": 18.45,
              "caloriesBurned": 580,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1725,
              "duration": 14.51,
              "caloriesBurned": 665,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.61,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10623,
              "duration": 336.6,
              "caloriesBurned": 754,
              "pace": 22.93
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.31,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10697,
              "duration": 197.47,
              "caloriesBurned": 851,
              "pace": 20.66
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11746,
              "duration": 135.37,
              "caloriesBurned": 336,
              "pace": 21.35
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2568,
              "duration": 39.54,
              "caloriesBurned": 777,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.88,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 817,
              "duration": 24.15,
              "caloriesBurned": 695,
              "pace": 2.02
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.32,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1969,
              "duration": 30.7,
              "caloriesBurned": 629,
              "pace": 2.2
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4433,
              "duration": 52.41,
              "caloriesBurned": 885,
              "pace": 4.3
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9542,
              "duration": 109.55,
              "caloriesBurned": 870,
              "pace": 23.1
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.45,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7814,
              "duration": 232.42,
              "caloriesBurned": 546,
              "pace": 4.48
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.59,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8887,
              "duration": 150.6,
              "caloriesBurned": 842,
              "pace": 24.95
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1697,
              "duration": 15.66,
              "caloriesBurned": 881,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2412,
              "duration": 27.36,
              "caloriesBurned": 641,
              "pace": 2.26
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3646,
              "duration": 45.11,
              "caloriesBurned": 306,
              "pace": 4.78
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6133,
              "duration": 67.09,
              "caloriesBurned": 506,
              "pace": 4.95
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.01,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6175,
              "duration": 55.04,
              "caloriesBurned": 610,
              "pace": 4.4
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1412,
              "duration": 14.81,
              "caloriesBurned": 471,
              "pace": 2.41
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.46,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3302,
              "duration": 32.92,
              "caloriesBurned": 893,
              "pace": 5.11
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.23,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4676,
              "duration": 46.98,
              "caloriesBurned": 734,
              "pace": 4.89
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.58,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1287,
              "duration": 40.83,
              "caloriesBurned": 820,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9840,
              "duration": 129.2,
              "caloriesBurned": 810,
              "pace": 21.15
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6204,
              "duration": 192.31,
              "caloriesBurned": 565,
              "pace": 5.38
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.76,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9617,
              "duration": 102.08,
              "caloriesBurned": 881,
              "pace": 21.03
            }
          ]
        }
      }
    ]
  },
  {
    "username": "txsuil",
    "firstname": "sw5rus",
    "lastname": "un4xhl",
    "country": "Germany",
    "age": 22,
    "gender": "female",
    "weight": 74.41,
    "height": 177.27,
    "usertype": "regular",
    "location": {
      "latitude": 33.8322,
      "longitude": -118.3537
    },
    "dailyActiveGoal": 2.17,
    "weeklyActiveGoal": 10.7,
    "dailyCaloriesBurnGoal": 806,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2337,
              "duration": 37.94,
              "caloriesBurned": 885,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.47,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9296,
              "duration": 163.17,
              "caloriesBurned": 352,
              "pace": 21.55
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.96,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9037,
              "duration": 207.75,
              "caloriesBurned": 572,
              "pace": 21.56
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11079,
              "duration": 100.33,
              "caloriesBurned": 458,
              "pace": 22.33
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1661,
              "duration": 34.93,
              "caloriesBurned": 317,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3888,
              "duration": 71.6,
              "caloriesBurned": 306,
              "pace": 4.71
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.62,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1445,
              "duration": 16.45,
              "caloriesBurned": 389,
              "pace": 2
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7898,
              "duration": 88.69,
              "caloriesBurned": 687,
              "pace": 5.2
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.32,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3166,
              "duration": 34.49,
              "caloriesBurned": 779,
              "pace": 4.76
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.78,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6086,
              "duration": 56.65,
              "caloriesBurned": 792,
              "pace": 4.49
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.45,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6775,
              "duration": 108.17,
              "caloriesBurned": 686,
              "pace": 4.7
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9809,
              "duration": 90.28,
              "caloriesBurned": 425,
              "pace": 23.36
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.58,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9689,
              "duration": 201.35,
              "caloriesBurned": 349,
              "pace": 24.74
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.93,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2806,
              "duration": 37.92,
              "caloriesBurned": 772,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.48,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6205,
              "duration": 68.8,
              "caloriesBurned": 825,
              "pace": 4.41
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9834,
              "duration": 85.21,
              "caloriesBurned": 501,
              "pace": 24.5
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.42,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1164,
              "duration": 32.69,
              "caloriesBurned": 338,
              "pace": 2.28
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.12,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2053,
              "duration": 30,
              "caloriesBurned": 666,
              "pace": 2.36
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6972,
              "duration": 74.47,
              "caloriesBurned": 410,
              "pace": 5.37
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.73,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10306,
              "duration": 188.72,
              "caloriesBurned": 582,
              "pace": 22.08
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5435,
              "duration": 123.33,
              "caloriesBurned": 523,
              "pace": 4.29
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3139,
              "duration": 60.77,
              "caloriesBurned": 573,
              "pace": 5.28
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11802,
              "duration": 246.9,
              "caloriesBurned": 683,
              "pace": 20.37
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10155,
              "duration": 112.87,
              "caloriesBurned": 818,
              "pace": 24.39
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9171,
              "duration": 176.91,
              "caloriesBurned": 461,
              "pace": 20.75
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.44,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10787,
              "duration": 187.73,
              "caloriesBurned": 478,
              "pace": 20.41
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2320,
              "duration": 36.68,
              "caloriesBurned": 489,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.62,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9407,
              "duration": 156.24,
              "caloriesBurned": 357,
              "pace": 20.2
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.13,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2954,
              "duration": 65.02,
              "caloriesBurned": 717,
              "pace": 2.43
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.66,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10049,
              "duration": 129.05,
              "caloriesBurned": 586,
              "pace": 20.2
            }
          ]
        }
      }
    ]
  },
  {
    "username": "2e1vfb",
    "firstname": "oxj6q",
    "lastname": "euvs55",
    "country": "Canada",
    "age": 24,
    "gender": "female",
    "weight": 64.88,
    "height": 167.7,
    "usertype": "regular",
    "location": {
      "latitude": 34.1422,
      "longitude": -118.5137
    },
    "dailyActiveGoal": 2.84,
    "weeklyActiveGoal": 12.41,
    "dailyCaloriesBurnGoal": 1167,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.2,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5669,
              "duration": 166.54,
              "caloriesBurned": 504,
              "pace": 4.32
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11062,
              "duration": 284.66,
              "caloriesBurned": 752,
              "pace": 24.74
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2714,
              "duration": 39.46,
              "caloriesBurned": 421,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.08,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9958,
              "duration": 105.95,
              "caloriesBurned": 366,
              "pace": 23.3
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.62,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4808,
              "duration": 55.97,
              "caloriesBurned": 323,
              "pace": 4.83
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.87,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9491,
              "duration": 79.41,
              "caloriesBurned": 527,
              "pace": 20.74
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5186,
              "duration": 79.37,
              "caloriesBurned": 600,
              "pace": 5.94
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.69,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10227,
              "duration": 127.12,
              "caloriesBurned": 350,
              "pace": 20.29
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8722,
              "duration": 155.78,
              "caloriesBurned": 312,
              "pace": 21.15
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2459,
              "duration": 68.84,
              "caloriesBurned": 773,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.65,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8082,
              "duration": 74.58,
              "caloriesBurned": 508,
              "pace": 20.62
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8094,
              "duration": 260.59,
              "caloriesBurned": 329,
              "pace": 21.7
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.81,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8670,
              "duration": 109.96,
              "caloriesBurned": 410,
              "pace": 21.27
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.32,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8325,
              "duration": 72.75,
              "caloriesBurned": 423,
              "pace": 22.08
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1907,
              "duration": 27.11,
              "caloriesBurned": 557,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10799,
              "duration": 104.45,
              "caloriesBurned": 472,
              "pace": 23.82
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9142,
              "duration": 135.62,
              "caloriesBurned": 873,
              "pace": 20.84
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 912,
              "duration": 8.21,
              "caloriesBurned": 648,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.33,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6859,
              "duration": 61.37,
              "caloriesBurned": 453,
              "pace": 5.02
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10436,
              "duration": 117.4,
              "caloriesBurned": 409,
              "pace": 20.7
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3603,
              "duration": 92.72,
              "caloriesBurned": 872,
              "pace": 5.42
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6432,
              "duration": 63.73,
              "caloriesBurned": 729,
              "pace": 4.61
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5214,
              "duration": 47.13,
              "caloriesBurned": 402,
              "pace": 5.31
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11109,
              "duration": 364.35,
              "caloriesBurned": 363,
              "pace": 23.93
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.07,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8485,
              "duration": 73.03,
              "caloriesBurned": 476,
              "pace": 20.53
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2622,
              "duration": 50.57,
              "caloriesBurned": 323,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9551,
              "duration": 105.55,
              "caloriesBurned": 350,
              "pace": 24.08
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3237,
              "duration": 75.33,
              "caloriesBurned": 607,
              "pace": 5.12
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2764,
              "duration": 39.84,
              "caloriesBurned": 347,
              "pace": 2.02
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1471,
              "duration": 14.8,
              "caloriesBurned": 432,
              "pace": 2.06
            }
          ]
        }
      }
    ]
  },
  {
    "username": "wsb3s7",
    "firstname": "nnggy5",
    "lastname": "us5dce",
    "country": "Germany",
    "age": 20,
    "gender": "male",
    "weight": 79.57,
    "height": 159.47,
    "usertype": "regular",
    "location": {
      "latitude": 33.782199999999996,
      "longitude": -118.03370000000001
    },
    "dailyActiveGoal": 2.75,
    "weeklyActiveGoal": 13.91,
    "dailyCaloriesBurnGoal": 975,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.09,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5037,
              "duration": 46.6,
              "caloriesBurned": 382,
              "pace": 4.46
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.06,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 895,
              "duration": 17.9,
              "caloriesBurned": 581,
              "pace": 2.07
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2450,
              "duration": 23.17,
              "caloriesBurned": 449,
              "pace": 2.36
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.87,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8269,
              "duration": 233.59,
              "caloriesBurned": 403,
              "pace": 23.52
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11729,
              "duration": 99.66,
              "caloriesBurned": 569,
              "pace": 23.61
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8229,
              "duration": 228.08,
              "caloriesBurned": 601,
              "pace": 22.48
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.19,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8688,
              "duration": 82.67,
              "caloriesBurned": 673,
              "pace": 20.87
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8158,
              "duration": 82.56,
              "caloriesBurned": 326,
              "pace": 22.19
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.61,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3062,
              "duration": 32.51,
              "caloriesBurned": 720,
              "pace": 5.13
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1314,
              "duration": 14.35,
              "caloriesBurned": 808,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.87,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11266,
              "duration": 297.73,
              "caloriesBurned": 491,
              "pace": 22.96
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2893,
              "duration": 39.91,
              "caloriesBurned": 871,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1211,
              "duration": 12.07,
              "caloriesBurned": 433,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.51,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5057,
              "duration": 66.33,
              "caloriesBurned": 735,
              "pace": 4.6
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9103,
              "duration": 126.38,
              "caloriesBurned": 473,
              "pace": 20.1
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.88,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2047,
              "duration": 21.88,
              "caloriesBurned": 380,
              "pace": 2.14
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.5,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2790,
              "duration": 27.89,
              "caloriesBurned": 817,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.76,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9752,
              "duration": 84.85,
              "caloriesBurned": 709,
              "pace": 20.09
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3107,
              "duration": 62.04,
              "caloriesBurned": 341,
              "pace": 4.72
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9558,
              "duration": 127.61,
              "caloriesBurned": 444,
              "pace": 22.53
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.54,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4736,
              "duration": 61.12,
              "caloriesBurned": 359,
              "pace": 4.84
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8080,
              "duration": 101.46,
              "caloriesBurned": 754,
              "pace": 21.2
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.23,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5011,
              "duration": 42.15,
              "caloriesBurned": 698,
              "pace": 5.39
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2539,
              "duration": 63.95,
              "caloriesBurned": 850,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.65,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9066,
              "duration": 96.61,
              "caloriesBurned": 576,
              "pace": 21.39
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.45,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3652,
              "duration": 78.86,
              "caloriesBurned": 744,
              "pace": 4.66
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6989,
              "duration": 71.03,
              "caloriesBurned": 614,
              "pace": 4.95
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.49,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8121,
              "duration": 89.68,
              "caloriesBurned": 316,
              "pace": 22.98
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11889,
              "duration": 166.91,
              "caloriesBurned": 590,
              "pace": 21.9
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9205,
              "duration": 86.59,
              "caloriesBurned": 453,
              "pace": 24.25
            }
          ]
        }
      }
    ]
  },
  {
    "username": "v1ahrk",
    "firstname": "04vvkd",
    "lastname": "oyfkbh",
    "country": "United States",
    "age": 29,
    "gender": "female",
    "weight": 87.65,
    "height": 160.59,
    "usertype": "regular",
    "location": {
      "latitude": 33.8622,
      "longitude": -118.39370000000001
    },
    "dailyActiveGoal": 2.55,
    "weeklyActiveGoal": 13.09,
    "dailyCaloriesBurnGoal": 1091,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.48,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10667,
              "duration": 116.76,
              "caloriesBurned": 373,
              "pace": 21.59
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.05,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2821,
              "duration": 28.76,
              "caloriesBurned": 814,
              "pace": 2.19
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.88,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11177,
              "duration": 161.73,
              "caloriesBurned": 313,
              "pace": 23.78
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1977,
              "duration": 32.02,
              "caloriesBurned": 315,
              "pace": 2.1
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10655,
              "duration": 138.94,
              "caloriesBurned": 510,
              "pace": 23.08
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3055,
              "duration": 34.07,
              "caloriesBurned": 677,
              "pace": 5.88
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1660,
              "duration": 22.18,
              "caloriesBurned": 496,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1838,
              "duration": 25.47,
              "caloriesBurned": 835,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.07,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2893,
              "duration": 57.54,
              "caloriesBurned": 472,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2947,
              "duration": 48.93,
              "caloriesBurned": 890,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.86,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9674,
              "duration": 106.41,
              "caloriesBurned": 763,
              "pace": 22.1
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.51,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8873,
              "duration": 188.71,
              "caloriesBurned": 418,
              "pace": 21.89
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2170,
              "duration": 59,
              "caloriesBurned": 525,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.67,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6603,
              "duration": 119.34,
              "caloriesBurned": 816,
              "pace": 5.99
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2757,
              "duration": 25.94,
              "caloriesBurned": 533,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.76,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8764,
              "duration": 288.57,
              "caloriesBurned": 782,
              "pace": 20.12
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11524,
              "duration": 196.32,
              "caloriesBurned": 605,
              "pace": 22.18
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.1,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9845,
              "duration": 135.18,
              "caloriesBurned": 565,
              "pace": 22.6
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.73,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9195,
              "duration": 88.65,
              "caloriesBurned": 724,
              "pace": 23.61
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.96,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2131,
              "duration": 60.85,
              "caloriesBurned": 391,
              "pace": 2.2
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6065,
              "duration": 57.06,
              "caloriesBurned": 841,
              "pace": 4.06
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.05,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3058,
              "duration": 62.46,
              "caloriesBurned": 346,
              "pace": 5.13
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5803,
              "duration": 51.34,
              "caloriesBurned": 475,
              "pace": 4.09
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.89,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7772,
              "duration": 98.04,
              "caloriesBurned": 378,
              "pace": 4.72
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.33,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2729,
              "duration": 26.46,
              "caloriesBurned": 760,
              "pace": 2.09
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1745,
              "duration": 21.16,
              "caloriesBurned": 885,
              "pace": 2.46
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6019,
              "duration": 51.84,
              "caloriesBurned": 622,
              "pace": 4.01
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.29,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3721,
              "duration": 39.83,
              "caloriesBurned": 714,
              "pace": 5.3
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.17,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1160,
              "duration": 13.66,
              "caloriesBurned": 509,
              "pace": 2.22
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4858,
              "duration": 85.6,
              "caloriesBurned": 846,
              "pace": 4.88
            }
          ]
        }
      }
    ]
  },
  {
    "username": "zpnpe",
    "firstname": "7amtsr",
    "lastname": "6ur02p",
    "country": "Australia",
    "age": 29,
    "gender": "male",
    "weight": 81.69,
    "height": 180.41,
    "usertype": "regular",
    "location": {
      "latitude": 34.1922,
      "longitude": -118.1237
    },
    "dailyActiveGoal": 2.53,
    "weeklyActiveGoal": 12.29,
    "dailyCaloriesBurnGoal": 1128,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2158,
              "duration": 37.61,
              "caloriesBurned": 530,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5977,
              "duration": 52.25,
              "caloriesBurned": 444,
              "pace": 4.72
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.5,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2942,
              "duration": 42.87,
              "caloriesBurned": 373,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.8,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1218,
              "duration": 23.19,
              "caloriesBurned": 893,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.8,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1195,
              "duration": 12.27,
              "caloriesBurned": 457,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3506,
              "duration": 33.55,
              "caloriesBurned": 613,
              "pace": 5.92
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.23,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3682,
              "duration": 121.6,
              "caloriesBurned": 843,
              "pace": 5
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1830,
              "duration": 19.52,
              "caloriesBurned": 338,
              "pace": 2.14
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3177,
              "duration": 29.42,
              "caloriesBurned": 797,
              "pace": 4.49
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.47,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9467,
              "duration": 194.19,
              "caloriesBurned": 629,
              "pace": 22.64
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9386,
              "duration": 102.28,
              "caloriesBurned": 565,
              "pace": 20.45
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.58,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4839,
              "duration": 55.54,
              "caloriesBurned": 407,
              "pace": 5.95
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.5,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9841,
              "duration": 193.68,
              "caloriesBurned": 840,
              "pace": 23.85
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11474,
              "duration": 227.84,
              "caloriesBurned": 434,
              "pace": 23.21
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8256,
              "duration": 101.76,
              "caloriesBurned": 444,
              "pace": 24.56
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.71,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4343,
              "duration": 39.07,
              "caloriesBurned": 720,
              "pace": 5.54
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7101,
              "duration": 72.08,
              "caloriesBurned": 671,
              "pace": 5.71
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.22,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11100,
              "duration": 278.34,
              "caloriesBurned": 442,
              "pace": 21.87
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6518,
              "duration": 81.06,
              "caloriesBurned": 541,
              "pace": 5.18
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9499,
              "duration": 139.73,
              "caloriesBurned": 456,
              "pace": 23.29
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2055,
              "duration": 59.46,
              "caloriesBurned": 705,
              "pace": 2.07
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6284,
              "duration": 86.51,
              "caloriesBurned": 406,
              "pace": 5.09
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.44,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1990,
              "duration": 39.68,
              "caloriesBurned": 761,
              "pace": 2.27
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.42,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4042,
              "duration": 43.55,
              "caloriesBurned": 774,
              "pace": 5.93
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7897,
              "duration": 177.3,
              "caloriesBurned": 424,
              "pace": 5.72
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9182,
              "duration": 97.58,
              "caloriesBurned": 852,
              "pace": 23.14
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.46,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2751,
              "duration": 61.64,
              "caloriesBurned": 394,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10106,
              "duration": 176.77,
              "caloriesBurned": 444,
              "pace": 24.32
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7322,
              "duration": 128.32,
              "caloriesBurned": 506,
              "pace": 4.07
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.17,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6341,
              "duration": 56.89,
              "caloriesBurned": 657,
              "pace": 5.27
            }
          ]
        }
      }
    ]
  },
  {
    "username": "pcwuca",
    "firstname": "09o6xa",
    "lastname": "e4w8dq",
    "country": "Canada",
    "age": 53,
    "gender": "female",
    "weight": 55.2,
    "height": 158.05,
    "usertype": "regular",
    "location": {
      "latitude": 34.3422,
      "longitude": -117.9637
    },
    "dailyActiveGoal": 2.62,
    "weeklyActiveGoal": 12.93,
    "dailyCaloriesBurnGoal": 941,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1002,
              "duration": 23.23,
              "caloriesBurned": 508,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.65,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6234,
              "duration": 95.29,
              "caloriesBurned": 370,
              "pace": 4.24
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7914,
              "duration": 212.06,
              "caloriesBurned": 717,
              "pace": 4.37
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2468,
              "duration": 44.01,
              "caloriesBurned": 493,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2252,
              "duration": 26.24,
              "caloriesBurned": 645,
              "pace": 2.1
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.48,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5831,
              "duration": 190.49,
              "caloriesBurned": 413,
              "pace": 4.61
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7716,
              "duration": 90.15,
              "caloriesBurned": 302,
              "pace": 4.51
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.33,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2528,
              "duration": 26.41,
              "caloriesBurned": 872,
              "pace": 2.11
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9428,
              "duration": 172.04,
              "caloriesBurned": 572,
              "pace": 20.57
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5884,
              "duration": 62.54,
              "caloriesBurned": 490,
              "pace": 5.94
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1028,
              "duration": 23.57,
              "caloriesBurned": 569,
              "pace": 2.19
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.65,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10420,
              "duration": 224.67,
              "caloriesBurned": 480,
              "pace": 21.36
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.58,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7435,
              "duration": 83.77,
              "caloriesBurned": 858,
              "pace": 4.6
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.93,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11789,
              "duration": 143.42,
              "caloriesBurned": 620,
              "pace": 24.6
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2828,
              "duration": 59.56,
              "caloriesBurned": 700,
              "pace": 2.27
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6575,
              "duration": 96.49,
              "caloriesBurned": 690,
              "pace": 4.54
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.5,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10118,
              "duration": 103.03,
              "caloriesBurned": 497,
              "pace": 21.23
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2503,
              "duration": 33.77,
              "caloriesBurned": 642,
              "pace": 2.48
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.17,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3599,
              "duration": 69.79,
              "caloriesBurned": 364,
              "pace": 4.38
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.86,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8949,
              "duration": 222.78,
              "caloriesBurned": 513,
              "pace": 20.74
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.51,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6720,
              "duration": 70.1,
              "caloriesBurned": 511,
              "pace": 4.12
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2103,
              "duration": 54.09,
              "caloriesBurned": 726,
              "pace": 2.1
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6412,
              "duration": 73.63,
              "caloriesBurned": 435,
              "pace": 4.87
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.61,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9170,
              "duration": 144.52,
              "caloriesBurned": 377,
              "pace": 22.76
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.25,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 951,
              "duration": 11.79,
              "caloriesBurned": 737,
              "pace": 2.29
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9342,
              "duration": 100.84,
              "caloriesBurned": 848,
              "pace": 22.08
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.81,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10950,
              "duration": 117.04,
              "caloriesBurned": 854,
              "pace": 23.8
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.99,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7701,
              "duration": 111.77,
              "caloriesBurned": 453,
              "pace": 4.57
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4728,
              "duration": 67.41,
              "caloriesBurned": 430,
              "pace": 5.45
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.8,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9124,
              "duration": 181.9,
              "caloriesBurned": 665,
              "pace": 23.1
            }
          ]
        }
      }
    ]
  },
  {
    "username": "acx60l",
    "firstname": "zz9k7",
    "lastname": "1a3sp2",
    "country": "Germany",
    "age": 31,
    "gender": "male",
    "weight": 46.23,
    "height": 166.44,
    "usertype": "regular",
    "location": {
      "latitude": 34.3422,
      "longitude": -118.3437
    },
    "dailyActiveGoal": 2.45,
    "weeklyActiveGoal": 10.4,
    "dailyCaloriesBurnGoal": 856,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9727,
              "duration": 141.88,
              "caloriesBurned": 578,
              "pace": 22.18
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.08,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10512,
              "duration": 106.24,
              "caloriesBurned": 661,
              "pace": 21.05
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.8,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8105,
              "duration": 231.18,
              "caloriesBurned": 550,
              "pace": 21.07
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.96,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10382,
              "duration": 146.56,
              "caloriesBurned": 476,
              "pace": 20.17
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.14,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10619,
              "duration": 188.92,
              "caloriesBurned": 765,
              "pace": 25
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.22,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6820,
              "duration": 75.9,
              "caloriesBurned": 357,
              "pace": 5.03
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7725,
              "duration": 84.98,
              "caloriesBurned": 568,
              "pace": 5.78
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9740,
              "duration": 207.76,
              "caloriesBurned": 431,
              "pace": 20.26
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7414,
              "duration": 179.34,
              "caloriesBurned": 865,
              "pace": 5.94
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.7,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10440,
              "duration": 139.26,
              "caloriesBurned": 467,
              "pace": 21.26
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.12,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3641,
              "duration": 34.58,
              "caloriesBurned": 654,
              "pace": 4.21
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.93,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11923,
              "duration": 103.12,
              "caloriesBurned": 736,
              "pace": 24.88
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1931,
              "duration": 27.5,
              "caloriesBurned": 853,
              "pace": 2.48
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4956,
              "duration": 145.38,
              "caloriesBurned": 811,
              "pace": 5.29
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3134,
              "duration": 68.47,
              "caloriesBurned": 316,
              "pace": 4.25
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.9,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7211,
              "duration": 139.42,
              "caloriesBurned": 814,
              "pace": 4.66
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.68,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4952,
              "duration": 70.42,
              "caloriesBurned": 831,
              "pace": 4.13
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.02,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1490,
              "duration": 16.69,
              "caloriesBurned": 472,
              "pace": 2.2
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5841,
              "duration": 113.31,
              "caloriesBurned": 539,
              "pace": 5.67
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.67,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7013,
              "duration": 60.49,
              "caloriesBurned": 465,
              "pace": 4.05
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.96,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6801,
              "duration": 162.01,
              "caloriesBurned": 743,
              "pace": 4.18
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.08,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2422,
              "duration": 38.96,
              "caloriesBurned": 822,
              "pace": 2.44
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9490,
              "duration": 120.94,
              "caloriesBurned": 833,
              "pace": 21.1
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.64,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8142,
              "duration": 78.42,
              "caloriesBurned": 884,
              "pace": 21.38
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.72,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6931,
              "duration": 75.35,
              "caloriesBurned": 515,
              "pace": 4.12
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8585,
              "duration": 163.59,
              "caloriesBurned": 634,
              "pace": 23.94
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6731,
              "duration": 193.59,
              "caloriesBurned": 623,
              "pace": 4.44
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.11,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1737,
              "duration": 18.8,
              "caloriesBurned": 349,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10383,
              "duration": 272.66,
              "caloriesBurned": 812,
              "pace": 24.38
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.74,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 805,
              "duration": 17.04,
              "caloriesBurned": 863,
              "pace": 2.24
            }
          ]
        }
      }
    ]
  },
  {
    "username": "8w7v19i",
    "firstname": "spep2",
    "lastname": "oqah93",
    "country": "United States",
    "age": 32,
    "gender": "male",
    "weight": 75.08,
    "height": 157.59,
    "usertype": "regular",
    "location": {
      "latitude": 34.0722,
      "longitude": -118.1337
    },
    "dailyActiveGoal": 3.39,
    "weeklyActiveGoal": 12.3,
    "dailyCaloriesBurnGoal": 1018,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.68,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6835,
              "duration": 91.62,
              "caloriesBurned": 481,
              "pace": 4.21
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.5,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11521,
              "duration": 176.92,
              "caloriesBurned": 587,
              "pace": 24.44
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10589,
              "duration": 125,
              "caloriesBurned": 344,
              "pace": 24.85
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10388,
              "duration": 97.18,
              "caloriesBurned": 620,
              "pace": 22.74
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4347,
              "duration": 58.55,
              "caloriesBurned": 761,
              "pace": 5.75
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9366,
              "duration": 104.72,
              "caloriesBurned": 385,
              "pace": 24.49
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9122,
              "duration": 239.11,
              "caloriesBurned": 668,
              "pace": 22.32
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11014,
              "duration": 264.25,
              "caloriesBurned": 647,
              "pace": 21.36
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8853,
              "duration": 74.96,
              "caloriesBurned": 554,
              "pace": 20.92
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.76,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8021,
              "duration": 80.07,
              "caloriesBurned": 607,
              "pace": 20.6
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.93,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9024,
              "duration": 292.51,
              "caloriesBurned": 683,
              "pace": 22.64
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5233,
              "duration": 96.82,
              "caloriesBurned": 520,
              "pace": 5.78
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9828,
              "duration": 283.39,
              "caloriesBurned": 445,
              "pace": 23.63
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4948,
              "duration": 62.98,
              "caloriesBurned": 669,
              "pace": 4.11
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2204,
              "duration": 26.45,
              "caloriesBurned": 873,
              "pace": 2.32
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3618,
              "duration": 75.58,
              "caloriesBurned": 451,
              "pace": 5.87
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.88,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10485,
              "duration": 89.4,
              "caloriesBurned": 348,
              "pace": 22.48
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.5,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9281,
              "duration": 131.35,
              "caloriesBurned": 533,
              "pace": 22.04
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.02,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11358,
              "duration": 199.33,
              "caloriesBurned": 450,
              "pace": 20.67
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2985,
              "duration": 74,
              "caloriesBurned": 671,
              "pace": 2.28
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.04,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4748,
              "duration": 48.29,
              "caloriesBurned": 775,
              "pace": 4.28
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2014,
              "duration": 18.17,
              "caloriesBurned": 520,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.4,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11957,
              "duration": 254.89,
              "caloriesBurned": 677,
              "pace": 21.62
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1954,
              "duration": 41.31,
              "caloriesBurned": 393,
              "pace": 2.11
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 891,
              "duration": 22.28,
              "caloriesBurned": 523,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11385,
              "duration": 212.13,
              "caloriesBurned": 664,
              "pace": 22.3
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1244,
              "duration": 41.11,
              "caloriesBurned": 736,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.88,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8178,
              "duration": 110.41,
              "caloriesBurned": 330,
              "pace": 21.55
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.17,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10504,
              "duration": 204.52,
              "caloriesBurned": 361,
              "pace": 20.8
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 972,
              "duration": 24.28,
              "caloriesBurned": 543,
              "pace": 2.49
            }
          ]
        }
      }
    ]
  },
  {
    "username": "t0nne",
    "firstname": "3vbumn",
    "lastname": "knbi08",
    "country": "Canada",
    "age": 29,
    "gender": "male",
    "weight": 83.23,
    "height": 178.21,
    "usertype": "regular",
    "location": {
      "latitude": 34.2622,
      "longitude": -118.39370000000001
    },
    "dailyActiveGoal": 2.85,
    "weeklyActiveGoal": 13.82,
    "dailyCaloriesBurnGoal": 841,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11066,
              "duration": 175.51,
              "caloriesBurned": 823,
              "pace": 23.5
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10446,
              "duration": 194.38,
              "caloriesBurned": 423,
              "pace": 22.75
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6523,
              "duration": 108.14,
              "caloriesBurned": 730,
              "pace": 5.29
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.97,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3200,
              "duration": 28.77,
              "caloriesBurned": 682,
              "pace": 5.4
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.09,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6300,
              "duration": 53.09,
              "caloriesBurned": 642,
              "pace": 5.57
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.82,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9867,
              "duration": 242.37,
              "caloriesBurned": 347,
              "pace": 21.08
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8355,
              "duration": 78.04,
              "caloriesBurned": 800,
              "pace": 22.05
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.85,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10187,
              "duration": 144.46,
              "caloriesBurned": 613,
              "pace": 24.44
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1849,
              "duration": 19.19,
              "caloriesBurned": 523,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1962,
              "duration": 31,
              "caloriesBurned": 742,
              "pace": 2.44
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.43,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2846,
              "duration": 27.53,
              "caloriesBurned": 840,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3790,
              "duration": 47.63,
              "caloriesBurned": 638,
              "pace": 5.92
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.97,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3154,
              "duration": 94.01,
              "caloriesBurned": 503,
              "pace": 4.83
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.19,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 831,
              "duration": 15.54,
              "caloriesBurned": 668,
              "pace": 2.43
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5016,
              "duration": 127.15,
              "caloriesBurned": 496,
              "pace": 4.87
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.65,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1970,
              "duration": 22.25,
              "caloriesBurned": 886,
              "pace": 2.44
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4778,
              "duration": 68.52,
              "caloriesBurned": 776,
              "pace": 5.79
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.89,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11083,
              "duration": 98.65,
              "caloriesBurned": 737,
              "pace": 22.43
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4601,
              "duration": 52.67,
              "caloriesBurned": 507,
              "pace": 4.12
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9614,
              "duration": 149.52,
              "caloriesBurned": 891,
              "pace": 24.76
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2313,
              "duration": 21.24,
              "caloriesBurned": 301,
              "pace": 2.46
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9801,
              "duration": 88.5,
              "caloriesBurned": 360,
              "pace": 20.4
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2321,
              "duration": 25.77,
              "caloriesBurned": 892,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.19,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6003,
              "duration": 133.73,
              "caloriesBurned": 748,
              "pace": 5.08
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.48,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1892,
              "duration": 17.07,
              "caloriesBurned": 327,
              "pace": 2.41
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2787,
              "duration": 51.34,
              "caloriesBurned": 378,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.92,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10842,
              "duration": 353.16,
              "caloriesBurned": 514,
              "pace": 20.41
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7003,
              "duration": 232.89,
              "caloriesBurned": 361,
              "pace": 5.82
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.78,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1974,
              "duration": 21.49,
              "caloriesBurned": 343,
              "pace": 2.35
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.07,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1049,
              "duration": 9.15,
              "caloriesBurned": 760,
              "pace": 2.32
            }
          ]
        }
      }
    ]
  },
  {
    "username": "6xgdnh",
    "firstname": "0ws3r",
    "lastname": "fn1d5w",
    "country": "Australia",
    "age": 18,
    "gender": "male",
    "weight": 57.36,
    "height": 156.13,
    "usertype": "regular",
    "location": {
      "latitude": 34.0222,
      "longitude": -118.33370000000001
    },
    "dailyActiveGoal": 3.14,
    "weeklyActiveGoal": 13.99,
    "dailyCaloriesBurnGoal": 948,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.81,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2053,
              "duration": 36.42,
              "caloriesBurned": 870,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1546,
              "duration": 15.12,
              "caloriesBurned": 801,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.19,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10278,
              "duration": 120.68,
              "caloriesBurned": 638,
              "pace": 20.89
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.6,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5346,
              "duration": 150.76,
              "caloriesBurned": 656,
              "pace": 4.16
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.93,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1549,
              "duration": 14.25,
              "caloriesBurned": 859,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2220,
              "duration": 67.25,
              "caloriesBurned": 475,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.48,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3393,
              "duration": 76.52,
              "caloriesBurned": 773,
              "pace": 5.35
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2057,
              "duration": 22.3,
              "caloriesBurned": 674,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8263,
              "duration": 113.25,
              "caloriesBurned": 653,
              "pace": 21.81
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10168,
              "duration": 116.71,
              "caloriesBurned": 389,
              "pace": 20.07
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.04,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2943,
              "duration": 85.8,
              "caloriesBurned": 316,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.37,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1919,
              "duration": 28.15,
              "caloriesBurned": 779,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.43,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9259,
              "duration": 78.65,
              "caloriesBurned": 383,
              "pace": 23.44
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9486,
              "duration": 119.94,
              "caloriesBurned": 624,
              "pace": 23.45
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.31,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8090,
              "duration": 76.85,
              "caloriesBurned": 659,
              "pace": 23.74
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.33,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3319,
              "duration": 49.26,
              "caloriesBurned": 677,
              "pace": 4.36
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.46,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2502,
              "duration": 61.22,
              "caloriesBurned": 511,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.81,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8241,
              "duration": 102.18,
              "caloriesBurned": 724,
              "pace": 24.5
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.76,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1902,
              "duration": 27.09,
              "caloriesBurned": 576,
              "pace": 2.11
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1275,
              "duration": 23.08,
              "caloriesBurned": 770,
              "pace": 2.26
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11496,
              "duration": 165.72,
              "caloriesBurned": 643,
              "pace": 21.66
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11360,
              "duration": 193,
              "caloriesBurned": 876,
              "pace": 21.18
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.85,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6418,
              "duration": 54.05,
              "caloriesBurned": 389,
              "pace": 5.81
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2981,
              "duration": 25.39,
              "caloriesBurned": 567,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.89,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5224,
              "duration": 130.24,
              "caloriesBurned": 675,
              "pace": 5.57
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5446,
              "duration": 94.45,
              "caloriesBurned": 854,
              "pace": 5.76
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.57,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9885,
              "duration": 315.61,
              "caloriesBurned": 333,
              "pace": 21.96
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8726,
              "duration": 94.3,
              "caloriesBurned": 346,
              "pace": 20.37
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.5,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1859,
              "duration": 61.47,
              "caloriesBurned": 462,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1754,
              "duration": 31.76,
              "caloriesBurned": 707,
              "pace": 2.38
            }
          ]
        }
      }
    ]
  },
  {
    "username": "qyi4e4",
    "firstname": "iwvyvl",
    "lastname": "8l1lb8",
    "country": "Germany",
    "age": 33,
    "gender": "male",
    "weight": 70.23,
    "height": 168.83,
    "usertype": "regular",
    "location": {
      "latitude": 33.8822,
      "longitude": -118.4437
    },
    "dailyActiveGoal": 3.1,
    "weeklyActiveGoal": 11.7,
    "dailyCaloriesBurnGoal": 1121,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3468,
              "duration": 35.14,
              "caloriesBurned": 896,
              "pace": 4.17
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8585,
              "duration": 263.02,
              "caloriesBurned": 447,
              "pace": 20.01
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5503,
              "duration": 63.04,
              "caloriesBurned": 755,
              "pace": 5.43
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.38,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6648,
              "duration": 57.03,
              "caloriesBurned": 437,
              "pace": 4.94
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10085,
              "duration": 152.25,
              "caloriesBurned": 422,
              "pace": 22.87
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8325,
              "duration": 87.69,
              "caloriesBurned": 353,
              "pace": 20.91
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8288,
              "duration": 119.7,
              "caloriesBurned": 794,
              "pace": 21.01
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.07,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1124,
              "duration": 24.14,
              "caloriesBurned": 488,
              "pace": 2.26
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4351,
              "duration": 70.14,
              "caloriesBurned": 769,
              "pace": 5.49
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4873,
              "duration": 130.33,
              "caloriesBurned": 760,
              "pace": 5.96
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2109,
              "duration": 22.23,
              "caloriesBurned": 770,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.14,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11183,
              "duration": 129.81,
              "caloriesBurned": 562,
              "pace": 22.42
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9906,
              "duration": 91.79,
              "caloriesBurned": 374,
              "pace": 23.44
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2829,
              "duration": 75.28,
              "caloriesBurned": 321,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 4,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3517,
              "duration": 35.07,
              "caloriesBurned": 629,
              "pace": 4.1
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2315,
              "duration": 32.19,
              "caloriesBurned": 690,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.23,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 886,
              "duration": 10.29,
              "caloriesBurned": 884,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 991,
              "duration": 13.09,
              "caloriesBurned": 817,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7648,
              "duration": 77.38,
              "caloriesBurned": 333,
              "pace": 4.14
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2441,
              "duration": 32.99,
              "caloriesBurned": 684,
              "pace": 2.43
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11817,
              "duration": 111.28,
              "caloriesBurned": 354,
              "pace": 21.21
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5302,
              "duration": 75.82,
              "caloriesBurned": 722,
              "pace": 4.95
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.17,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8596,
              "duration": 140.87,
              "caloriesBurned": 491,
              "pace": 23.19
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.89,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3936,
              "duration": 84.43,
              "caloriesBurned": 872,
              "pace": 4.83
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.66,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2747,
              "duration": 25.91,
              "caloriesBurned": 599,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.88,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6592,
              "duration": 99.77,
              "caloriesBurned": 672,
              "pace": 4.52
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2399,
              "duration": 21.74,
              "caloriesBurned": 553,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.06,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5447,
              "duration": 64.24,
              "caloriesBurned": 522,
              "pace": 5.37
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2749,
              "duration": 29.27,
              "caloriesBurned": 456,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3413,
              "duration": 39.02,
              "caloriesBurned": 756,
              "pace": 5.84
            }
          ]
        }
      }
    ]
  },
  {
    "username": "ul8t7r",
    "firstname": "n0vgiy",
    "lastname": "zqdb3f",
    "country": "United Kingdom",
    "age": 48,
    "gender": "male",
    "weight": 61.17,
    "height": 157.48,
    "usertype": "regular",
    "location": {
      "latitude": 34.3022,
      "longitude": -118.28370000000001
    },
    "dailyActiveGoal": 3.52,
    "weeklyActiveGoal": 11.87,
    "dailyCaloriesBurnGoal": 803,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.24,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11713,
              "duration": 204.63,
              "caloriesBurned": 559,
              "pace": 24.56
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7291,
              "duration": 87.99,
              "caloriesBurned": 701,
              "pace": 5.8
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11187,
              "duration": 94.99,
              "caloriesBurned": 552,
              "pace": 22.24
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.83,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1992,
              "duration": 40.07,
              "caloriesBurned": 635,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 848,
              "duration": 20.15,
              "caloriesBurned": 800,
              "pace": 2.25
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3158,
              "duration": 45.69,
              "caloriesBurned": 736,
              "pace": 5.2
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.74,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1453,
              "duration": 31.46,
              "caloriesBurned": 661,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.03,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3611,
              "duration": 33.92,
              "caloriesBurned": 446,
              "pace": 4.71
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.2,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 895,
              "duration": 10.46,
              "caloriesBurned": 313,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.32,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2037,
              "duration": 17.15,
              "caloriesBurned": 757,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11718,
              "duration": 227.84,
              "caloriesBurned": 491,
              "pace": 21.15
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6899,
              "duration": 130.69,
              "caloriesBurned": 864,
              "pace": 4.59
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8756,
              "duration": 146.64,
              "caloriesBurned": 818,
              "pace": 23.29
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4567,
              "duration": 51.99,
              "caloriesBurned": 740,
              "pace": 5.17
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11923,
              "duration": 390.15,
              "caloriesBurned": 807,
              "pace": 20.18
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.46,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2681,
              "duration": 30.26,
              "caloriesBurned": 551,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.98,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5716,
              "duration": 67.72,
              "caloriesBurned": 665,
              "pace": 4.81
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.09,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1301,
              "duration": 14.27,
              "caloriesBurned": 862,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.5,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1858,
              "duration": 53.07,
              "caloriesBurned": 599,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.73,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8110,
              "duration": 75.04,
              "caloriesBurned": 448,
              "pace": 24.45
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.33,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1314,
              "duration": 22.84,
              "caloriesBurned": 381,
              "pace": 2.42
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8391,
              "duration": 145.25,
              "caloriesBurned": 498,
              "pace": 20.87
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8941,
              "duration": 95.51,
              "caloriesBurned": 515,
              "pace": 23.84
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1883,
              "duration": 21.14,
              "caloriesBurned": 522,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.26,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8126,
              "duration": 90.99,
              "caloriesBurned": 826,
              "pace": 22.35
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9566,
              "duration": 84.42,
              "caloriesBurned": 347,
              "pace": 21.89
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.06,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2198,
              "duration": 24.06,
              "caloriesBurned": 887,
              "pace": 2.35
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.91,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10083,
              "duration": 201.74,
              "caloriesBurned": 732,
              "pace": 21.13
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.25,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10083,
              "duration": 96.81,
              "caloriesBurned": 525,
              "pace": 22.51
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.51,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1266,
              "duration": 32.64,
              "caloriesBurned": 473,
              "pace": 2.34
            }
          ]
        }
      }
    ]
  },
  {
    "username": "gyekmp",
    "firstname": "9yefvq",
    "lastname": "mylaxug",
    "country": "Germany",
    "age": 44,
    "gender": "male",
    "weight": 49.96,
    "height": 178.05,
    "usertype": "regular",
    "location": {
      "latitude": 34.2522,
      "longitude": -118.4537
    },
    "dailyActiveGoal": 3.57,
    "weeklyActiveGoal": 10.75,
    "dailyCaloriesBurnGoal": 1001,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.81,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2156,
              "duration": 19.4,
              "caloriesBurned": 300,
              "pace": 2.16
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.86,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5463,
              "duration": 46.41,
              "caloriesBurned": 345,
              "pace": 5.12
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.73,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11263,
              "duration": 112.58,
              "caloriesBurned": 572,
              "pace": 23.36
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.19,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10347,
              "duration": 127.11,
              "caloriesBurned": 357,
              "pace": 23.39
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.46,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4125,
              "duration": 65.53,
              "caloriesBurned": 576,
              "pace": 5
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.65,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2785,
              "duration": 27.99,
              "caloriesBurned": 712,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8191,
              "duration": 134.88,
              "caloriesBurned": 865,
              "pace": 23.56
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.19,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7056,
              "duration": 88.77,
              "caloriesBurned": 788,
              "pace": 5.94
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10962,
              "duration": 91.49,
              "caloriesBurned": 768,
              "pace": 24.89
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.78,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11054,
              "duration": 227.45,
              "caloriesBurned": 637,
              "pace": 23.79
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.75,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6691,
              "duration": 57.97,
              "caloriesBurned": 805,
              "pace": 4.74
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4014,
              "duration": 83.56,
              "caloriesBurned": 822,
              "pace": 5.96
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5918,
              "duration": 86.27,
              "caloriesBurned": 394,
              "pace": 5.33
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.2,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1794,
              "duration": 32,
              "caloriesBurned": 546,
              "pace": 2.32
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8027,
              "duration": 89.89,
              "caloriesBurned": 315,
              "pace": 22.03
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.45,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 804,
              "duration": 8.4,
              "caloriesBurned": 540,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1854,
              "duration": 31.06,
              "caloriesBurned": 774,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.38,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9933,
              "duration": 185.14,
              "caloriesBurned": 427,
              "pace": 21.24
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3670,
              "duration": 69.43,
              "caloriesBurned": 672,
              "pace": 5.71
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.02,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1357,
              "duration": 11.45,
              "caloriesBurned": 671,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.82,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3062,
              "duration": 61.91,
              "caloriesBurned": 548,
              "pace": 5.21
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9545,
              "duration": 138.15,
              "caloriesBurned": 835,
              "pace": 22.2
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1291,
              "duration": 28.71,
              "caloriesBurned": 414,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11824,
              "duration": 286.5,
              "caloriesBurned": 354,
              "pace": 23.86
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.61,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1759,
              "duration": 24.65,
              "caloriesBurned": 343,
              "pace": 2
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.69,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10683,
              "duration": 206.55,
              "caloriesBurned": 864,
              "pace": 22.84
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.69,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5072,
              "duration": 71.75,
              "caloriesBurned": 596,
              "pace": 4.81
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8937,
              "duration": 90.21,
              "caloriesBurned": 779,
              "pace": 22.02
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6105,
              "duration": 180.19,
              "caloriesBurned": 690,
              "pace": 4.72
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.54,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5729,
              "duration": 125.94,
              "caloriesBurned": 845,
              "pace": 4.79
            }
          ]
        }
      }
    ]
  },
  {
    "username": "2bdls",
    "firstname": "2ygelo",
    "lastname": "d82ywv",
    "country": "Canada",
    "age": 33,
    "gender": "male",
    "weight": 84.54,
    "height": 169.45,
    "usertype": "regular",
    "location": {
      "latitude": 34.1322,
      "longitude": -118.1937
    },
    "dailyActiveGoal": 2.22,
    "weeklyActiveGoal": 14.65,
    "dailyCaloriesBurnGoal": 976,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.09,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1487,
              "duration": 21.27,
              "caloriesBurned": 816,
              "pace": 2.07
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5260,
              "duration": 65.36,
              "caloriesBurned": 665,
              "pace": 5.68
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.9,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3968,
              "duration": 39.6,
              "caloriesBurned": 721,
              "pace": 4.04
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.63,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10951,
              "duration": 132.66,
              "caloriesBurned": 324,
              "pace": 24.32
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.88,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6382,
              "duration": 77.99,
              "caloriesBurned": 677,
              "pace": 4.99
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.95,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3476,
              "duration": 48.08,
              "caloriesBurned": 839,
              "pace": 4.15
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.11,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9357,
              "duration": 132.74,
              "caloriesBurned": 432,
              "pace": 20.17
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.97,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7915,
              "duration": 127.48,
              "caloriesBurned": 586,
              "pace": 4.45
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1287,
              "duration": 11.19,
              "caloriesBurned": 847,
              "pace": 2.32
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 811,
              "duration": 21.73,
              "caloriesBurned": 372,
              "pace": 2.29
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1265,
              "duration": 11.03,
              "caloriesBurned": 800,
              "pace": 2.28
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.83,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5089,
              "duration": 114.59,
              "caloriesBurned": 692,
              "pace": 4.25
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2107,
              "duration": 23.19,
              "caloriesBurned": 505,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 847,
              "duration": 11.68,
              "caloriesBurned": 795,
              "pace": 2.02
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5061,
              "duration": 69.51,
              "caloriesBurned": 640,
              "pace": 4.54
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.79,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 959,
              "duration": 13.37,
              "caloriesBurned": 611,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10040,
              "duration": 123.22,
              "caloriesBurned": 599,
              "pace": 22.15
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.44,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2813,
              "duration": 71.67,
              "caloriesBurned": 879,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11690,
              "duration": 107.13,
              "caloriesBurned": 517,
              "pace": 24.33
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.02,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8684,
              "duration": 118.05,
              "caloriesBurned": 766,
              "pace": 22.85
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6773,
              "duration": 158.62,
              "caloriesBurned": 511,
              "pace": 5.67
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3545,
              "duration": 57.34,
              "caloriesBurned": 388,
              "pace": 4.43
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.58,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9963,
              "duration": 106.58,
              "caloriesBurned": 764,
              "pace": 20.29
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.69,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6961,
              "duration": 111.47,
              "caloriesBurned": 456,
              "pace": 5.12
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11320,
              "duration": 213.1,
              "caloriesBurned": 671,
              "pace": 24.97
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1092,
              "duration": 17.02,
              "caloriesBurned": 305,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2092,
              "duration": 41.14,
              "caloriesBurned": 666,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6987,
              "duration": 65.06,
              "caloriesBurned": 870,
              "pace": 4.61
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.37,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4697,
              "duration": 45.82,
              "caloriesBurned": 753,
              "pace": 5.55
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10799,
              "duration": 188.04,
              "caloriesBurned": 664,
              "pace": 20.19
            }
          ]
        }
      }
    ]
  },
  {
    "username": "awu25b",
    "firstname": "gpctdy",
    "lastname": "s0isva",
    "country": "United Kingdom",
    "age": 32,
    "gender": "female",
    "weight": 45.3,
    "height": 176.58,
    "usertype": "regular",
    "location": {
      "latitude": 34.3422,
      "longitude": -118.22370000000001
    },
    "dailyActiveGoal": 3.25,
    "weeklyActiveGoal": 14.83,
    "dailyCaloriesBurnGoal": 1007,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5176,
              "duration": 66.41,
              "caloriesBurned": 722,
              "pace": 5.28
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.42,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10927,
              "duration": 131.08,
              "caloriesBurned": 313,
              "pace": 23.96
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.64,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3652,
              "duration": 73.25,
              "caloriesBurned": 415,
              "pace": 4.67
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.07,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8402,
              "duration": 123.91,
              "caloriesBurned": 415,
              "pace": 22.14
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1288,
              "duration": 15.28,
              "caloriesBurned": 783,
              "pace": 2.27
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.96,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3475,
              "duration": 33.52,
              "caloriesBurned": 627,
              "pace": 6
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 2.31,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3003,
              "duration": 39.13,
              "caloriesBurned": 368,
              "pace": 5.82
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.69,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9733,
              "duration": 109.36,
              "caloriesBurned": 315,
              "pace": 21.99
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.64,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1609,
              "duration": 25.33,
              "caloriesBurned": 372,
              "pace": 2.31
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3431,
              "duration": 38.29,
              "caloriesBurned": 440,
              "pace": 4.25
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.22,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2062,
              "duration": 23.62,
              "caloriesBurned": 478,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.58,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2847,
              "duration": 35.18,
              "caloriesBurned": 750,
              "pace": 2.41
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8966,
              "duration": 89.78,
              "caloriesBurned": 469,
              "pace": 23.31
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.01,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8439,
              "duration": 224.8,
              "caloriesBurned": 857,
              "pace": 23.24
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8229,
              "duration": 239.7,
              "caloriesBurned": 815,
              "pace": 24.97
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.87,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2219,
              "duration": 63.08,
              "caloriesBurned": 401,
              "pace": 2.35
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.69,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1932,
              "duration": 45.38,
              "caloriesBurned": 863,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 903,
              "duration": 12.3,
              "caloriesBurned": 838,
              "pace": 2.39
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6856,
              "duration": 86.62,
              "caloriesBurned": 382,
              "pace": 5.06
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.45,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2925,
              "duration": 28.85,
              "caloriesBurned": 401,
              "pace": 2.28
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1545,
              "duration": 13.63,
              "caloriesBurned": 329,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1134,
              "duration": 15.18,
              "caloriesBurned": 762,
              "pace": 2.17
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5067,
              "duration": 80.43,
              "caloriesBurned": 827,
              "pace": 4.98
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.99,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8437,
              "duration": 91.51,
              "caloriesBurned": 692,
              "pace": 22.49
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3249,
              "duration": 75.28,
              "caloriesBurned": 641,
              "pace": 4.02
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.55,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5491,
              "duration": 49.34,
              "caloriesBurned": 708,
              "pace": 4.03
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.04,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6115,
              "duration": 65.28,
              "caloriesBurned": 559,
              "pace": 5.07
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.72,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4796,
              "duration": 61.81,
              "caloriesBurned": 868,
              "pace": 5.77
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2072,
              "duration": 19.12,
              "caloriesBurned": 697,
              "pace": 2.13
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.5,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8091,
              "duration": 77.96,
              "caloriesBurned": 583,
              "pace": 22.63
            }
          ]
        }
      }
    ]
  },
  {
    "username": "sr19fw",
    "firstname": "g6s7y9",
    "lastname": "k8ash5",
    "country": "Australia",
    "age": 59,
    "gender": "female",
    "weight": 53.43,
    "height": 173.93,
    "usertype": "regular",
    "location": {
      "latitude": 34.2622,
      "longitude": -118.11370000000001
    },
    "dailyActiveGoal": 3.84,
    "weeklyActiveGoal": 14.56,
    "dailyCaloriesBurnGoal": 1122,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.2,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1827,
              "duration": 16.38,
              "caloriesBurned": 794,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5000,
              "duration": 81.18,
              "caloriesBurned": 601,
              "pace": 4.54
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.84,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7524,
              "duration": 74.88,
              "caloriesBurned": 738,
              "pace": 5.93
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.61,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6128,
              "duration": 63.42,
              "caloriesBurned": 671,
              "pace": 4.79
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.57,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2029,
              "duration": 33.89,
              "caloriesBurned": 497,
              "pace": 2.49
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.26,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2147,
              "duration": 44.7,
              "caloriesBurned": 716,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6835,
              "duration": 143.5,
              "caloriesBurned": 308,
              "pace": 4.36
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.71,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6794,
              "duration": 111.95,
              "caloriesBurned": 654,
              "pace": 5.13
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 2.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9085,
              "duration": 94.11,
              "caloriesBurned": 539,
              "pace": 22.91
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.22,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10618,
              "duration": 117.99,
              "caloriesBurned": 771,
              "pace": 21.86
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.51,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 5312,
              "duration": 49.47,
              "caloriesBurned": 740,
              "pace": 4.95
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6984,
              "duration": 206.63,
              "caloriesBurned": 385,
              "pace": 5.86
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.55,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3120,
              "duration": 38.63,
              "caloriesBurned": 378,
              "pace": 5.19
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.45,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1437,
              "duration": 13.66,
              "caloriesBurned": 536,
              "pace": 2.3
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.53,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1459,
              "duration": 23.84,
              "caloriesBurned": 408,
              "pace": 2.31
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 2.5,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1625,
              "duration": 17.6,
              "caloriesBurned": 728,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 3.7,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1689,
              "duration": 32.91,
              "caloriesBurned": 574,
              "pace": 2.46
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.71,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2416,
              "duration": 28.77,
              "caloriesBurned": 647,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.61,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8924,
              "duration": 283.48,
              "caloriesBurned": 416,
              "pace": 24.08
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10298,
              "duration": 170.89,
              "caloriesBurned": 415,
              "pace": 22.76
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.93,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11329,
              "duration": 286.16,
              "caloriesBurned": 559,
              "pace": 21.64
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.69,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2040,
              "duration": 24.31,
              "caloriesBurned": 416,
              "pace": 2.38
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.9,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11782,
              "duration": 122.83,
              "caloriesBurned": 400,
              "pace": 21.04
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.33,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4759,
              "duration": 80.5,
              "caloriesBurned": 327,
              "pace": 4.46
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.76,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2269,
              "duration": 72.28,
              "caloriesBurned": 887,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.2,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8846,
              "duration": 104.53,
              "caloriesBurned": 826,
              "pace": 23.3
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.85,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11908,
              "duration": 108.75,
              "caloriesBurned": 435,
              "pace": 20.99
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4738,
              "duration": 48.71,
              "caloriesBurned": 619,
              "pace": 4.23
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.83,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9613,
              "duration": 80.35,
              "caloriesBurned": 800,
              "pace": 20.91
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.35,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 993,
              "duration": 13.5,
              "caloriesBurned": 532,
              "pace": 2.23
            }
          ]
        }
      }
    ]
  },
  {
    "username": "zbfwl8",
    "firstname": "et9fj",
    "lastname": "obvxr",
    "country": "Australia",
    "age": 58,
    "gender": "female",
    "weight": 67.2,
    "height": 154.5,
    "usertype": "regular",
    "location": {
      "latitude": 33.9422,
      "longitude": -118.4337
    },
    "dailyActiveGoal": 2.17,
    "weeklyActiveGoal": 11.42,
    "dailyCaloriesBurnGoal": 918,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11486,
              "duration": 183.98,
              "caloriesBurned": 767,
              "pace": 21.06
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.59,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6342,
              "duration": 64.5,
              "caloriesBurned": 358,
              "pace": 5.95
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.05,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6978,
              "duration": 125.19,
              "caloriesBurned": 325,
              "pace": 4.97
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.77,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7059,
              "duration": 76.17,
              "caloriesBurned": 419,
              "pace": 4.15
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.64,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6332,
              "duration": 62.11,
              "caloriesBurned": 346,
              "pace": 5.07
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.18,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3232,
              "duration": 30.51,
              "caloriesBurned": 741,
              "pace": 4.84
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.8,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1617,
              "duration": 21.06,
              "caloriesBurned": 336,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 2.77,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3126,
              "duration": 52.5,
              "caloriesBurned": 739,
              "pace": 5.63
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6682,
              "duration": 78.52,
              "caloriesBurned": 853,
              "pace": 4.56
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 2.54,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6136,
              "duration": 76.06,
              "caloriesBurned": 897,
              "pace": 5.95
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.44,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4084,
              "duration": 134.12,
              "caloriesBurned": 810,
              "pace": 4.92
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1824,
              "duration": 23.94,
              "caloriesBurned": 317,
              "pace": 2.18
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9940,
              "duration": 306.88,
              "caloriesBurned": 765,
              "pace": 20.9
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.07,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9533,
              "duration": 102.37,
              "caloriesBurned": 351,
              "pace": 24.72
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.9,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11028,
              "duration": 187.46,
              "caloriesBurned": 336,
              "pace": 20.58
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3173,
              "duration": 42.52,
              "caloriesBurned": 612,
              "pace": 5.55
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.57,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8347,
              "duration": 74.45,
              "caloriesBurned": 658,
              "pace": 23.13
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 2.43,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2275,
              "duration": 38.03,
              "caloriesBurned": 873,
              "pace": 2.21
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.46,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3852,
              "duration": 45.36,
              "caloriesBurned": 319,
              "pace": 5.76
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 2.19,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3045,
              "duration": 65.32,
              "caloriesBurned": 824,
              "pace": 5.34
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1102,
              "duration": 16.62,
              "caloriesBurned": 857,
              "pace": 2.45
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.6,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1462,
              "duration": 32.35,
              "caloriesBurned": 696,
              "pace": 2.08
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7451,
              "duration": 79.29,
              "caloriesBurned": 320,
              "pace": 5.2
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.14,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1378,
              "duration": 11.85,
              "caloriesBurned": 324,
              "pace": 2.07
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.6,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11255,
              "duration": 93.89,
              "caloriesBurned": 606,
              "pace": 20.97
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 2.29,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8585,
              "duration": 76.01,
              "caloriesBurned": 413,
              "pace": 22.47
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.27,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9213,
              "duration": 106.94,
              "caloriesBurned": 455,
              "pace": 20.25
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 2.41,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2149,
              "duration": 46.14,
              "caloriesBurned": 671,
              "pace": 2.06
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.01,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6465,
              "duration": 93.28,
              "caloriesBurned": 579,
              "pace": 4.43
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 2.9,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1468,
              "duration": 20.01,
              "caloriesBurned": 301,
              "pace": 2.43
            }
          ]
        }
      }
    ]
  },
  {
    "username": "nejc7t",
    "firstname": "lo98i",
    "lastname": "jp4oi8",
    "country": "United Kingdom",
    "age": 46,
    "gender": "male",
    "weight": 82.27,
    "height": 168.42,
    "usertype": "regular",
    "location": {
      "latitude": 33.8222,
      "longitude": -118.50370000000001
    },
    "dailyActiveGoal": 3.58,
    "weeklyActiveGoal": 14.77,
    "dailyCaloriesBurnGoal": 828,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 2.91,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6473,
              "duration": 141.95,
              "caloriesBurned": 606,
              "pace": 5.9
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9010,
              "duration": 124.74,
              "caloriesBurned": 730,
              "pace": 20.73
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 2.12,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7560,
              "duration": 109,
              "caloriesBurned": 526,
              "pace": 4.47
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 2.52,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7792,
              "duration": 223.84,
              "caloriesBurned": 440,
              "pace": 4.06
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 2.63,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3169,
              "duration": 45.47,
              "caloriesBurned": 893,
              "pace": 5.8
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 3.56,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1559,
              "duration": 25.89,
              "caloriesBurned": 752,
              "pace": 2.03
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9893,
              "duration": 124.94,
              "caloriesBurned": 668,
              "pace": 23.9
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.11,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7490,
              "duration": 99.18,
              "caloriesBurned": 571,
              "pace": 5.05
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2772,
              "duration": 23.2,
              "caloriesBurned": 647,
              "pace": 2.09
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10723,
              "duration": 268.81,
              "caloriesBurned": 536,
              "pace": 21.24
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 2.27,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2804,
              "duration": 39.33,
              "caloriesBurned": 760,
              "pace": 2.4
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 3.28,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8379,
              "duration": 128.67,
              "caloriesBurned": 774,
              "pace": 23.73
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6391,
              "duration": 138.27,
              "caloriesBurned": 549,
              "pace": 4.54
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 2.17,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7878,
              "duration": 98,
              "caloriesBurned": 710,
              "pace": 5.67
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 2.86,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7885,
              "duration": 70.35,
              "caloriesBurned": 410,
              "pace": 4.44
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.41,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3342,
              "duration": 39.43,
              "caloriesBurned": 797,
              "pace": 4.8
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.92,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1369,
              "duration": 17.52,
              "caloriesBurned": 836,
              "pace": 2.34
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.35,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9021,
              "duration": 251.49,
              "caloriesBurned": 513,
              "pace": 22.64
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 2.1,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11869,
              "duration": 135.17,
              "caloriesBurned": 855,
              "pace": 22.47
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.06,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2402,
              "duration": 30.49,
              "caloriesBurned": 434,
              "pace": 2.09
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.74,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10551,
              "duration": 90.47,
              "caloriesBurned": 526,
              "pace": 24.31
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.24,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 928,
              "duration": 8.78,
              "caloriesBurned": 614,
              "pace": 2.04
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.91,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11076,
              "duration": 113.8,
              "caloriesBurned": 395,
              "pace": 24.24
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 3.83,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7084,
              "duration": 65,
              "caloriesBurned": 628,
              "pace": 5.35
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11910,
              "duration": 178.61,
              "caloriesBurned": 799,
              "pace": 24.12
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.66,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6271,
              "duration": 72.08,
              "caloriesBurned": 430,
              "pace": 5.53
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7767,
              "duration": 168.37,
              "caloriesBurned": 802,
              "pace": 5.62
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.15,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2738,
              "duration": 26.98,
              "caloriesBurned": 642,
              "pace": 2.47
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 2.19,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1002,
              "duration": 9.78,
              "caloriesBurned": 634,
              "pace": 2.33
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.05,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10135,
              "duration": 234.34,
              "caloriesBurned": 802,
              "pace": 20.16
            }
          ]
        }
      }
    ]
  },
  {
    "username": "eouvrl",
    "firstname": "jjgj68",
    "lastname": "94o5vm",
    "country": "United Kingdom",
    "age": 27,
    "gender": "male",
    "weight": 89.77,
    "height": 167.83,
    "usertype": "regular",
    "location": {
      "latitude": 34.2022,
      "longitude": -118.28370000000001
    },
    "dailyActiveGoal": 2.63,
    "weeklyActiveGoal": 14.72,
    "dailyCaloriesBurnGoal": 854,
    "fitnessHistory": [
      {
        "date": "2023-10-11",
        "activeInfo": {
          "activeTime": 3.44,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2774,
              "duration": 42.25,
              "caloriesBurned": 875,
              "pace": 2.24
            }
          ]
        }
      },
      {
        "date": "2023-10-12",
        "activeInfo": {
          "activeTime": 3.34,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9573,
              "duration": 202.65,
              "caloriesBurned": 458,
              "pace": 22.99
            }
          ]
        }
      },
      {
        "date": "2023-10-13",
        "activeInfo": {
          "activeTime": 3.21,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10667,
              "duration": 141.45,
              "caloriesBurned": 744,
              "pace": 22.09
            }
          ]
        }
      },
      {
        "date": "2023-10-14",
        "activeInfo": {
          "activeTime": 3.45,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8404,
              "duration": 169.85,
              "caloriesBurned": 520,
              "pace": 21.17
            }
          ]
        }
      },
      {
        "date": "2023-10-15",
        "activeInfo": {
          "activeTime": 3.33,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6751,
              "duration": 64.52,
              "caloriesBurned": 421,
              "pace": 4.66
            }
          ]
        }
      },
      {
        "date": "2023-10-16",
        "activeInfo": {
          "activeTime": 2.94,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10744,
              "duration": 195.88,
              "caloriesBurned": 599,
              "pace": 23.33
            }
          ]
        }
      },
      {
        "date": "2023-10-17",
        "activeInfo": {
          "activeTime": 3.92,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4191,
              "duration": 71.8,
              "caloriesBurned": 461,
              "pace": 5.03
            }
          ]
        }
      },
      {
        "date": "2023-10-18",
        "activeInfo": {
          "activeTime": 3.73,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1347,
              "duration": 14.59,
              "caloriesBurned": 619,
              "pace": 2.37
            }
          ]
        }
      },
      {
        "date": "2023-10-19",
        "activeInfo": {
          "activeTime": 3.4,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11188,
              "duration": 141.24,
              "caloriesBurned": 833,
              "pace": 20.16
            }
          ]
        }
      },
      {
        "date": "2023-10-20",
        "activeInfo": {
          "activeTime": 3.75,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11514,
              "duration": 115.37,
              "caloriesBurned": 547,
              "pace": 23.68
            }
          ]
        }
      },
      {
        "date": "2023-10-21",
        "activeInfo": {
          "activeTime": 3.36,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7782,
              "duration": 101.13,
              "caloriesBurned": 324,
              "pace": 5.08
            }
          ]
        }
      },
      {
        "date": "2023-10-22",
        "activeInfo": {
          "activeTime": 2.36,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8550,
              "duration": 97.97,
              "caloriesBurned": 306,
              "pace": 23.81
            }
          ]
        }
      },
      {
        "date": "2023-10-23",
        "activeInfo": {
          "activeTime": 2.62,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7143,
              "duration": 205.67,
              "caloriesBurned": 683,
              "pace": 5.75
            }
          ]
        }
      },
      {
        "date": "2023-10-24",
        "activeInfo": {
          "activeTime": 3.81,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11939,
              "duration": 138.94,
              "caloriesBurned": 819,
              "pace": 22.8
            }
          ]
        }
      },
      {
        "date": "2023-10-25",
        "activeInfo": {
          "activeTime": 3.71,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 8177,
              "duration": 71.1,
              "caloriesBurned": 839,
              "pace": 20.38
            }
          ]
        }
      },
      {
        "date": "2023-10-26",
        "activeInfo": {
          "activeTime": 3.88,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 7027,
              "duration": 137.25,
              "caloriesBurned": 835,
              "pace": 5.02
            }
          ]
        }
      },
      {
        "date": "2023-10-27",
        "activeInfo": {
          "activeTime": 2.06,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6702,
              "duration": 104.65,
              "caloriesBurned": 818,
              "pace": 5.61
            }
          ]
        }
      },
      {
        "date": "2023-10-28",
        "activeInfo": {
          "activeTime": 3.1,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10119,
              "duration": 176.07,
              "caloriesBurned": 736,
              "pace": 20.2
            }
          ]
        }
      },
      {
        "date": "2023-10-29",
        "activeInfo": {
          "activeTime": 3.58,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9305,
              "duration": 232.86,
              "caloriesBurned": 798,
              "pace": 24.45
            }
          ]
        }
      },
      {
        "date": "2023-10-30",
        "activeInfo": {
          "activeTime": 3.7,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 11671,
              "duration": 356.04,
              "caloriesBurned": 380,
              "pace": 23.19
            }
          ]
        }
      },
      {
        "date": "2023-10-31",
        "activeInfo": {
          "activeTime": 3.98,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1476,
              "duration": 21.9,
              "caloriesBurned": 310,
              "pace": 2.23
            }
          ]
        }
      },
      {
        "date": "2023-11-01",
        "activeInfo": {
          "activeTime": 3.39,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 9173,
              "duration": 203.89,
              "caloriesBurned": 726,
              "pace": 22.12
            }
          ]
        }
      },
      {
        "date": "2023-11-02",
        "activeInfo": {
          "activeTime": 3.16,
          "choosenActivity": [
            {
              "activityName": "bike",
              "distance": 10922,
              "duration": 181.94,
              "caloriesBurned": 859,
              "pace": 20.33
            }
          ]
        }
      },
      {
        "date": "2023-11-03",
        "activeInfo": {
          "activeTime": 2.21,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 6437,
              "duration": 71.95,
              "caloriesBurned": 624,
              "pace": 4.1
            }
          ]
        }
      },
      {
        "date": "2023-11-04",
        "activeInfo": {
          "activeTime": 2.9,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 2948,
              "duration": 24.7,
              "caloriesBurned": 842,
              "pace": 2.01
            }
          ]
        }
      },
      {
        "date": "2023-11-05",
        "activeInfo": {
          "activeTime": 3.25,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 4226,
              "duration": 133.14,
              "caloriesBurned": 303,
              "pace": 4.33
            }
          ]
        }
      },
      {
        "date": "2023-11-06",
        "activeInfo": {
          "activeTime": 2.22,
          "choosenActivity": [
            {
              "activityName": "swim",
              "distance": 1979,
              "duration": 25.52,
              "caloriesBurned": 433,
              "pace": 2.12
            }
          ]
        }
      },
      {
        "date": "2023-11-07",
        "activeInfo": {
          "activeTime": 3.49,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3481,
              "duration": 53.97,
              "caloriesBurned": 805,
              "pace": 5.9
            }
          ]
        }
      },
      {
        "date": "2023-11-08",
        "activeInfo": {
          "activeTime": 3.82,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3712,
              "duration": 97.86,
              "caloriesBurned": 305,
              "pace": 5.56
            }
          ]
        }
      },
      {
        "date": "2023-11-09",
        "activeInfo": {
          "activeTime": 3.27,
          "choosenActivity": [
            {
              "activityName": "run",
              "distance": 3776,
              "duration": 114.7,
              "caloriesBurned": 711,
              "pace": 4.17
            }
          ]
        }
      }
    ]
  }
]

db.users.insertMany(users)