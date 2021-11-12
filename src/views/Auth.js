import React, { useState } from 'react';
import Register from '../components/Register';
import LogIn from '../components/LogIn';

// localhost:5000/auth
// in case u need reference https://www.vagaro.com/Login.aspx?enc=OcSkgjY9W03cadswvmCRyTkpx5L/QVAs0PbyWAiM8aoOAWTpsNV4YlKvJadiR+hxiVJtWEXUB3UmfoLRCfE9eUeQ6MHAGyCumJK4cHcULMrIHl+h2thA1iloh5Rf3zbC

export default function Auth() {
  /// you can delete all of this below. I just made this as a little example for out meeting.
  const [wantsRegister, setWantsRegister] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setWantsRegister(!wantsRegister);
        }}
      >
        {wantsRegister ? 'Resigter' : 'Login'}
      </button>

      <div>{wantsRegister ? <Register /> : <LogIn />}</div>
    </div>
  );
}
