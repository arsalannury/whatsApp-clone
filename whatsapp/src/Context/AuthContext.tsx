import React , {useState,useContext,createContext} from 'react'

const AuthContext = createContext({
    user : null,
    changeUser : (user) => {}
})

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = () => {
    const [user,setUser] = useState(null);

    const changeUser = (user): void => {
       setUser(user)
    }

  return (
    <AuthContext.Provider
    value={{
        user,
        changeUser
    }}
    >

    </AuthContext.Provider>
  )
}

export default AuthContextProvider