import HomePage from '../Pages/HomePage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
