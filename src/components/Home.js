
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from 'react';
//import {orange,teal} from '@mui/material/colors';



export default function Home() {
    return (
      <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          //bgcolor={"yellow"}
          gutterBottom
        >
        
      
       {/* <Chart/> */}
       {/* <Draft/> */}
          Tiny Url App-
         here you can shorten URLs
        </Typography>
        </Container>
        
        </Box>
    );
  }
  