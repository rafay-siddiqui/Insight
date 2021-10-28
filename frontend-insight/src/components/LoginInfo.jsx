import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import Avatar from "./Avatar";
export default function LoginInfo() {
  const style = {
    color: 'white',
    fontSize: 200
  };
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
      <Avatar/>
        <div>You are logged in</div>
        <div color ="white">Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
        <a href="#" style={style} onClick={logout}>
                 logout
                </a>
      </p >
     

    </div>
  );
};