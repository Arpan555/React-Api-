import { FETCH_IMAGES } from "../Actions/index";
const initialState={
    images:[],
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case FETCH_IMAGES:
            return{
                ...state,
                images:action.payload
            }
              default:
            return state
    }
}