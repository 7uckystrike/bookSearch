import BooksNew from "./components/BooksNew"
import Bestseller from "./components/Bestseller";
import Header from "./components/Header"
import Slide from "./components/Slide"

function App() {
  return(
    <>
    <Header />
    <Bestseller />
    <div>
      <Slide />
    <BooksNew />
    </div>

    </>

  )
}

export default App;
