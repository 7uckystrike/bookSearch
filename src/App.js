import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


import Join from "./routes/Join"
import Search from "./routes/Search"
import Login from "./routes/LogIn"
import Home from "./routes/Home"

function App() {
  return(
    <Router>
      <>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Search" element={<Search/>}></Route>
          <Route path="/Join" element={<Join/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </>
    </Router>

  )
}

export default App;