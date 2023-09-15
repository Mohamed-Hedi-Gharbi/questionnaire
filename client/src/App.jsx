import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup, Home, NoMuch } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NoMuch />} />
      </Routes>
    </Router>
  );
}

export default App;
