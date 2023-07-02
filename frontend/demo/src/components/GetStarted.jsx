import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/started1.webp";
import imgDetail2 from "../assets/women2.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={
              "Canasu provides scholarships to women who want to continue their education."
            }
            textAlign={"start"}
          />
          <CustomTypography>
            Scholarships are awarded based on financial need, academic
            achievement, and leadership potential. <br />
            Canasu scholarships can help women to cover the cost of tuition,
            fees, books, and other expenses. <br />
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Match with the best Canasu mentor"}
            textAlign={"start"}
          />
          <CustomTypography>
            Our Canasu mentors are experienced and passionate who
            <br />
            have helped hundreds of women achieve their goals.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
