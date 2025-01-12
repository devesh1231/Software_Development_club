const SERVER_URL = "http://localhost:5173/";

// USER AUTH ENDPOINTS
export const userAuthEndpoints = {
    
    LOGIN_API: SERVER_URL + "/login",
    LOGOUT_API: SERVER_URL + "/logout",
    
}

export const blog = {
    CREATE_BLOG: SERVER_URL + "/create-blog",
    GET_ALL_BLOGS: SERVER_URL + "/get-blog",
    GET_BLOG_BY_ID: SERVER_URL + "/get-blog",
    UPDATE_BLOG: SERVER_URL + "/update-blog",
    DELETE_BLOG: SERVER_URL + "/delete-blog",
}