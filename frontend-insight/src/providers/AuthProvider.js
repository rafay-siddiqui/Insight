import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("Elon");

  // Perform login process for the user & save authID, etc
  const login = function (email, password) {
    setAuth(true);
    const id = "1234-1234-1234";  // Some random userId
    setUser("Elon");
  };

  const logout = function () {
    setUser("Elon");
    setAuth(false);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};