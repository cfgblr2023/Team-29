import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
// icons

// components
import Title from "./Title";
import Paragraph from "./Paragraph";

//imgs
import VR from "../assets/vr.webp";
import UD from "../assets/ud.webp";
import EH from "../assets/sk.webp";
import SK from "../assets/ehh.webp";

const Content = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"OUR FOCUS"} textAlign={"start"} />

        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: "400",
            paddingTop: 1,
          }}
        >
          Making A Difference
        </Typography>

        <Paragraph
          text={
            " The organization has reached out\
            to more than 10,000+ women across\
            different communities in Bangalore."
          }
          maxWidth={"75%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      {/* <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <SportsGymnasticsIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              gym
            </Typography>
          </CardContent>
        </Card>
      </Grid> */}

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <img src={VR} alt="vr" />
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Vridhi
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </Card>
      </Grid> */}

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <img src={UD} alt="ud" />
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Udaan
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <img src={EH} alt="EH" />
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              EmpowHer
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <img src={SK} alt="sk" />
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Shiksha
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
