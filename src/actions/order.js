import * as api from "../api/order.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
export const getPost = () =>async(dispatch)=>{
    try {
        const {data} = await api.fetchPost()
    } catch (error) {
        console.log(error.message)
    }
}