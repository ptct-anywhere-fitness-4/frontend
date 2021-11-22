import React, { useState } from 'react';

import Register from '../components/Register';
import LogIn from '../components/LogIn';

// localhost:5000/auth
// in case u need reference https://www.vagaro.com/Login.aspx?enc=OcSkgjY9W03cadswvmCRyTkpx5L/QVAs0PbyWAiM8aoOAWTpsNV4YlKvJadiR+hxiVJtWEXUB3UmfoLRCfE9eUeQ6MHAGyCumJK4cHcULMrIHl+h2thA1iloh5Rf3zbC

export default function Auth(props) {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className='flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
          {isNewUser ? 'Create' : 'Login to'} your account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
          {isNewUser ? <Register /> : <LogIn />}
          <div className='my-2 text-sm text-center'>
            <button
              className='font-medium text-indigo-600 hover:text-indigo-500'
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser ? 'Already have' : "Don't have"} an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
