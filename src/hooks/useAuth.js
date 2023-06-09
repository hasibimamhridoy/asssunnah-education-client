import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

const useAuth = () => {
    
    const {
        handleManualRegister,
        handleGoogleRegister,
        handleGithubRegister,
        handleUpdateProfile,
        handleManualLogin,
        user,
        loading,
        handleManualLogout,
      } = useContext(AuthContext);
      
    return {
        handleManualLogin,
        handleManualRegister,
        handleGoogleRegister,
        handleGithubRegister,
        handleUpdateProfile,
        user,
        loading,
        handleManualLogout,
      };

};

export default useAuth;