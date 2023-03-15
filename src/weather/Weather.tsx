import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { WeatherProps, countryListProps } from "../types/index";

type Location = { location: string };

export const Weather = ({ location }: Location) => {
  const API_KEY = "pk.26b40c8e0866da8ef9419fd998f7df92";
  const API_KEY1 = "bd4e7079ff9119a7b7f5d4d763206263";

  const getCountries = async () => {
    const res = await fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${location}&format=json`
    );
    const data = await res.json();
    console.log("data", data);

    if (data) {
      const loc = data[0];
      const weather_respose =
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${loc.lat}&lon=${loc.lon}&units=metric&
      exclude=current,minutely,hourly&appid=${API_KEY1}`);
      //   console.log("weather", weather_respose);
      const weather = weather_respose.json();
      console.log("weather", weather);
    }
  };

  return (
    <Box>
      <Grid>Weather card</Grid>
      <button onClick={getCountries}>call</button>
    </Box>
  );
};
