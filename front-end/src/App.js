import { Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import axios from 'axios';

function App() { 
	// 서버에서 받은 데이터를 console로 찍어서 확인한다.
  // useEffect(() => {
  //   axios.get('/api/test')
  //     .then(res => console.log(res))
  //     .catch()
  // })
  
  return (
    <div>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/home">Home</Link></li>

      <Routes>
        <Route path="/*"  exact={true} element={<Login/>}></Route> 
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  )
}
export default App;