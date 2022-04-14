import { useEffect, useState } from "react";
import Books from "./Books"
import { bookSearch } from "../api";
import "../style/Bestseller.css"

function Bestseller() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "민음사",
      sort: "recency",
      size: "9",
      target: "",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };

  return (
    <>
      <div className='best_container'>
        <h1>베스트셀러</h1>
      </div>
      <div className='best_books'>
        {books.map((book, index) => (
          <Books
            key={index}
            author={book.authors}
            description={book.contents}
            title={book.title}
            image={book.thumbnail}
          />
        ))}
      </div>
    </>
  );

}

export default Bestseller