import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Search from "./routes/Search"
import Home from "./routes/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Search" element={<Search />}></Route>
      </Routes>
    </Router>
  )
}

export default App;




