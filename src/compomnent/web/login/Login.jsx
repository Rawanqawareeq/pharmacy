import React from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik'
import { loginSchema, validationSchema} from '../validate/validate.js'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login({saveCurrentUser}) {
  const navigate = useNavigate();
  const  initialValues= {
        email:'',
        password:'',
    }
const onSubmit= async users=>{    
const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signin',users);

if(data.message=='success'){
    localStorage.setItem('userToken',data.token)
    saveCurrentUser();
    toast.success('success', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  
    navigate('/')  

    
}}
    
    const formik = useFormik({
        initialValues,
        onSubmit,
       validationSchema:loginSchema,

    
    })
    const inputs =[
        {
            id:'email',
            type:'email',
            name:'email', 
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
            
        }
    ]
    const renderinputs = inputs.map((input,index)=>
    <Input   className={'form-control'} errors={formik.errors} type={input.type} key={index} id={input.id} name={input.name} title={input.title} value={input.value}  onchange={formik.handleChange}
    onBlur={formik.handleBlur} touched={formik.touched}
     />
       
    )
  return (
    <>
   <header className='register vh-100'>
   <div className='content container ms-3 py-5'>
    <h2 className='mb-3'>login</h2>
    <form onSubmit={formik.handleSubmit}  >
    
        {renderinputs}
        <button type='submit' className='submit' disabled={!formik.isValid}>Login</button>
    
    </form>
    </div>
   </header>
      
    </>
  )
}
