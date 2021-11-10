import Hello from './components/Hello';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div>
        <Link to='something'>Go To Hello</Link>
        <br />
        <Link to='/'>Go Home</Link>
      </div>

      {/* SWITCH has been replaced with ROUTES */}
      <Routes>
        <Route exact path='/something' element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
