import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4" width="100%"  sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 600px)": {
        minHeight: "100vh",
      },
    }}>
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
         <Typography variant="h3" fontWeight={"bold"}>
         <img
          alt=""
          src={Logo}
          style={{
            width: "130px",
            height: "130px",
            paddingRight:"10px"
          }}
          />
          Fitness Hub
         </Typography>
        <Typography variant="h4" pb="10px">
          Made by Fahad as part of a learning project
        </Typography>
        <Typography variant="h4" pb="40px">
          Follow me on social media:
          <a href="https://www.linkedin.com/in/fahad177/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: 40, ml: 1 }} />
          </a>
          <a href="https://github.com/fahad1722/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: 40, ml: 1 }} />
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;  