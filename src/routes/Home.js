import Bestseller from "../components/Bestseller";
import Slide from "../components/Slide"
import BooksNew from "../components/BooksNew"
import Genres from "../components/Genres";
import Footer from "../components/Footer";

function Home() {
  return(
    <>
      <Slide />
      <Bestseller />
      <BooksNew />
      <Genres />
      <Footer />
    </>

  )
}

export default Home;