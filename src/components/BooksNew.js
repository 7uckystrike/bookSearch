import { useEffect, useState } from "react";
import Books from "./Books";
import { bookSearch } from "../api";
import "../style/BooksList.css"

const BooksNew = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "박완서",
      sort: "",
      size: "10",
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
        <h1 className='list_title'>영원한 현역작가, 박완서</h1>
      </div>
      <div className={'list_books'}>
        {books.map((book, index) => (
              <Books 
              key={index}
              title={book.title}
              image={book.thumbnail}
              />
        ))}
      </div>
    </>
  )
}

export default BooksNew;