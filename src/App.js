import React,{useState,useEffect} from "react"
import "./App.css"
function App() {
  const[image,setImage]=useState(null)
useEffect(() => {
    getImageData();
    async function getImageData() 
    {
      const res = await fetch("http://shibe.online/api/shibes?count=10");
      const data = await res.json();
      setImage(data) ;
    }
},[])
 
  return (
    <div>
      <h1>Api Image Data</h1>
          {image && (
            <div>
              {image.map((img,index) => (
                <div key={index}>
                    <img className="img-size" src={img} alt={img}/>
                </div>
              ))}

            </div>
          )}
    </div>
  );
}

export default App;
