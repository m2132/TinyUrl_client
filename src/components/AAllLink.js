import * as React from 'react';
import { useEffect,useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Service from '../Service';


  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  
  export default function AAllLink({ch}) {
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    let [links, setLinks] = useState([]);
   
    
    useEffect(()=>{
        async function func(){
            const newLinks = await Service.getLinks();
            setLinks(newLinks)
            console.log('links1',links)
        }
        func();
    },[])

const change = (item) =>{
    ch(item.uniqueName,item.originalUrl)
}

const deleted =async (id) =>{
    await Service.delete(id)
     const newLinks = await Service.getLinks();
     setLinks(newLinks)
}

function generate(element) {
    links.map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 ,mt:10}}>
 
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Your Links:
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={links.uniqueName}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Demo>
          
        </Grid>
      </Box>
    //   {links.map((item)=>{
    //         return(
    //         <ListItemButton >
    //         <ListItemIcon>
    //           <EditIcon onClick={()=>{change(item)}}/>     
    //           <DeleteIcon onClick={()=>{deleted(item.id)}}/>        
    //         </ListItemIcon>         
    //         <ListItemText primary={item.uniqueName} secondary={item.originalUrl} />
    //       </ListItemButton>)
          
    //      }) }
    );
  }