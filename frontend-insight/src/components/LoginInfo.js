import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function LoginInfo() {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        <div>You are logged in</div>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
      </p >
      <p>
      <a href="#" class="nav-link" onClick={logout}>
                 logout
                </a>
      
      </p>

    </div>
  );
};