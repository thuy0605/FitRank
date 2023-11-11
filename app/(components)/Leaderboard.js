"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Divider,
  Typography,
  TextField,
} from "@mui/material";

const Leaderboard = ({ initialData }) => {
  const [leaderboardData, setLeaderboardData] = useState(initialData);
  const [usernameFilter, setUsernameFilter] = useState("");

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simulate new data
      const newData = {
        paceBoardLeader: {
          activityName: "Running",
          leaderBoard: [
            {
              username: "john_doe",
              averagePaceDaily: 7.8,
              averagePaceWeekly: 7.5,
              averagePaceMonthly: 7.2,
            },
            {
              username: "jane_smith",
              averagePaceDaily: 8.2,
              averagePaceWeekly: 7.9,
              averagePaceMonthly: 7.6,
            },
            // Add more users as needed
          ],
        },
        distanceBoardLeader: {
          activityName: "Running",
          leaderBoard: [
            {
              username: "john_doe",
              averageDistanceDaily: 8.5,
              averageDistanceWeekly: 60.5,
              averageDistanceMonthly: 250.0,
            },
            {
              username: "jane_smith",
              averageDistanceDaily: 7.5,
              averageDistanceWeekly: 52.5,
              averageDistanceMonthly: 225.0,
            },
          ],
        },
      };

      setLeaderboardData(newData);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const renderLeaderboard = (leaderboard) => {
    // Filter the leaderboard data based on the username filter
    const filteredLeaderboard = leaderboard.filter((user) =>
      user.username.toLowerCase().includes(usernameFilter.toLowerCase())
    );

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Avg (Daily)</TableCell>
            <TableCell>Avg (Weekly)</TableCell>
            <TableCell>Avg (Monthly)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredLeaderboard.map((user) => (
            <TableRow key={user.username}>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                {user.averagePaceDaily || user.averageDistanceDaily}
              </TableCell>
              <TableCell>
                {user.averagePaceWeekly || user.averageDistanceWeekly}
              </TableCell>
              <TableCell>
                {user.averagePaceMonthly || user.averageDistanceMonthly}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div>
      <Paper className="">
        <Typography variant="h5" component="div">
          Pace Leaderboard
        </Typography>
        <div className="">
          <TextField
            label="Filter by username"
            variant="outlined"
            value={usernameFilter}
            onChange={(e) => setUsernameFilter(e.target.value)}
            size="small"
            margin="normal"
            style={{ width: '100px'}}
          />
        </div>
        {renderLeaderboard(leaderboardData.paceBoardLeader.leaderBoard)}
      </Paper>

      <Divider />

      <Paper>
        <Typography variant="h5" component="div">
          Distance Leaderboard
        </Typography>
        {renderLeaderboard(leaderboardData.distanceBoardLeader.leaderBoard)}
      </Paper>
    </div>
  );
};

export default Leaderboard;
