import { apiConnector } from "../apiConnector";
import { blog } from "../apis";

const {
    CREATE_BLOG,
    GET_ALL_BLOGS,
    GET_BLOG_BY_ID,
    UPDATE_BLOG,
    DELETE_BLOG,
} = blog; 

export function getAllBlog() {
 return async() => {
    try{

        const response = await apiConnector(
         "GET", 
          GET_ALL_BLOGS
        ); 
        

        console.log("response",response.data);

    } catch(error){
        console.log(error);
    }
 }
}