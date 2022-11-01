const postsReducer = (state= {data: null}, action) => {
    switch (action.type) {
        case "POST_POST":
            return { ...state }
        case 'FETCH_ALL_POST':
            return { ...state, data: action.payload}
       default:
            return state
    }
}
export default postsReducer