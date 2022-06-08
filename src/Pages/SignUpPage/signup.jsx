import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
	const history = useHistory()
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confarmPasswowrd, setConfarmpasswowrd] = useState();

    const userSignUp = () => {
		localStorage.setItem('Name', name);
		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
		localStorage.setItem('conformpassword', confarmPasswowrd);
	}

    return(
        <>
        <div>
        <div className="card bg-light"> 
       <article className="card-body mx-auto">
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<form>
	<Formik
        //   validationSchema={}
          initialValues={{ name: '', email: '', password: '', conformPassword: '', }}
          onSubmit={(values) => {
			  userSignUp(values) 
          }}
        >

{({ handleSubmit, handleChange, values, resetForm, setFieldValue, errors, touched }) => (

     <Form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="name"
		  className="form-control"
		  placeholder="Full name" type="text"
		  onChange={(e) => setName(e.target.value)}
		  
		  />
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email"
		 className="form-control"
		  placeholder="Email address"
		  onChange={(e) => setEmail(e.target.value)}
		   type="email" />
    </div>

    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input 
		 className="form-control"
		 placeholder="Create password"
		 type="password"
		 name="password"
		 onChange={(e) => setPassword(e.target.value)}
		 />
    </div>
    <div className="form-group input-group">
    <div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input 
		className="form-control"
		name='conformPassword'
		placeholder="Repeat password"
		onChange={(e) =>setConfarmpasswowrd(e.target.value)}
		type="password"
		/>
    </div>                                     
    <div className="form-group">
        <button type="submit"
		onClick={handleSubmit}
		 className="btn btn-primary btn-block"
		 > Create Account
		   </button>
    </div>
    <p className="text-center" onClick={() => history.push('/')}> Have an account? Log In</p>                                                                 
	</Form>
	          )}
     </Formik>
</form>
</article>
</div>
        </div>
        </>
    )
}

export default SignUp;