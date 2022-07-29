import React, { useState, useContext, createContext } from "react";
import { ChildrenProps } from "../Components/InterFaces/ChildrenInterface";

const AuthContext = createContext({
  user: null || JSON.parse(localStorage.getItem("user")!),
  changeUser: (user) => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: ChildrenProps) => {
  let userInLocalStorage = JSON.parse(localStorage.getItem("user")!);
  const [user, setUser] = useState(userInLocalStorage ? userInLocalStorage : null);

  const changeUser = (user): void => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
