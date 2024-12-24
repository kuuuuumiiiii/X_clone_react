import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Registration from './components/Register';
import Tweets from './components/Tweets';

const App = () => (
  
  <Router>
  <Routes>
    <Route path="/api/v1/registration" element={<Registration />} />
    <Route path="/api/v1/tweets" element={<Tweets />} />
  </Routes>
</Router>
);

export default App;
