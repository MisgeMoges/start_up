import * as api from "../api/home.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getPosts = ()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchPost()
        dispatch({type:FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
        
    }
}