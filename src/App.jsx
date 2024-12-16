import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Register from './components/Register';
import Tweet from './components/Tweet';

const App = () => (
  // <div>
  //   <h1>Xクローンアプリ</h1>
  //   <Register />
  // </div>
  <Router>
  <Routes>
    <Route path="/api/v1/users" element={<Register />} />
    <Route path="/api/v1/tweet" element={<Tweet />} />
  </Routes>
</Router>
);

export default App;
