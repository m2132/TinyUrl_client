import React, { useEffect,useState } from "react";
import Service from "../Service"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import {orange,teal} from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TinyUrlTarget({ch}) {
  

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
  
    return (
      <List className="links" sx={ {mt:15 , pt:5 , pb:5}}
        // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography sx={{ ml:25 ,color:orange[300] }} component="h1" variant="h5">
            :Your Links
        </Typography> 
          </ListSubheader>
        }
        
      >
        {links.map((item)=>{
            return(
            <ListItemButton >
            <ListItemIcon>
              <EditIcon onClick={()=>{change(item)}}/>     
              <DeleteIcon onClick={()=>{deleted(item.id)}}/>        
            </ListItemIcon>         
            <ListItemText primary={item.uniqueName} secondary={item.originalUrl} />
          </ListItemButton>)
          
         }) }
       
      </List>
        
    );
  }
  