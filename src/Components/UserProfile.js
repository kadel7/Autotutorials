import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import Hero from './Hero';
  
  const UserProfile = () => {
    const navigate = useNavigate();
    const paperStyle = {
      padding: 60,
      height: "auto",
      width: 400,
      margin: "80px auto",
  
      // backgroundColor: "yellow",
    };
    return (
      <div>
        <Hero/>
        <Box style={paperStyle}>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Grid item direction="column">
                <TextField
                  type="text"
                  label="User Name"
                  placeholder="Enter Username"
                  fullWidth
                  required
                />
              </Grid>
              <br></br>
              <Grid item direction="column">
                <p></p>
              </Grid>
              <Grid item direction="column">
                <TextField
                  type="text"
                  label="User Handle"
                  placeholder="Enter UserHandle"
                  fullWidth
                  required
                />
              </Grid>
              <br></br>
              <Grid item direction="column">
                <p></p>
              </Grid>
        
              <FormControl sx={{ m: 0, minWidth: 248}}>
                <InputLabel>Country</InputLabel>
                <Select label="Country">
                  <MenuItem>India</MenuItem>
                  <MenuItem>US</MenuItem>
                  <MenuItem>UK</MenuItem>
                </Select>
                <FormHelperText>Please select your country</FormHelperText>
              </FormControl>
            </CardContent>
             
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                size="small"
              >
                SUBMIT
              </Button>
            </CardActions>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                fullWidth
                onClick={() => navigate("/")}
              >
                I WANT TO CREATE ORGANIZATION
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
      {/* </Paper> */}
       </div>
    );
};
export default UserProfile;