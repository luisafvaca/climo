import { useContext, useState, createContext } from "react";

const authContext = createContext<any>({
  isAuthenticated: false,
})

function AuthProvider({children}: any) {
  const [isAuthenticated, setIsAuthenticated] = useState( () => {
    if(localStorage.getItem('isAuthenticated') === 'true') {
      return true;
    }
    return false;
  });

  return (
    <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      { children}
    </authContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
}
