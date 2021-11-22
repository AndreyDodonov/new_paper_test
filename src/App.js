import { Routes, Route, Link, Router } from 'react-router';

import './reset.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NewsMain from './pages/NewsMain/NewsMain';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// TODO add routing for other pages

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<NewsMain />} />
        <Route path="chartsPage" element={<ChartsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
