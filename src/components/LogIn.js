import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

const initialFormValues = {
  username: '',
  password: '',
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await props.loginUser(formValues);
    // if (props.isInstructor === undefined) {
    //   alert('error logging in');
    // } else {
    window.location.href = '/home';
    // }
  };

  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      <div>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-gray-700'
        >
          Username
        </label>
        <div className='mt-1'>
          <input
            id='username'
            name='username'
            onChange={onChange}
            type='username'
            autoComplete='username'
            required
            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <div className='mt-1'>
          <input
            id='password'
            name='password'
            onChange={onChange}
            type='password'
            autoComplete='current-password'
            required
            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { isInstructor: state.user.isInstructor };
};

export default connect(mapStateToProps, { loginUser })(Login);
