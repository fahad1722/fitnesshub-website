import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/HeroBannerImage.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="29px"
    >
      <Typography color="orange" fontSize="56px" fontWeight="600">
        Fitness Hub
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
        className="animate-text"
      >
        Sweat now, shine later <br />
        Stay fit, don't quit
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" marginBottom="4px">
        Check out most effective exercises
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff2625",
          padding: "15px",
        }}
        onClick={() => {
          window.location.href = "#exercises";
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Fitness Hub
      </Typography>
      <img
        alt="banner"
        className="hero-banner-img"
        src={HeroBannerImage}
        width="50px"
      />
    </Box>
  );
};

export default HeroBanner;
