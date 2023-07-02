import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Forms.css"
import { mentorSignUp } from "../api/api.signup";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  description: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  congrats: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

const Forms = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    mentorSignUp(e.target);
  };

  return (
    <div className="signin-form">
    <div className={classes.root}>
      <Typography variant="h5" component="h1">
        Mentor Registration Form
      </Typography>
      <Typography className={classes.description}>
        Thank you for your interest in volunteering with Canasu Dream
        Foundation! Our team relies on dedicated volunteers as Mentors to
        support our mission and make a positive impact in the community. Please
        complete the following registration form to tell us more about yourself
        and your Mentoring interests. Based on your skills and interests, your
        responses will assist us in identifying the most suitable Mentee for
        you. We will use this information to match you with the most fitting
        Mentee Profile.
      </Typography>
      <Paper elevation={3} className={classes.form}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label="Current City"
            name="city"
            autoComplete="address-level2"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address-line1"
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" row>
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Age</FormLabel>
            <RadioGroup aria-label="age" name="age" row>
              <FormControlLabel
                value="18-24"
                control={<Radio color="primary" />}
                label="18-24"
              />
              <FormControlLabel
                value="25-34"
                control={<Radio color="primary" />}
                label="25-34"
              />
              <FormControlLabel
                value="35-44"
                control={<Radio color="primary" />}
                label="35-44"
              />
              <FormControlLabel
                value="45-54"
                control={<Radio color="primary" />}
                label="55-64"
              />
              <FormControlLabel
                value="65+"
                control={<Radio color="primary" />}
                label="65+"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="occupation"
            label="Occupation"
            name="occupation"
            autoComplete="organization"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="experience"
            label="Experience"
            name="experience"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />

          <FormControl fullWidth component="fieldset" margin="normal" name="lang">
            <FormLabel component="legend" name="lang">Languages Spoken</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="English"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Hindi"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Kannada"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Tamil"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Telugu"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Malayalam"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Marathi"
              />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" margin="normal" name="days">
            <FormLabel component="legend">Available Days</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Monday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Tuesday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Wednesday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Thursday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Friday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Saturday"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Sunday"
              />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" margin="normal" name="basis">
            <FormLabel component="legend">
              On what basis would you like us to map the mentee?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Educational background"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Languages known"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Future Aspirations"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Assistance needed"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Location"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Availability"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Other"
              />
            </FormGroup>
            <FormHelperText>
              (While we cannot guarantee an exact mapping based on this, we will
              strive to make every possible effort to achieve a satisfactory
              outcome)
            </FormHelperText>
          </FormControl>
          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel id="time-slot-label">Preferred Time Slot</InputLabel>
            <Select
              labelId="time-slot-label"
              name="timeslot"
              label="Preferred Time Slot"
              defaultValue=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="09:00am - 12:00pm">09:00am - 12:00pm</MenuItem>
              <MenuItem value="12:00pm - 03:00pm">12:00pm - 03:00pm</MenuItem>
              <MenuItem value="03:00pm - 06:00pm">03:00pm - 06:00pm</MenuItem>
              <MenuItem value="06:00pm - 09:00pm">06:00pm - 09:00pm</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>

      <Typography className={classes.congrats}>
        We appreciate your support and look forward to working with you to make
        a difference in our community!
      </Typography>
    </div>
    </div>
  );
};

export default Forms;
