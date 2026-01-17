import type { Dispatch } from "react"
import type { UserType } from "../../api/auth"

export type AuthState = {
    user: UserType | null,
    isLoggedIn: boolean
}

export type AuthContextType = {
    authState: AuthState,
    authDispacth: Dispatch<AuthAction>
}

export type AuthAction =
    | { type: "SET_USER"; payload: UserType|null };

export type AuthReducerType = {
    state: AuthState,
    action: AuthState
}