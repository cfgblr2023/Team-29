import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./coordinator.css";
import { Sidebar } from "./Sidebar";

export const CoordinatorDashboard = () => {
  const card = (modNum, modName, category, blurb) => {
    return (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            {modName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2">{blurb}</Typography>
        </CardContent>
 
      </React.Fragment>
    );
  };
  return (
    <div className="cd-horizontal-container">
      <Sidebar />
      <div className="join-meeting-container">
        <div className="horizontal-container-coordinator">
          <Card variant="outlined" className="each-card">
            {card(1, "Listening", "Skills", "Better your speaking", 50)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card(2, "Excel", "Skills", "Better your speaking", 80)}
          </Card>
          <Card variant="outlined" className="each-card">
            {card(3, "Speaking", "Skills", "Better your speaking", 10)}
          </Card>
        </div>
      </div>
    </div>
  );
};
