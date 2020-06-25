import {combineReducers} from 'redux';
import projectsReducer from "./projects/projectsReducer"
import pageReducer from "./pageReducer"
const allReducers = combineReducers({
    projects: projectsReducer,
    page:pageReducer,
})

export default allReducers;