import { Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/home">Home</Link></li>

      <Routes>
        <Route path="/*"  exact={true} element={<Login/>}></Route> 
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;