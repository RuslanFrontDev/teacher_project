import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
function Home(){
   const [show, setShow]=useState(false)
   useEffect(()=>{
      axios.get('http://localhost:9000/get_allusers')
      .then(res=>setShow(res.data))
   },[])

   return(
      <>
      {show && show.map((item,index)=>{
          return <h2 key ={index}>{item.name}{item.email}</h2>
      })}

      {/* {show && JSON.stringify(show)} */}
      </>
   )
}
export default Home