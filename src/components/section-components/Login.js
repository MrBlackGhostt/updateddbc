import React, { useState, useEffect } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import axios from "axios"
import { SHA256 } from "crypto-js"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import { useHistory } from "react-router-dom"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "2%",
  boxShadow: 30,
  p: 4,
}

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "2%",
  boxShadow: 30,
  p: 2,
}

const Auth = () => {
  const history = useHistory()
  const [status, setStatus] = useState(false)
  const [user1, setUser1] = useState({
    email: "",
    password: "",
  })

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    mobileNumber: "",
  })

  const [loginErrors, setLoginErrors] = useState({})
  const [registerErrors, setRegisterErrors] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [registerOpen, setRegisterOpen] = React.useState(false)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showSuccessNotification1, setShowSuccessNotification1] =
    useState(false)
  const [showSuccessNotification2, setShowSuccessNotification2] =
    useState(false)
  const [showSuccessNotification3, setShowSuccessNotification3] =
    useState(false)
  // const [Istoken]
  const handleChange1 = (e) => {
    const { name, value } = e.target
    setUser1({
      ...user1,
      [name]: value,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleOpen = () => {
    setOpen(true)
    setRegisterOpen(false) // Close the register modal
  }

  const handleClose = () => setOpen(false)
  const handleClose1 = () => setRegisterOpen(false)

  const handleRegisterOpen = () => {
    setOpen(false) // Close the login modal
    setRegisterOpen(true)
  }

  const handleRegisterClose = () => setRegisterOpen(false)

  useEffect(() => {
    // Check login status on component mount
    const storedToken = localStorage.getItem("token")
    console.log(storedToken)
    if (storedToken) {
      // console.log(token)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const handleSuccessNotificationClose = () => {
    setShowSuccessNotification(false)
  }
  const handleSuccessNotificationClose1 = () => {
    setShowSuccessNotification1(false)
  }
  const handleSuccessNotificationClose2 = () => {
    setShowSuccessNotification2(false)
  }
  const handleSuccessNotificationClose3 = () => {
    setShowSuccessNotification3(false)
  }

  const register = (e) => {
    e.preventDefault()
    const { name, email, password, country, mobileNumber, confirmPassword } =
      user
    const errors = {}

    if (!name) {
      errors.name = "Name is required"
    }
    if (!email) {
      errors.email = "Email is required"
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email"
      }
    }
    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required"
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }
    if (!country) {
      errors.country = "Country is required"
    }
    if (!mobileNumber) {
      errors.mobileNumber = "Mobile Number is required"
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post("https://0a38-223-190-85-92.ngrok-free.app/auth/signup", user)
        .then((res) => {
          const message = res.data.message
          // alert('Successfully Registered!'); // Display error or success notification
          if (message !== "Something Wrong WIth Email or Password") {
            setShowSuccessNotification1(true)
            setIsLoggedIn(true)
            localStorage.setItem("token", res.data.token)
            handleClose1()
            setTimeout(() => {
              history.push("/user-profile")
            }, 300)
          }
          // Close the page
        })
        .catch((err) => {
          console.error(err)
          handleClose1()
          setShowSuccessNotification3(true)
          // alert('Failed to register');
        })
    } else {
      setRegisterErrors(errors)
    }
  }

  const login = () => {
    const { email, password } = user1
    const errors = {}

    if (!email) {
      errors.email = "Email is required"
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email"
      }
    }
    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post("https://0a38-223-190-85-92.ngrok-free.app/auth/signin", user1)
        .then((res) => {
          const message = "Successfully Logged in"
          // this.props.history.push("/user-profile")

          // alert(message); // Display success or error notification
          if (message === "Successfully Logged in") {
            setShowSuccessNotification(true)
            localStorage.setItem("token", res.data.token)
            setIsLoggedIn(true)
            setTimeout(() => {
              history.push("/user-profile")
            }, 300)
            handleClose() // Set login status to true and close the login modal
          }
        })
        .catch((err) => {
          console.error(err)
          setShowSuccessNotification2(true)
          handleClose()
          // alert('Failed to login');
        })
    } else {
      setLoginErrors(errors)
    }
  }

  const logout = () => {
    setIsLoggedIn(false) // Set login status to false
    localStorage.removeItem("token")
    setTimeout(() => {
      history.push("/")
    }, 300)
  }

  return (
    <div>
      <Snackbar
        open={showSuccessNotification}
        autoHideDuration={3000}
        onClose={handleSuccessNotificationClose}
      >
        <MuiAlert
          onClose={handleSuccessNotificationClose}
          severity='success'
          sx={{ width: "15%", position: "fixed", top: "10vh", left: "41vw" }}
        >
          Successfully Logged in
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={showSuccessNotification1}
        autoHideDuration={3000}
        onClose={handleSuccessNotificationClose1}
      >
        <MuiAlert
          onClose={handleSuccessNotificationClose1}
          severity='success'
          sx={{ width: "15%", position: "fixed", top: "10vh", left: "41vw" }}
        >
          Successfully Registered in
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={showSuccessNotification2}
        autoHideDuration={3000}
        onClose={handleSuccessNotificationClose2}
      >
        <MuiAlert
          onClose={handleSuccessNotificationClose2}
          severity='error'
          sx={{ width: "18%", position: "fixed", top: "10vh", left: "41vw" }}
        >
          Something wrong Please try again..
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={showSuccessNotification3}
        autoHideDuration={3000}
        onClose={handleSuccessNotificationClose3}
      >
        <MuiAlert
          onClose={handleSuccessNotificationClose3}
          severity='error'
          sx={{ width: "18%", position: "fixed", top: "10vh", left: "41vw" }}
        >
          Something wrong Please try again..
        </MuiAlert>
      </Snackbar>

      {isLoggedIn ? (
        // Display logout button if logged in
        <button
          className='atn btn-yellow'
          onClick={logout}
          style={{
            width: "7vw",
            backgroundColor: "whitesmoke",
            color: "black",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      ) : (
        // Display login button if not logged in
        <button
          className='atn btn-yellow'
          onClick={handleOpen}
          style={{ width: "7vw", cursor: "pointer" }}
        >
          Login
        </button>
      )}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vh",
                padding: "2vh",
                overflow: "revert",
              }}
            >
              <a
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  border: "none",
                  background: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                &#10005;
              </a>
              <h1>Login</h1>
              <div style={{ padding: "2vh" }}>
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    padding: "15px",
                    marginBottom: "2.9vh",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  id='loginemail'
                  autoComplete='off'
                  name='email'
                  defaultValue={user1.email}
                  onChange={handleChange1}
                  placeholder='Enter your email'
                  required
                />

                {loginErrors.email && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "2vh",
                    }}
                  >
                    {loginErrors.email}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  id='password'
                  autoComplete='off'
                  type='password'
                  name='password'
                  defaultValue={user1.password}
                  onChange={handleChange1}
                  placeholder='Password'
                  required
                />
                {loginErrors.password && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "-15px",
                    }}
                  >
                    {loginErrors.password}
                  </p>
                )}
              </div>
              <button
                className='btn btn-yellow'
                style={{
                  marginTop: "0vh",
                  textAlign: "center",
                  width: "300px",
                }}
                onClick={login}
              >
                Submit
              </button>
              <span>
                Don't have an account?
                <a
                  onClick={handleRegisterOpen}
                  s
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Register
                </a>
              </span>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
              className='tp-form-wrap'
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vh",
              }}
            >
              <a
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  border: "none",
                  background: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={handleClose1}
              >
                &#10005;
              </a>
              <h1>Register</h1>
              <div style={{ padding: "2vh" }}>
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  type='text'
                  name='name'
                  placeholder='Name'
                  defaultValue={user.name}
                  onChange={handleChange}
                />
                {registerErrors.name && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.name}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  name='password'
                  type='password'
                  placeholder='Password'
                  defaultValue={user.password}
                  onChange={handleChange}
                  required
                />
                {registerErrors.password && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.password}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                  defaultValue={user.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {registerErrors.confirmPassword && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.confirmPassword}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  name='email'
                  type='text'
                  placeholder='Email'
                  defaultValue={user.email}
                  onChange={handleChange}
                  required
                />
                {registerErrors.email && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.email}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  name='country'
                  type='text'
                  placeholder='Country'
                  defaultValue={user.country}
                  onChange={handleChange}
                  required
                />
                {registerErrors.country && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.country}
                  </p>
                )}
                <input
                  style={{
                    display: "block",
                    marginTop: "1vh",
                    marginBottom: "2.9vh",
                    padding: "15px",
                    width: "300px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                  name='mobileNumber'
                  type='text'
                  placeholder='Mobile Number'
                  defaultValue={user.mobileNumber}
                  onChange={handleChange}
                  required
                />
                {registerErrors.mobileNumber && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-30px",
                      marginBottom: "20px",
                    }}
                  >
                    {registerErrors.mobileNumber}
                  </p>
                )}
              </div>
              <button
                className='btn btn-yellow'
                style={{
                  marginTop: "-2vh",
                  textAlign: "center",
                  width: "300px",
                }}
                onClick={register}
              >
                Submit
              </button>
              <span>
                Already have an account?
                <a
                  onClick={handleOpen}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Login
                </a>
              </span>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default Auth
