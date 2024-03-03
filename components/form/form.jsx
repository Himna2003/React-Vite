import React, { useState } from 'react'
import './form.css'
const Form = (props) => {
    const [inputtext, setInputText] = useState('')
    const handleChange = (e) => {
        setInputText(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addList(inputtext);
        setInputText('');
      };

   
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add your tasks' 
        value={inputtext}
        onChange={handleChange}
        />
        <button type="submit">Add Task</button>
    </form>
    
  )
}

export default Form
