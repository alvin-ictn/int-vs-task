const URL = "https://jsonplaceholder.typicode.com";

export const API = {
    GET_BY_ID: (id) => `${URL}/posts/${id}`,
    POST: `${URL}/posts`,
    EDIT: (id) => `${URL}/posts/${id}`,
    DELETE: (id) => `${URL}/posts/${id}`
}