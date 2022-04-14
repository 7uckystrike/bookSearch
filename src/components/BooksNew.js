import { useEffect, useState } from "react";
import Books from "./Books";
import { bookSearch } from "../api";
import "../style/BooksList.css"

function BooksNew() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "정세랑",
      sort: "",
      size: "5",
      target: "title",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };



  return (
    <>
      <div className={'list_container'}>
        <h1 className='list_title'>이달의 작가, 정세랑</h1>
      </div>
      <div className={'list_books'}>
        {books.map((book, index) => (
              <Books 
              key={index}
              author={book.authors}
              title={book.title}
              image={book.thumbnail}
              />
        ))}
        </div>
    </>
  )
}

export default BooksNew