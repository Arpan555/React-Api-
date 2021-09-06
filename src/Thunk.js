import axios from "axios"
import { fetchImages, filterImages} from "./Redux/Actions/allActions"

const request=axios.create({
    baseURL:"http://shibe.online/api",
})
export const requestFetchImages=(state)=>{
    return async(dispatch)=>{
        try{
                const imageData=await request.get("/shibes?count=10",state)
                dispatch(fetchImages(imageData.data))
        }catch(err){
            console.log(err)
        }
   }
}
export const requestFilteredImages=(state)=>{
    return async(dispatch)=>{
        const{limit,type}=state
        try {
            const filteredData=await request.get(`/${type}?count=${limit}`)
            dispatch(filterImages(filteredData.data))
        } catch (error) {
            console.log(error)
        }
    }
}