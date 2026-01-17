import { createContext, useContext, useReducer, type ReactNode } from "react";
import { authReducer } from "../../reducers/auth-reducers";
import type { AuthContextType, AuthState } from "./auth-context.types";


const authContext=createContext<AuthContextType|null>(null);

const AuthContextProvider=({children}:{children:ReactNode})=>{
    const initialState:AuthState={
        user:null,
        isLoggedIn:false
    }
    const [authState,authDispacth]=useReducer(authReducer,initialState);
    return(
        <authContext.Provider value={{authState,authDispacth}}>
            {children}
        </authContext.Provider>
    )
}

const useAuth=()=>{
    const context=useContext(authContext);
    if(!context){
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}

export {AuthContextProvider,useAuth};

