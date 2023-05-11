import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Service from "../Service";
import { useState } from "react";
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';


const color = orange[300]
export default function Login() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("123456");
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Service.login(userName, password);
    navigate("/link", { replace: true });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor:  color}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          התחברות
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="שם משמתמש"
            name="name"
            autoComplete="name"
            
            //helperText={"שם משתמש ברירת מחדל: email@gmail.com"}
            onChange={(event) => setUserName(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
           // helperText={"סיסמה ברירת מחדל: 123456"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="זכור אותי"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2, bgcolor: teal[300] }}
          >
            התחברות
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2" color={teal[300]}>
                {"אין לך עדין חשבון? להרשמה"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
