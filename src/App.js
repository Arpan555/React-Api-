import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestFetchImages } from './Thunk'
import "./App.css"
const App = () => {
  const imageData=useSelector(state=>state.reducer.images)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(requestFetchImages(imageData))
  }, [dispatch])
  return (
    <div>
      <center>
      <h1>API Images Data</h1>
          <h1>
           {Object.keys(imageData).length === 0 ? (<div>...Loading</div>) :
            (
    
                       <div> {imageData.map((img) => (
                        <img className="img-size" src={img} title={img} />
                          ))}
                       </div>
        
            )}
          </h1>

      </center>
    </div>
  )
}

export default App
