import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import "./coordinator.css";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import "./coordinator.css";
import OppositeContentTimeline from "./TimeLine";

export const MentorDashboard = () => {
  const card1 = (modNum, modName, category, blurb, progress) => {
    return (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {modNum}
          </Typography>
          <Typography variant="h5" component="div">
            {modName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2">{blurb}</Typography>
        </CardContent>
        <LinearProgress variant="determinate" value={progress} />
        <CardActions>
          <Button size="small">Raise Issue</Button>
        </CardActions>
      </React.Fragment>
    );
  };
  const card = () => {
    return (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            Upcoming meetings
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            remember to take a nap
          </Typography>
        </CardContent>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Meeting with hooman" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Meeting with hooman" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Meeting with hooman" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Meeting with hooman" />
            </ListItemButton>
          </ListItem>
        </List>
      </React.Fragment>
    );
  };
  return (
    <div>
      <div className="horizontal-container">
        <Box sx={{ minWidth: 1100 }}>
          <Card variant="outlined" className="each-card" min>
            {card()}
          </Card>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div className="join-meeting-container">
      <div className="horizontal-container">
        <div className="horizontal-container">
          <Card variant="outlined" className="each-card">
            {card1("Rohit", "Listening", "Skills", "Better your speaking", 50)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card1("Rohit", "Excel", "Skills", "Better your speaking", 80)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card1("Rohit", "Speaking", "Skills", "Better your speaking", 10)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card1("Rohit", "Sleeping", "Skills", "Better your speaking", 30)}
          </Card>
        </div>
        <div>
          <OppositeContentTimeline />
        </div>
      </div>
      <div className="horizontal-container">
        <Button variant="contained">JOIN MEETING</Button>
      </div>
    </div>
    </div>
  );
};
