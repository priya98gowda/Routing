import React, { useState}from 'react'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'

function Register() {
  // state for firstName
  const [firstNameError, setfirstNameError] = useState( false );
  const [firstNameErrorCharacter, setfirstNameErrorCharacter] = useState( false );
 
  // state for lastName
  const [lastNameError, setlastNameError] = useState( false );
  const [lastNameErrorCharacter, setlastNameErrorCharacter] = useState( false );
  // state for Email
  const [emailError, setemailError] = useState( false );
  const [emailErrorCharacter, setemailErrorCharacter] = useState( false );
 
  // state for password
  const [passwordError, setpasswordError] = useState( false );
  const [passwordErrorCharacter, setpasswordErrorCharacter] = useState( false );
    
  // state for Confirm Password
  const [confirmpasswordError, setconfirmpasswordError] = useState( false );
  const [confirmpasswordErrorCharacter, setconfirmpasswordErrorCharacter] = useState( false );

  const [registerData, setregisterData] = useState( {
    firstName: '',
    lastName: "",
    email: '',
    password: '',
    confirmPassword: '',
  } );
     
  const updateregisterData = ( event ) => {
    setregisterData( {
      ...registerData,
      [event.target.name]: event.target.value
    } )
  }

  const submit = ( event ) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = registerData;

    // Form Validation for firstName
    if ( firstName ) {
      setfirstNameError( false )
      if ( firstName.search( /[^a-zA-Z]+/ ) ) {
        setfirstNameErrorCharacter( false )
      } else {
        setfirstNameErrorCharacter( true )
      }
    } else {
      setfirstNameErrorCharacter( false )
      setfirstNameError( true )
    }

    // Form Validation for lastName
    if ( lastName ) {
      setlastNameError( false )
      if ( lastName.search( /[^a-zA-Z]+/ ) ) {
        setlastNameErrorCharacter( false )
      } else {
        setlastNameErrorCharacter( true )
      }
    } else {
      setlastNameErrorCharacter( false )
      setlastNameError( true )
    }
    
    // Email Validation
    if ( email ) {
      setemailError( false )
      if ( email.search( /\S+@\S+\.\S+/ ) ) {
        setemailErrorCharacter( false )
      } else {
        setemailErrorCharacter( false )
      }
    } else {
      setemailErrorCharacter( false )
      setemailError( true )
    }
      
    // Password Validation
    if ( password ) {
      setpasswordError( false )
      if ( password.search( /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ ) ) {
        setpasswordErrorCharacter( false )
      } else {
        setpasswordErrorCharacter( false )
      }
    } else {
      setpasswordErrorCharacter( false )
      setpasswordError( true )
    }

    // Confirm Password Validation
    if ( confirmPassword ) {
      setconfirmpasswordError( false )
      if ( confirmPassword === password ) {
        setconfirmpasswordErrorCharacter( false )
      } else {
        setconfirmpasswordErrorCharacter( false )
      }
    } else {
      setconfirmpasswordErrorCharacter( false )
      setconfirmpasswordError( true )
    }
  }
    return (
      <div className="bg1">
         <h1 id="h1L">Register Form</h1>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="firstName"
              value={registerData.firstName}
              onChange={updateregisterData}
            />
            {firstNameError &&
                    <p className="text-danger">Please enter firstName</p>}
                {firstNameErrorCharacter &&
                     <p className="text-danger">Only characters are allowed</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="lastName"
              value={ registerData.lastName }
              onChange={updateregisterData}
            />
            {lastNameError &&
                    <p className="text-danger">Please enter lastName</p>}
                    {lastNameErrorCharacter &&
                     <p className="text-danger">Only characters are allowed</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={ registerData.email }
              onChange={updateregisterData}
            />
            {emailError &&
                    <p className="text-danger">Please enter Email</p>}
                    {emailErrorCharacter &&
                     <p className="text-danger">Email is not valid</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              value={ registerData.password }
              onChange={updateregisterData}
            />
            {passwordError &&
                    <p className="text-danger">Please enter password</p>}
                    {passwordErrorCharacter &&
                     <p className="text-danger">password should contain atleast one number and one special character</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder=" Enter Confirmpassword"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={updateregisterData}
            />
            {confirmpasswordError &&
                    <p className="text-danger">Please enter confirm Password</p>}
                    {confirmpasswordErrorCharacter &&
                     <p className="text-danger">Password is not matched</p>}
          </div>
          <div className="form-group">
            <button onClick={submit}>Register</button>
          </div>
          <div className="form-group">
            <p>
              Already have an account ? <Link to="/login"><b>Login</b></Link>
            </p>
          </div>
        </form>
      </div>
    )
  
}

export default withRouter(Register)
