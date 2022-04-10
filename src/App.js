import React from "react";
import Search from "./routes/Search"
import Header from "./components/Header"
import Book from "./components/Books"
import Bestseller from "./components/Bestseller";

const App = () => {
  return (
    <>
      <Header />
      <Book />
      <Bestseller />
      <Search />
    </>

  );
}

export default App;
