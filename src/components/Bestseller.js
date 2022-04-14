import { useEffect, useState } from "react";
import Books from "./Books"
import { bookSearch } from "../api";
import "../style/BooksList.css"

function Bestseller() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "민음사",
      sort: "recency",
      size: "10",
      target: "",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };

  return (
    <>
      <div className='list_container'>
        <h1 className='list_title'>베스트셀러</h1>
      </div>
      <div className='list_books'>
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