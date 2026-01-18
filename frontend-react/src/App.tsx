import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Reg from './pages/RegPage/Reg.tsx';
import Login from './pages/LoginPage/Login.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/reg" replace />} />
      </Routes>
    </Router>
  );
}

export default App;