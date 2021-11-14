import About from './views/About';
import Home from './views/Home';
import Login from './components/LogIn';
import Register from './components/Register';
import { Link, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';

function App() {
  return (
    <div className='App'>
      <h1>yo</h1>

      {/* SWITCH has been replaced with ROUTES */}
      {/* COMPONENT replaced with ELEMENT */}
      {/* https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?rq=1 */}
      <Routes>   
        <Route exact path='/home' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route exact path='/' element={<About />} />
        
        {/* this is the page shown after they are logged in */}
      </Routes>
    </div>
  );
}

export default App;
