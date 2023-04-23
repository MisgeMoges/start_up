import * as api from "../api/about.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const createPost = (post) => async(dispatch) =>{
//     const {data} = await api.createPost(post)
//     try {

//         dispatch({type: CREATE, payload: data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const updatePost = (id, post)=>async(dispatch)=>{
//     const {data} = await api.updatePost(id, post)
//     try {

//         dispatch({type: UPDATE, payload:data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const deletPost = (id) => async(dispath) =>{
//     const {data} = await api.deletePost(id)
//     try {
//         dispath({type:DELETE, payload:data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }
