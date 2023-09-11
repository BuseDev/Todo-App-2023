import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Login } from './components/Login';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Todo" element={<TodoWrapper />} />
    </Routes>
  );
}

export default App;
