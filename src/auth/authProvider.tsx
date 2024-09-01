import { useContext, useEffect, useState, createContext } from "react";

const authContext = createContext<any>({
  isAuthenticaded: false,
})

function AuthProvider({children}: any) {
  const [isAuthenticaded, setIsAuthenticaded] = useState(false);
  return (
    <authContext.Provider value={{ isAuthenticaded }}>
      { children}
    </authContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
}