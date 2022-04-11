import { useEffect, useState } from "react";
import Books from "./Books";
import { bookSearch } from "../api";

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
    <div>
      <h2>이달의 작가</h2>
      <>
      {books.map((book, index) => (
            <Books 
            key={index}
            author={book.authors}
            title={book.title}
            image={book.thumbnail}
            />
      ))}
      </>
    </div>
  )}

  export default BooksNew