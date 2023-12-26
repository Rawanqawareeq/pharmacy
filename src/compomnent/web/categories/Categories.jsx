
import axios from 'axios'
import { useQuery } from 'react-query'



export default function Categories(){
  const  getCategories = async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories`)
    return data;
  }
  
  const query = useQuery('web-Categories',getCategories);
 
  return (
    <>
     <p>Categories</p>
     
    </>
  )
}
