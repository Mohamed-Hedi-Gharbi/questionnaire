import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup, Home, NoMuch, PrivateRoutes, Quiz } from './components';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/quiz/:quizId' element={<Quiz />} />
        </Route>

        <Route path='/' element = {<Navigate to="/home" />} />
        <Route path='/quiz/' element={<Navigate to="/home" />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NoMuch />} />
      </Routes>
    </Router>
  );
}

export default App;
