import React from 'react'

export default function Input({type='text',id,name,title,value,onchange,className,errors,onBlur,touched}) {
  return (

  <div className=" mb-3">
  <label  htmlFor={id}>{title} </label> 
 <input type={type} name={name} id={id} className={className} value={value} onChange={onchange} placeholder={title} onBlur={onBlur}    />
 {touched[name] && errors[name] && <p className='text-danger'>{errors[name]}</p>}
</div>  


  )
}
