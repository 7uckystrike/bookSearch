import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Join from "./routes/Join"
import Search from "./routes/Search"
import Login from "./routes/Login"
import Home from "./routes/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Search" element={<Search />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Join" element={<Join />}></Route>
      </Routes>
    </Router>
  )
}

export default App;




