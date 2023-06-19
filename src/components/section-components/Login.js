import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import { SHA256 } from 'crypto-js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '2%',
  boxShadow: 30,
  p: 4,
};

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: '2%',
  boxShadow: 30,
  p: 4,
};

const Login = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    whatsApp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [open, setOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setRegisterOpen(false); // Close the register modal
  };

  const handleClose = () => setOpen(false);
  const handleClose1 = () => setRegisterOpen(false);

  const handleRegisterOpen = () => {
    setOpen(false); // Close the login modal
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => setRegisterOpen(false);

  const register = (e) => {
    e.preventDefault();
    const { name, email, password, country, whatsApp, confirmPassword } = user;
    if (
      name &&
      email &&
      country &&
      whatsApp &&
      password &&
      (password.length >= 8) && // Check if password length is greater than or equal to 8
      (password === confirmPassword)
    ) {
         // Validate email format
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(email)) {
           alert('Please enter a valid email');
           return;
         }
      // Hash the password
      const hashedPassword = SHA256(password).toString();
  
      // Create a new user object with the hashed password
      const newUser = { ...user, password: hashedPassword };
      axios.post('http://localhost:5000/register', newUser).then((res) => {
      console.log(res);
      alert('Register Successful');
      handleClose1();
      // Close the page
    });
    } else if (password.length < 8) {
      alert('Password must be greater than 8 digits');
    } else {
      alert('Invalid Inputs');
      console.log(user);
    }
  };
    const login = () => {
    axios.post("http://localhost:5000/login", user)
      .then(res => {
       alert(res.data.message); // Display success notification
        setIsLoggedIn(true);
        handleClose();
        // Set login status to true after successful login
      })
      .catch(err => {
      alert(err.message); // Display error notification
    
      });
  };
  const logout = () => {
    setIsLoggedIn(false); // Set login status to false
  };
  return (
    <div>
       {isLoggedIn ? ( // Display logout button if logged in
        <button className="atn btn-yellow" onClick={logout} style={{ width: '7vw' , backgroundColor: "whitesmoke", color: "black"}}>
          Logout
        </button>
      ) : ( // Display login button if not logged in
        <button className="atn btn-yellow" onClick={handleOpen} style={{ width: '7vw' }}>
          Login
        </button>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vh',
                padding: '2vh',
              }}
            >
              <h1>Login</h1>
              <input
                style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                id="loginemail"
                autoComplete='off'
                name='email' defaultValue={user.email} onChange={handleChange} placeholder='Enter your email'
                required
              />
              <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                id="password"
                autoComplete='off'
                type="password"name='password' defaultValue={user.password} onChange={handleChange}
                placeholder="Password"
                required
              />
              <button className="btn btn-yellow" style={{ marginTop: '4vh', textAlign: 'center', width: '300px' }} onClick={login}>
                Submit
              </button>
              <span>
                Don't have an account?
                <a onClick={handleRegisterOpen} s style={{ color: 'red', cursor: 'pointer' }}>
                  Register
                </a>
              </span>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={registerOpen}
        onClose={handleRegisterClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={registerOpen}>
          <Box sx={style1}>
            <div
              className="tp-form-wrap"
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vh',
                padding: '2vh',
              }}
            >
              <h1>Register</h1>
            
                    <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                      type="text"
                  name="name"
                  placeholder='Name'
                      defaultValue={user.name}
                      onChange={handleChange}
                    />
        
                <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                  name='password'
                  type="password"
                  placeholder="Password"
                  defaultValue={user.password}
                  onChange={handleChange}
                  required
                    />
                      
               
                <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                  name='confirmPassword'
                  type="password"
                  placeholder="Confirm Password"
                  defaultValue={user.confirmPassword}
                  onChange={handleChange}
                  required
                    />
              <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                
                type="text" name="country" defaultValue={user.country} placeholder='Country' onChange={handleChange} required />
                
              <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                id='email'     
                type="email"
                name="email"
                placeholder='Email'
                      defaultValue={user.email}
                onChange={handleChange}
               required
                    />
                
              <input
                 style={{ display: 'block', marginTop: '1vh', marginBottom: '1vh', padding: '15px', width: '300px',backgroundColor: "whitesmoke" , border: "none"}}
                type="text" placeholder="WhatsApp No." name="whatsApp" defaultValue={user.whatsApp} onChange={handleChange} />
                
              
            <button
              className="btn btn-yellow" style={{ marginTop: '1vh', textAlign: 'center', width: '300px' }}
                onClick={register}
              >
                Submit
              </button>
              <span>
                Already have an account?
                <a onClick={handleOpen} style={{ color: 'red', cursor: 'pointer' }}>
                  Login
                </a>
              </span>
              </div>
          </Box>
        </Fade>
      </Modal>
      </div>
  );
};

export default Login;
