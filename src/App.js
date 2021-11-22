import About from './views/About';
import Home from './views/Home';
import PrivateRoute from './components/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import CreateClass from './views/CreateClass';

function App() {
  return (
    <div className='App'>
      {/* SWITCH has been replaced with ROUTES */}
      {/* COMPONENT replaced with ELEMENT */}
      {/* https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?rq=1 */}
      <Routes>
        <Route
          path='/create-class'
          element={
            <PrivateRoute>
              <CreateClass />
            </PrivateRoute>
          }
        />

        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* <Route path='/auth' element={<Auth />} /> */}
        <Route path='/' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
