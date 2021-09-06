import axios from "axios"
import { fetchImages} from "./Redux/Actions/allActions"

const request=axios.create({
    baseURL:"http://shibe.online/api",
})
export const requestFetchImages=(state)=>{
    return async(dispatch)=>{
        try{
                console.log(state)
                const imageData=await request.get("/shibes?count=10",state)
                console.log(imageData.data)
                dispatch(fetchImages(imageData.data))
               
        }catch(err)
        {
            console.log(err)
        }
   }
}