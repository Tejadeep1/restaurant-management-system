import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import ManagerMainPage from './components/ManagerMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/managermainpage" element={<ManagerMainPage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;