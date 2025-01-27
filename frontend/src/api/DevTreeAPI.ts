import { isAxiosError } from "axios";
import api from "../config/axios";
import { User, UserHandle } from "../types";

export async function getUser() {
    try {
        const { data } = await api<User>('/user');
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function updateUser(formData: User) {
    try {
        const { data } = await api.patch<string>('/user', formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error)
            throw new Error(error.response.data.error);
        }
    }
}

export async function uploadImage(file: File) {
    let formData = new FormData();
    formData.append('file', file);
    try {
        const { data: { image } }: { data: { image: string } } = await api.post('/user/image', formData);
        return image;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error)
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUserByHandle(handle: string) {
    try {
        const url = `/${handle}`;
        const { data } = await api<UserHandle>(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error)
            throw new Error(error.response.data.error);
        }
    }
}