import { useContext, useState, createContext } from "react";
import { AuthProviderProps, AuthContextType } from "./types";

const authContext = createContext<AuthContextType>({
  isAuthenticated: false
});

function AuthProvider({children}: AuthProviderProps) {
  const [isAuthenticated] = useState( () => {
    if(localStorage.getItem('isAuthenticated') === 'true') {
      return true;
    }
    return false;
  });

  return (
    <authContext.Provider value={{ isAuthenticated }}>
      { children}
    </authContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
}
