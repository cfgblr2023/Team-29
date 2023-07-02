import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text={"OUR BELIEF"} textAlign={"center"} />
      <Paragraph
        text={
          "Canasu is not just an organization that helps women entrepreneurs, it is a revolution to support the dream of every woman to construct their future with perseverance. We strengthen their inner voice by driving away their fear of suppression and by bringing freedom into every sphere of their lives. We strongly believe that if we need to make the world a better place for tomorrow, women need to be architects of the future."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "#1e2a5a",
          },
        }}
      >
        get in touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
