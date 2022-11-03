import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const SignIn = (authData) => API.post('/auth/signin', authData);
export const signUp = (authData) => API.post('/auth/signup', authData);

export const post = (postData) => API.post('/post', postData)
export const getAllpostss = () => API.get('/posts/get');