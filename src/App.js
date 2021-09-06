import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestFetchImages,requestFilteredImages } from './Thunk'
import "./App.css"
import { resetImages,setFilterData } from './Redux/Actions/allActions'
const App = () => {
  const imageData=useSelector(state=>state.reducer.images)
  const type=useSelector(state=>state.reducer.type)
  const limit=useSelector(state=>state.reducer.limit)
  const [panel,setPanel]=useState(true)
  const [filterFormData,setFilterFormData]=useState({limit:limit,type:type})
  const dispatch = useDispatch()
  function toggleButton(){
    if(!panel) setPanel(true);
    else setPanel(false)
  }
  const handleInputData=(e)=>{
    let {name,value}=e.target;
    setFilterFormData({...filterFormData,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(setFilterData(filterFormData))
    dispatch(requestFilteredImages(filterFormData))
    
  }
  useEffect(() => {
    dispatch(resetImages())
    dispatch(requestFetchImages())
  }, [dispatch])
  return (
    <div>
      <center>
      <h1>API Images Data</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label>No of Records</label><br/>
                <input type="number" name="limit" value={filterFormData.limit} onChange={handleInputData}/><br/>
                <label>Record Type</label><br/>
                <input type="text" name="type" value={filterFormData.type} onChange={handleInputData}/><br/><br/>
                <input type="submit" value="Apply Filter" />
            </form>
      <hr/>
      <br/>
          <h1>
            <div>
                  <button onClick={toggleButton}>Button</button>
                  <br/><br/>
                  {imageData.map((img) =>
                        panel?
                              (
                              <img className="img-size" src={img} title={img} />
                              )
                              :(
                              <h3>{img}</h3>
                              )
                  )}
            </div>
          </h1>
      </center>
    </div>
  )
}
export default App
