import { Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/home">Home</Link></li>

      <Routes>
        <Route path="/" component={<Login />}></Route> 
        <Route path="/home" component={<Home />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
