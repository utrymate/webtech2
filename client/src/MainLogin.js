import {login, register} from './services/users';

import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import "./Login.css";

export default function MainLogin() {
    const [user, setUser] = useState({})
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    return (
        <div className="Login">
          <form>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel >Username</FormLabel >
              <FormControl
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                onChange={handleChange}
                autoFocus
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel >Password</FormLabel >
              <FormControl
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </FormGroup>
            <Button onClick={(e)=>{e.preventDefault(); login(user.username, user.password)}} block bsSize="large" type="submit">
              Login
            </Button>

            <Button onClick={(e)=>{e.preventDefault(); register(user.username, user.password)}} block bsSize="large" type="submit">
              Register
            </Button>
          </form>
        </div>
      );
}