import type { AuthAction, AuthState } from "../context/auth-context/auth-context.types";


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                isLoggedIn: action.payload == null ? false : true,
                user: action.payload
            }
        default:
            return state;
    }
}