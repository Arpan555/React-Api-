import {FETCH_IMAGES} from "./index";
export const fetchImages=(imageData)=>{
    return{
        type:FETCH_IMAGES,
        payload:imageData
    }
}
