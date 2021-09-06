import {FETCH_IMAGES,RESET_IMAGES,FILTER_IMAGES,SET_FILTER_DATA} from "./index";
export const fetchImages=(imageData)=>{
    return{
        type:FETCH_IMAGES,
        payload:imageData
    }
}
export const resetImages=()=>{
    return{
        type:RESET_IMAGES
    }
}
export const filterImages=(filterData)=>{
    return{
        type:FILTER_IMAGES,
        payload:filterData
    }
}
export const setFilterData=(data)=>{
    localStorage.setItem("type",data.type)
    localStorage.setItem("limit",data.limit)
    return{
        type:SET_FILTER_DATA,
        payload:data
    }
}