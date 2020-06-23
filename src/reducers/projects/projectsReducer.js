const initialState = {
    currentPage: "Projects",
}

export default (state = initialState,action)=>{
    switch (action.type){
        case "switchPage":
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}