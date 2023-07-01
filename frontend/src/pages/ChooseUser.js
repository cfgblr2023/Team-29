import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { AccountCircle, School, Group } from "@mui/icons-material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";

const ChooseUser = () => {
  const navigate = useNavigate();

  const { status, currentUser, currentRole } = useSelector(
    (state) => state.user
  );

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Coordinator") {
      navigate("/Coordinatorlogin");
    } else if (user === "Mentor") {
      navigate("/Mentorlogin");
    } else if (user === "Mentee") {
      navigate("/Menteelogin");
    }
  };

  useEffect(() => {
    if (status === "success" || currentUser !== null) {
      if (currentRole === "Coordinator") {
        navigate("/Coordinator/dashboard");
      } else if (currentRole === "Mentor") {
        navigate("/Mentor/dashboard");
      } else if (currentRole === "Mentee") {
        navigate("/Mentee/dashboard");
      }
    } else if (status === "error") {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Coordinator")}>
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>Co-ordinator</StyledTypography>
                Login as an administrator to access the dashboard to manage app
                data.
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Mentor")}>
                <Box mb={2}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>Mentor</StyledTypography>
                Login as a Mentor to explore course materials and conduct sessions.
              </div>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Mentor")}>
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>Mentee</StyledTypography>
                Login as a student to join sessions and upskill yourself
              </div>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
