import { AccountCreate, AccountLogin, SigninResponse, SignupResponse, User, userDetailsResponse } from "@/types/auth";
import api from "./api.service";


export const handleSignup = async (user: AccountCreate): Promise<SignupResponse> => {
    try {
        const response = await api.post<SignupResponse>(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/create`, user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const handleSignin = async (user: AccountLogin): Promise<SigninResponse> => {
    try {
        const response = await api.post<SigninResponse>(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/login`, user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUser = async (): Promise<userDetailsResponse> => {
    try {
        const response = await api.get<userDetailsResponse>(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/info`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}