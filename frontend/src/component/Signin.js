import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import axios from "../axios"
import cookie from "js-cookie"
const Signin = () => {
<<<<<<< HEAD
  

  
=======
  const history=useNavigate()
>>>>>>> origin

  const [data, setData ] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })
  // Handle Error
  const [err,setError]=useState({
    passErr:"",
    cPassErr:"",
    nameErr:"",
    emailErr:""
  })

  const handleChange = (e) => {
    e.preventDefault()
    const {name,value}=e.target
    if(name=="cpassword")
    {
      if(value!=data.password){
        setError({...err,cPassErr:"*Password Not Matched"})

      }
      else{
        setError({...err,cPassErr:""})

      }
    }
    setData({...data,[name]:value})
  }
  const sendData=async()=>{
    try{
      if(err.cPassErr==""){
    const theSignIn=await axios.post("/signup",data)
    if(theSignIn){
     await cookie.set("token",theSignIn.data.token)
      console.log(theSignIn.data.token)
      history("/navbar")
    }
    

  }

    }
    catch(e){
      setError({...err,emailErr:`*${e.response.data}`})
    }
  }
   
    return (
        <div>

             <Container component="main" maxWidth="xs">

                 <CssBaseline />
                   <Box
                      sx={{
                         marginTop: 8,
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         
                         }}
                     >
           <Typography component="h1" variant="h5" style={{textAlign:'center'}}>Welcome to our TodoApp</Typography>

              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                 <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  SignUp
             </Typography>
<<<<<<< HEAD
          <Box component="form" onSubmit="" >
=======
          <Box component="form"  method='post'>
>>>>>>> origin

          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="off"
              autoCapitalize
              value={data.name}
              onChange={handleChange}
              
            />
            <b style={{color:"red"}}>{err.nameErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value={data.email}
              onChange={handleChange}
            
            />
            <b style={{color:"red"}}>{err.emailErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleChange}

            />
            <b style={{color:"red"}}>{err.passErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.cpassword}
              onChange={handleChange}
              
            />
            
           <b style={{color:"red"}}>{err.cPassErr}</b>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept terms and conditions"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendData}
            >
             SignIn
            </Button>

           
          </Box>
        </Box>
      </Container>
        </div>
    )
}

export default Signin;
