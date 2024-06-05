import axios from "axios";
import {IUser} from "@/services/user.interface";

axios.defaults.baseURL = process.env.API_URL

export const getUserAllService = {
    async getAllUser() {
        const { data } = await axios.get<IUser[]>('/users')
        return data
    },
    async getIdUser(id: string) {
        const { data } = await axios.get<IUser>(`/users/${id}`)
        return data
    }
}