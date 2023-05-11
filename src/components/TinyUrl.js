import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service"
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
//import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AutorenewIcon from '@mui/icons-material/Autorenew';
// import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import {useNavigate}from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
export default function TinyUrl() {


  const navigate=useNavigate()
  const [url, setUrl] = useState();
  const [uniqeName, setUniqeName] = useState();
  const [newUrl,setNewUrl] = useState("");
  const [copied,setCopied] = useState(false);
  const [title,setTitle] = useState("copy");



    const post = async()=>{      
      setNewUrl(await Service.postUrl(url,uniqeName))
      console.log('newUrl',newUrl)
  }
  
const c = () =>{
  setTitle("copied")
  setTimeout(()=>setTitle("copy"),2000);
  
}

  return (
    <Container maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        flexDirection: "column",
        alignItems: 'center',
       // '& > :not(style)': { m: 1 },
        width: 500,
        maxWidth: '100%',
      }}
    >
    <Avatar sx={{m: 1, ml:22, bgcolor: orange[300] }}>
        <AutorenewIcon/>
      </Avatar>
    <Typography sx={{ ml:20.5  }} component="h1" variant="h5">
          TinyUrl
        </Typography>
    <TextField 
        fullWidth
        label="Your Url" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your unique name "
        onChange={(event) => setUrl(event.target.value)}
      />
    
    <TextField 
        fullWidth
        label="Name" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your url "
        onChange={(event) => setUniqeName(event.target.value)}
    />
      <br/>
       <TextField 
        fullWidth 
        disabled
        label="Your Tiny Url" 
        id="margin-normal" 
        margin="normal"       
        value={newUrl} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <CopyToClipboard text={newUrl}
              onCopy={c}>
                {/* ()=>setTitle("copied") */}
                <Tooltip title={title}>
                <IconButton>
              <span><FileCopyOutlinedIcon sx={{width:22}}/></span>
              </IconButton>
              </Tooltip>
              </CopyToClipboard>   
            </InputAdornment>
          ),
        }}  
    />  
       
        {/* {copied ? <span sx={{color: teal[300]}}>Copied.</span> : null} */}
     <Button variant="contained" 
       onClick={post}
       sx={{ mt: 3,ml:4, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
        Send
      </Button> 
      <Button variant="contained" 
       onClick={()=>navigate('/tinyUrlTarget')}
       sx={{ mt: 3,ml:5, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
        add target
      </Button> 
    {/* add target
    <Link href="/tinyUrlTarget" variant="body2" color={teal[300]}>
   <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute',  }}
        icon={<SpeedDialIcon />}
        href="/tinyUrlTarget"
      >
      </SpeedDial>
              </Link> */}
     
    </Box>
    </Container>
    
  );
}



