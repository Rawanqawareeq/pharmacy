import * as yup from 'yup';
export  const validationSchema =yup.object({
   
    userName:yup.string().required('userName is requred').min(3,'must be at least 3 char').max(20,'must be at most 20 char'),
    email:yup.string().required('user email is requred').email(),
    password:yup.string().required(' password is requred').min(3,'must be at least 3 char').max(20,'must be at most 20 char') 
})
export  const loginSchema =yup.object({
       email:yup.string().required('user email is requred').email(),
    password:yup.string().required(' password is requred').min(3,'must be at least 3 char').max(20,'must be at most 20 char') 
})

