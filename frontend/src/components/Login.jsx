import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

import { useHistory, useLocation } from "react-router-dom";


import { connect } from 'react-redux';
import * as actions from '../store/authActions';

function Login(props) {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (props.isAuthenticated) { history.replace(from) };
  });


  const handleChange = (event) => {
    switch (event.target.id) {
      case 'username': setusername(event.target.value); break;
      case 'password': setPassword(event.target.value); break;
      default: return null;
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAuth(username, password);
  }

  return (
    <div className="mx-auto w-50 ">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="m-1">                   
          <Input
            name="username"
            placeholder="User Name"            
            type="text"
            id="username"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="m-1">         
          <Input
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </FormGroup>
        
        <Button>Login</Button>
        
      </Form>
    </div>
  )  
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(null, mapDispatchToProps)(Login);
