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
  LinearProgress,
} from "@mui/material";

export function Leaderboard({ initialData }) {
  const [leaderboardData, setLeaderboardData] = useState(initialData);
  const [usernameFilter, setUsernameFilter] = useState("");

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simulate new data
      const newData = [
        {
          username: "minhtran1",
          averagePaceDaily: 7.8,
          averagePaceWeekly: 7.5,
          averagePaceMonthly: 7.2,
        },
        {
          username: "v1ahrk",
          averagePaceDaily: 8.2,
          averagePaceWeekly: 7.9,
          averagePaceMonthly: 7.6,
        },
      ];

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
                <LinearProgress
                  value={
                    (user.averagePaceDaily || user.averageDistanceDaily) * 10
                  }
                  valueBuffer={10}
                  readOnly
                  variant="buffer"
                />
              </TableCell>
              <TableCell>
                <LinearProgress
                  value={
                    (user.averagePaceWeekly || user.averageDistanceWeekly) * 10
                  }
                  valueBuffer={10}
                  readOnly
                  variant="buffer"
                />
              </TableCell>
              <TableCell>
                <LinearProgress
                  value={
                    (user.averagePaceMonthly || user.averageDistanceMonthly) *
                    10
                  }
                  valueBuffer={10}
                  readOnly
                  variant="buffer"
                />
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
            style={{ width: "100px" }}
          />
        </div>
        {renderLeaderboard(leaderboardData)}
      </Paper>
    </div>
  );
}
