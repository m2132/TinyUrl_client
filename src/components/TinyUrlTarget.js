import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service"
import Button from '@mui/material/Button';
//import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AllLinks from "./AllLinks.js"
import Grid from '@mui/material/Grid';
import AAllLink from "./AAllLink.js"
import { async } from 'q';

export default function TinyUrlTarget() {

  const [name, setName] = useState();//מקום פרסום
  const [targetValue, setTargetValue] = useState();//value of target eg. 1 / elkayam
  const [uniqueName, setUniqeName] = useState("Name" );//uniqueName
  const [newUrl,setNewUrl] = useState("Your Tiny Url");;//url+target
  const [url,setUrl] = useState("Your Url");//old url
    const post = async()=>{      
      setNewUrl(await Service.postUrl(url,uniqueName))
      console.log('newUrl',newUrl)    
  }
  
  const change = (name,value) =>{
   
    setUniqeName(name);
    setUrl(value);
  }
  const handleClick=async()=>{
    setNewUrl(await Service.addTarget(uniqueName , name ,targetValue));
  }

  return (
    
    <Grid container spacing={2}>
      <Grid item xs={7}>
    <Container 
    maxWidth="xs"
    >
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 8,
        flex:"column",
        flexDirection: "column",
         alignItems: 'center',
       // '& > :not(style)': { m: 1 },
        width: 500,
        maxWidth: '100%',
      }}
    >
    <Avatar sx={{m: 1, ml:22, bgcolor: orange[300] }}>
   <AutorenewIcon />
      </Avatar>
    <Typography sx={{ ml:20.5  }} component="h1" variant="h5">
          Target
        </Typography>
    <TextField 
        fullWidth
        disabled
        label={url} 
        id="margin-normal" 
        margin="normal" 
        
        //helperText="Please enter your unique name "
        //onChange={(event) => setUrl(event.target.value)}
      />
    
    <TextField 
        disabled
        label={uniqueName}
        id="margin-normal" 
        margin="normal" 
        //value={name}
        //helperText="Please enter your url "
        //onChange={(event) => setUniqeName(event.target.value)}
    />
    <br/>
      {/* <Button variant="contained" 
       onClick={post}
       sx={{ mt: 3,ml:17, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
        target
      </Button>  */}
      <br/>

      <TextField  
        label="place of distribution " 
        id="margin-normal" 
        margin="normal" 
        //value={newUrl}
        onChange={(e)=>setName(e.target.value)}
    />  
       <TextField  
        label="value" 
        id="margin-normal" 
        margin="normal" 
      //  value
       onChange={(e)=>setTargetValue(e.target.value)}
    />  
       <TextField 
        fullWidth 
        disabled
        value={newUrl} 
        id="margin-normal" 
        margin="normal"         
    />  
       
       <Button variant="contained" 
       onClick={handleClick}
       sx={{ mt: 3,ml:5, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
      <SpeedDialIcon  /> add
      </Button> 

    {/* <SpeedDial
        ariaLabel="SpeedDial basic example"   
        sx={{ color:orange[300]}}    
        icon={<SpeedDialIcon  /> 
        }
        onClick={handleClick}
      >
      </SpeedDial> */}

    </Box>
    
    
    </Container>
    
    </Grid>
    <Grid tem xs={5}>
    {/* <AllLinks  ch={change} />  */}
    <AAllLink ch={change}/>
    </Grid>
    </Grid>
    
  );
}



