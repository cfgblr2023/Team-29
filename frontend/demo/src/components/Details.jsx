import React, { useState } from "react";
import { Box, Button, Stack, TextField, FormControl } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { login } from "../api/api.login";
import { Navigate } from "react-router-dom";

const Details = () => {
  const [path, setPath] = useState("");
  const handleSubmit = (event) => {
    let email = event.target.email.value;
    let password = event.target.password.value;

    login(email, password, setPath);

    event.preventDefault();
  };

  if(path !== "") return <Navigate to={path} />

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"SIGN UP FOR THE CAUSE"} textAlign={"center"} />
      <FormControl onSubmit={handleSubmit}>
        <Paragraph
          text={
            "If you are interested to become a mentor/mentee you can sign up below."
          }
          maxWidth={"sm"}
          mx={0}
          textAlign={"center"}
        />

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            py: 2,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-phone"
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            sx={{
              fontSize: "0.9rem",
              textTransform: "capitalize",
              py: 2,
              mt: 3,
              mb: 2,
              borderRadius: 0,
              backgroundColor: "#14192d",
              "&:hover": {
                backgroundColor: "#1e2a5a",
              },
            }}
          >
            SignIn/SignUp
          </Button>
        </Box>
      </FormControl>
    </Stack>
  );
};

export default Details;
