import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


import Join from "./routes/Join"
import Search from "./routes/Search"
import Login from "./routes/LogIn"
import Home from "./routes/Home"

import Header from "./components/Header"
import Bestseller from "./components/Bestseller";
import Slide from "./components/Slide"
import BooksNew from "./components/BooksNew"
import Genres from "./components/Genres";
import Footer from "./components/Footer";

function App() {
  return(
    <Router>
      <>
        <Header/>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Search" element={<Search/>}></Route>
          <Route path="/Join" element={<Join/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        <Slide />
        <Bestseller />
        <BooksNew />
        <Genres />
        <Footer />
      </>
    </Router>

  )
}

export default App;