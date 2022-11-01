import * as api from '../api/index'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_POST", payload: data})
        dispatch(fetchAllPosts())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllPosts = () => async (disptach) => {
    try {
        const { data } = await api.getAllPosts()
        disptach({ type: 'FETCH_ALL_POST', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id, navigate) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch(fetchAllPosts())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}