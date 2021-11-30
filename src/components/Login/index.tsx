import React from 'react';
import { Button, TextField } from '../_commons';

const Login = () => {
  const handleSubmit = (e) => {
    console.log(typeof e)
    e.preventDefault();
    alert('hello world');
  };

  console.log("login")

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="card"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField label="username" />
          <TextField
            label="password"
            type="password"
            style={{ marginTop: 20 }}
          />
          <Button type="submit" style={{ marginTop: 10 }}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
