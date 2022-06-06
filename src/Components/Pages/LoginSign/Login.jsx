import React from 'react'
import "./Login.scss"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../Firebase"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { contextAuth } from '../../../Context/Authcontex';
const Login = () => {
    const Navigate = useNavigate()
    const [show, setshow] = React.useState(false)
    const [errors,seterrors] = React.useState("")
    const {dispatch} = useContext(contextAuth)
    const [signup, setSignup] = React.useState({
        NameLogin:" ",
        Email:'',
        PHONENO:"",
        Password:"",
        showPassword: false,
    })   
    const [values, setValues] = React.useState({
        Username:'',
        password: '',
        showPassword: false,
      });

      const handleChangesignin = (prop) => (event) => {
        setSignup({ ...signup, [prop]: event.target.value });
      };
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
       const handleMouseDownPassword = async (event) => {
            event.preventDefault();
            createUserWithEmailAndPassword(auth,signup.Email, signup.Password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({type:"LOGIN",payload:user})
                Navigate("/m")
            })
            .catch((error) => {
                console.log(error)

                // ..
            });
        };
      return (
    <div className='LoginContainer' >
        <div className="SignuLoginBox">
            <div className="SignuContainer">
                <div className="LoginHeading">
                    <Typography variant="h5" component="h2" className='HeadTitle'>
                        Welcome to <span className="Loginname">Vidinfo</span>
                    </Typography>
                    <div className="LoginDescription">
                        {errors && <div>{errors}</div>}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur eiusmod ,<br/>
                            adipiscing elit,
                        </p>
                    </div>
                </div>
                {show ? 
                (
                    <form onSubmit={handleMouseDownPassword}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}  className='MainGridcontainer2'>
                        <Grid item md={12}>
                            <FormControl  fullWidth variant="standard"  className='Gridcontainer2'>
                                <InputLabel htmlFor="standard-adornment-NameLogin" style={{fontSize:"13px",fontWeight:"600"}}>NAME</InputLabel>                <Input
                                    id="standard-adornment-NameLogin"
                                    value={values.NameLogin}
                                    onChange={handleChangesignin('NameLogin')}
                                />
                             </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl  fullWidth  variant="standard" className='Gridcontainer2'>
                                <InputLabel htmlFor="standard-adornment-NameLogin" style={{fontSize:"13px",fontWeight:"600"}}>EMAIL</InputLabel>                     <Input
                                        id="standard-adornment-Email"
                                        value={signup.Email}
                                        onChange={handleChangesignin('Email')}
                                    />
                             </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl  fullWidth variant="standard"  className='Gridcontainer2'>
                                <InputLabel htmlFor="standard-adornment-PHONENO" style={{fontSize:"13px",fontWeight:"600"}}>PHONE NO</InputLabel>
                                    <Input
                                        id="standard-adornment-PHONENO"
                                        value={signup.PHONE}
                                        onChange={handleChangesignin('PHONENO')}
                                    />
                             </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl fullWidth variant="standard" className='Gridcontainer2' >
                            <InputLabel htmlFor="standard-adornment-password" style={{fontSize:"13px",fontWeight:"600"}}>PASSWORD</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={signup.Password}
                                onChange={handleChangesignin('Password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button type="submit" value = "submit"> submit</Button>
                    </form>
                )
                :
                (
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='MainGridcontainer'>
                        <Grid item  xs={12} md={12} xl={12}  className='Gridcontainer'>
                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-Username" className="FormBox2">Username</InputLabel>
                                <OutlinedInput 
                                    id="outlined-adornment-Username"
                                    value={values.Username}
                                    rows={4}
                                    onChange={handleChange("Username")}   
                                    label="Username"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} xl={12} className='Gridcontainer'>
                            <FormControl fullWidth  sx={{ m: 1 }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" className="FormBox2">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    rows={4}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} md ={4} className="ForgotContainer" >
                            <span  className="Forgot">
                                {/* //  Loremips  */}
                            </span> 
                        </Grid>
                        <Grid item xs={10} md ={8} xl={3} className="ForgotContainer" >
                            <span  className="Forgot">
                                Forgot password?
                            </span>
                        </Grid>
                    </Grid> 
                )}
                <Grid container className='Button-container' columnSpacing={{ xs: 1, sm: 1, md:2}}>
                    <Grid item xs={4} md ={3} xl={5}>
                        <Button variant="contained" size="large" onClick={()=>{setshow(false)}}>Login</Button>
                    </Grid>
                    <Grid item xs={8} md ={9}  xl={5} >
                        <Button variant="contained" size="large" onClick={()=>{setshow(true)}}>Signup</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md ={12} xl={12} className="SignInOptions" >
                    <span  className="forgot">
                        or Login with 
                        <NavLink to="/Facebook" className="navLink">
                            Facebook
                        </NavLink>
                        <NavLink to="/Github" className="navLink">
                            Github
                        </NavLink>
                        <NavLink to="/facebook" className="navLink">
                            Google
                        </NavLink>
                    </span>
                </Grid>
             </div>
        </div> 
    </div>
  )
}

export default Login