import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Join from "./Routes/Join"
import Search from "./Routes/Search"
import Login from "./Routes/LogIn"
import Home from "./Routes/Home"

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;




