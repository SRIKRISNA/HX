// import logo from './logo.svg';
import './App.css';
import Login from './components/forms/login';
import Register from './components/forms/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import PostForm from './components/PostForm/PostForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/postform' element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
