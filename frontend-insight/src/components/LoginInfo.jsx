import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import Avatar from "./Avatar";
import Button from './Button';
import  { Redirect } from 'react-router-dom';

export default function LoginInfo() {
  const style = {
    color: 'white',
    fontSize: 10
  };
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <>
      <Redirect to='/portfolio'  />
      
      {/*  <div>You are logged in</div>
        <div color ="white">Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
        <Button onClick={logout}>
                 logout
      </Button> */}
      </ >
     

    </div>
  );
};