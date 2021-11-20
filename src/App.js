import About from './views/About';
import Home from './views/Home';
import Login from './components/LogIn';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { Link, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';

function App() {
  return (
    <div className='App'>
      {/* SWITCH has been replaced with ROUTES */}
      {/* COMPONENT replaced with ELEMENT */}
      {/* https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?rq=1 */}
      <Routes>
        <Route
          exact
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/auth' element={<Auth />} />
        <Route exact path='/' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
