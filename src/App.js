import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/article" element={<ArticleDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
