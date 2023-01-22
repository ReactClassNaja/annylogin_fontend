import React , {useState}from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material/";
import axios from "axios";
import { Navigate, useNavigate, } from "react-router-dom";


export default function Login(props) {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    axios({
      url: window.$api +'/login',
      method: "post",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true
      //withCredentials: true
    }).then((res) => {
      if(res.data.status === 200){
        props.setisLoggedIn(true)
        navigate('/')
        console.log('logged in')
      }else{
        console.log('think again')
      }
    });
  }; 

const handleChangeEmail = (e) => {
  setemail(e.target.value)
}
const handleChangePassword = (e) => {
  setpassword(e.target.value)
}
if(!props.isLoggedIn) {
  return (
    <Box>
      <Box display="flex" width="20%" padding={2}>
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
      </Box>
      <Box width="20%" padding={2}>
        <TextField label="Email" size="small" value={email || ""} onChange={ handleChangeEmail }></TextField>
      </Box>

      <Box width="20%" padding={2}>
        <TextField label="Password" size="small" value={password || ""} onChange={handleChangePassword}></TextField>
      </Box>
      <Box display="flex" width="20%" padding={2}>
        <Button variant="contained" onClick={handleLogin} >
          Login
        </Button>
      </Box>
    </Box>
  );
}else{
  return(
    <div>
      <Navigate to='/'/>
    </div>
  )
}
}
