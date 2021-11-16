import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
