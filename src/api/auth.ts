import axios from "axios"


export type LoginType = {
    email: string,
    password: string
}

export type LoginResult = {
    access_token: string,
    refresh_token: string
}

export type UserType = {
    id: string,
    email: string,
    password: string,
    name: string,
    role: string,
    avatar: string
}

export type CreateUserType = {
    name: string,
    email: string,
    password: string,
    avatar: string
}

const BaseUrl = "https://api.escuelajs.co/api/v1"
export const doLogin = async (body: LoginType): Promise<LoginResult> => {
    try {
        const { data } = await axios.post(`${BaseUrl}/auth/login`, body);
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getUser = async (token: string): Promise<UserType> => {
    try {
        const { data } = await axios.get(`${BaseUrl}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            throw new Error(error.message)
        } else {
            throw new Error("An unexpected error occurred")
        }
    }
}

export const createUser = async (body: CreateUserType) => {
    try {
        const { data } = await axios.post(`${BaseUrl}/users/`, body);
        return data;
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            throw new Error(error.response?.data?.message[0] || error.message)
        } else {
            throw new Error("An unexpected error occurred")
        }
    }
}