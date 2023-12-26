import React from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik'
import { validationSchema} from '../validate/validate.js'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Register() {
  const  initialValues= {
        userName:'',
        email:'',
        password:'',
        image:'',
    }
const handleFiedChange = (event)=>{
    formik.setFieldValue('image',event.target.files[0]);

}
const onSubmit= async users=>{    
const formData = new FormData()
formData.append('userName',users.userName);
formData.append('email',users.email);
formData.append('password',users.password);
formData.append('image',users.image);
const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);
console.log(data.message)
if(data.message=='success'){
    formik.resetForm();
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
      

}}
    
    const formik = useFormik({
        initialValues,
        onSubmit,
       validationSchema:validationSchema,

    
    })
    const inputs =[
        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,
        },
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
            
        },
        {
            id:'image',
            type:'file',
            name:'image',
            title:'user image',
            onChange:handleFiedChange
        },
    ]
    const renderinputs = inputs.map((input,index)=>
    <Input   className={'form-control'} errors={formik.errors} type={input.type} key={index} id={input.id} name={input.name} title={input.title} value={input.value}  onchange={input.onChange ||formik.handleChange}
    onBlur={formik.handleBlur} touched={formik.touched}
     />
       
    )
  return (
    <>
   <header className='register vh-100'>
   <div className='content container ms-3 py-5'>
    <h2 className='mb-3'>create account</h2>
    <form onSubmit={formik.handleSubmit} encType='multipart/form-data' >
    
        {renderinputs}
        <button type='submit' className='submit' disabled={!formik.isValid}>Register</button>
    
    </form>
    </div>
   </header>
      
    </>
  )
}
