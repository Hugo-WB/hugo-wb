import {combineReducers} from 'redux';
import projectsReducer from "./projects/projectsReducer"
// import generalReducer from "./generalReducer"
const allReducers = combineReducers({
    projects: projectsReducer,
    // general: generalReducer
})

export default allReducers;