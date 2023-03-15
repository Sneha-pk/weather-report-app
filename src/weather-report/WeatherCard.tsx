import React, { useState, useEffect } from "react";
import { Box, Grid, Autocomplete, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

import { WeatherProps } from "../types/index";
import { Weather } from "../weather/Weather";

export const WeatherCard = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  console.log("today", `${day}/${month}/${year}`);

  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [location, setLocation] = useState("");
  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("name", name, value);

    setLocation(value);
  };

  useEffect(() => {
    console.log("location", location);
  }, [location]);

  return (
    <Box>
      <Grid>Weather app</Grid>
      <Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Basic date picker"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid>
        <TextField
          id="location"
          name="location"
          label="Location"
          value={location}
          onChange={handleLocation}
        />
      </Grid>
      <Grid>
        <Weather location={location} />
      </Grid>
      <Grid>
        <Typography>Temperature today</Typography>
        <Typography>Tomorrow</Typography>
        <Typography>Day after Tomorrow</Typography>
      </Grid>
    </Box>
  );
};
