import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import "./Login.css";
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { Card } from 'antd';
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();  
console.log(loginEmail, 'loginPassword')
console.log(loginPassword, 'loginPassword')
  const userLogUp = () => {
    debugger
    const emailVarify = localStorage.getItem('email');
    const passwordVarify = localStorage.getItem('password');
    if(loginEmail === emailVarify && loginPassword === passwordVarify) {
      history.push('/home')
    }

  }
  
 
  return (
    <>
   <div className="simple-login-container">
    <Card className='login-cart'>
    <h2>User Login</h2>
    <Formik
          //validationSchema={}
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
			    userLogUp(values) 
          }}
        >

{({ handleSubmit, handleChange, values, resetForm, setFieldValue, errors, touched }) => (
  <Form>
    <div class="row">
        <div className="col-md-12 form-group">
            <input
            name='email'
             placeholder="Enter your Email"
              type="email"
               class="form-control"
                 onChange={(e) => setLoginEmail(e.target.value)} />
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 form-group">
            <input
            name='password'
             type="password"
              placeholder="Enter your Password" 
              class="form-control"
               onChange={(e) => setLoginPassword(e.target.value)} 
                />
        </div>
    </div>
    <div>
    <Button
     onClick={handleSubmit}
      variant="contained"
       color="primary"
       >
        Login
      </Button>
    </div>
    </Form>
    )}
</Formik>
    </Card>
    </div>
    </>
  );
}

export default Login;