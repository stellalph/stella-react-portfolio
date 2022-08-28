import React, { useState } from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';



const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  .text-warning {
    color: red;
  }
  button[type='submit'] {
    background-color: var(--black);
    color: var(--steel-1);
    border-color: var(--steel-1);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: solid;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
    background-color: var(--steel-1);
    color: var(--black);
  }
  }
`;

export default function ContactForm() {
const [name, setName ] = useState('');
const [email, setEmail ] = useState('');
const [inquiry, setInquiry ] = useState('');

const { register, handleSubmit, formState: { errors }, reset} = useForm();

const onSubmit = (data) => {
  console.log(data);
  reset();
};

console.log(errors);

return (
    <div>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        
            <div className="form-group">
              <label htmlFor='name'>
                Your name
                <input 
                  type='text' 
                  id='name' 
                  name='name' 
                  value={name}
                  {...register('name', { required: "Name is required"})} 
                  onChange={(e) => setName(e.target.value)}
                  />
                {errors.name && (<small className='text-warning'>{errors.name.message}</small>)}  
              </label>
            </div>
            <div className="form-group">
              <label htmlFor='email'>
                Your email address
                <input 
                  type='text'
                  id='email' 
                  name='email' 
                  value={email} 
                  {...register('email', { required: "Email is required"})} 
                  onChange={(e) => setEmail(e.target.value)}
                  />
                {errors.email && (<small className='text-warning'>{errors.email.message}</small>)}
              </label>
            </div>
            <div className="form-group">
              <label htmlFor='inquiry'>
                Your inquiry
                <textarea 
                  type='text'
                  id='inquiry' 
                  name='inquiry' 
                  value={inquiry} 
                  {...register('inquiry', { required: "Please enter your inquiry"})} 
                  onChange={(e) => setInquiry(e.target.value)}
                />
                {errors.inquiry && (<small className='text-warning'>{errors.inquiry.message}</small>)}
              </label>
            </div>
            <button type="submit">Send</button>
        </FormStyle>
    </div>
  )
}
