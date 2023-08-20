import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className='form'>
            <form className='basic' onSubmit={handleSubmit} noValidate>
              <div>
                <label >Email Address</label>
                <div >
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className='error' >{errors.email}</p>
                  )}
                </div>
              </div>
              <div >
                <label >Password</label>
                <div>
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className='error' >{errors.password}</p>
                )}
              </div>
              <button type="submit" >Login</button>
            </form>
 </div>
  );
};

export default Form;
