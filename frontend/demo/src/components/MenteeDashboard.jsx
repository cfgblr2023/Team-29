import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "./coordinator.css";
import OppositeContentTimeline from "./TimeLine";

export const MenteeDashboard = () => {
  const card = (modNum, modName, category, blurb, progress) => {
    return (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Module {modNum}
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
  return (
    <div className="join-meeting-container">
      <div className="horizontal-container">
        <div className="horizontal-container">
          <Card variant="outlined" className="each-card">
            {card(1, "Listening", "Skills", "Better your speaking", 50)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card(2, "Excel", "Skills", "Better your speaking", 80)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card(3, "Speaking", "Skills", "Better your speaking", 10)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card(4, "Sleeping", "Skills", "Better your speaking", 30)}
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
  );
};
