import Hello from './components/Hello';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div>
        <Link to='something'>
          <button class='text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400'>
            Go To Hello
          </button>
        </Link>
        <br />
        <Link to='/'>
          <button class='text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400'>
            Go To Home
          </button>
        </Link>
      </div>

      {/* SWITCH has been replaced with ROUTES */}
      {/* COMPONENT replaced with ELEMENT */}
      {/* https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?rq=1 */}
      <Routes>
        <Route exact path='/something' element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
