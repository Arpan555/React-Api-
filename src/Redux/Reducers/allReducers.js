import { FETCH_IMAGES,FILTER_IMAGES,RESET_IMAGES } from "../Actions/index";
const initialState={
    images:[],
    type:localStorage.getItem("type"),
    limit:localStorage.getItem("limit")
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case FETCH_IMAGES:
            return{
                ...state,
                images:action.payload
            }
        case RESET_IMAGES:
            return{
                images:[]
            }
        case FILTER_IMAGES:
            return{
                ...state,
                images:action.payload
            }
        default:
            return state
    }
}