import React, { useEffect, useState } from "react";
import { Avatar, Typography, Box, Grid, TextField, Button } from "@mui/material/";
import axios from 'axios'
import { SignalWifiStatusbarConnectedNoInternet4Sharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
    const [firstname,setfirstname] = useState("")
    const [lastname,setlastname] = useState("")
    const [username,setusername] = useState("")
     const [email,setemail] = useState("")
     const [password,setpassword] = useState("")
     const [id,setid] = useState("")
    useEffect (()=> {
        axios({
            url:'http://localhost:3000/getuser/1',
            method:'get'
        }).then(res=>{
            console.log(res.data)
            setid(res.data[0].id)
            setfirstname(res.data[0].Firstname)
            setlastname(res.data[0].Lastname)
            setusername(res.data[0].username)
            setemail(res.data[0].email)
            setpassword(res.data[0].password)  
        })
    }, [])
    const handleChangeFirstname = (e)=>{
        setfirstname(e.target.value)
    }
    const handleChangeLastname = (e)=>{
        setlastname(e.target.value)
    }
    const handleChangeUsername = (e)=>{
        setusername(e.target.value)
    }
    const handleChangeEmail = (e)=>{
        setemail(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setpassword(e.target.value)
    }
    const handleUpdate = () => {
        axios({
            url:'http://localhost:3000/update',
            method: 'put',
            data:{
                username: username,
                firstname: firstname,
                lastname:lastname,
                email: email,
                password: password,
                id: id,
            }
        }).then(res => {
            console.log(res.data)
        })
        
    }
    const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/login");
  };
    if (props.isLoggedIn) {
  return (
    <Box>
      <Box display="flex">
        <Box width="20%" padding={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            {" "}
            Anny Phone{" "}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {" "}
            anny@gmail.com - Software-Engineer{" "}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {" "}
            Avata by garvatar.com. or upload your own......
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          {" "}
          Account{" "}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item sm={3} xs={12} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="body2" gutterBottom>
            FristName
          </Typography>
        </Grid>
        <Grid item sm={9} xs={12}>
          <TextField value={firstname || ""} label="Firstname" onChange={handleChangeFirstname}/>
        </Grid>
        <Grid item sm={3} xs={12} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="body2" gutterBottom>
            LastName
          </Typography>
        </Grid>
        <Grid item sm={9} xs={12}>
          <TextField value={lastname || ""} label="lasttname" onChange={handleChangeLastname} />
        </Grid>
        <Grid item sm={3} xs={12} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="body2" gutterBottom>
           Username
          </Typography>
        </Grid>
        <Grid item sm={9} xs={12}>
          <TextField value={username || ""} label="Username" onChange={handleChangeUsername} />
        </Grid>
        <Grid item sm={3} xs={12} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="body2" gutterBottom>
            Email
          </Typography>
        </Grid>
        <Grid item sm={9} xs={12}>
          <TextField value={email || ""}label="Email" onChange={ handleChangeEmail } />
        </Grid>
        <Grid item sm={3} xs={12} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="body2" gutterBottom>
            Password
          </Typography>
        </Grid>
        <Grid item sm={9} xs={12}>
          <TextField value={password || ""} label="Password" onChange={handleChangePassword} />
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='center'>
      <Button variant="contained" onClick={handleUpdate}>Update</Button>
      </Box>
    </Box>
  )
  }else {
    return (
      <div>
        {/* <Navigate to="/login" /> */}
        Please Log in <button onClick={handleLogin} >Login</button>
      </div>
       )}
}
