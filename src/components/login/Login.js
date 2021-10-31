import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'

function Login() {
  // state for Email
  const [emailError, setemailError] = useState( false );
  const [emailErrorCharacter, setemailErrorCharacter] = useState( false );
 
  // state for password
  const [passwordError, setpasswordError] = useState( false );
  const [passwordErrorCharacter, setpasswordErrorCharacter] = useState( false );
  const [loginData, setloginData] = useState( {
    email: "",
    password:'',
  } )
  const updateloginData = ( e ) => {
    setloginData( {
      ...loginData,
      [e.target.name] :e.target.value
    })
  }
  
  const saveData = ( e ) => {
    e.preventDefault();
    
    const { email, password } = loginData;
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
  }
    return (
        <div className="bg">
            <h1 id="h1L">Login Form</h1>
             <form >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                name="email"
              value={ loginData.email }
              onChange={updateloginData}
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
                placeholder=" Enter Password"
                name="password"
              value={ loginData.password }
                onChange={updateloginData}
            />
              {passwordError &&
                    <p className="text-danger">Please enter password</p>}
                {passwordErrorCharacter &&
                     <p className="text-danger">password should contain atleast one number and one special character</p>}
            </div>
            <div className="form-group">
            <button onClick={saveData}>Login</button>
            </div>
            <div className="form-group">
              <p>
                Don't have account ? <Link to="/register"><b>Register</b></Link>
              </p>
            </div>
          </form>
        </div>
    )
}

export default withRouter(Login) 
