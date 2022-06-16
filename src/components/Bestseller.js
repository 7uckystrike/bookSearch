import Books from "./Books"
import { useEffect, useState } from "react";
import { bookSearch } from "../api";
import { BooksDiv, TitleDiv } from "../style/BooksListCSS"

const Bestseller = () => {
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
      <TitleDiv>
        <h1 className = "new_title">오늘의 책</h1>
      </TitleDiv>
      <BooksDiv>
        {books.map((book, index) => (
          <Books
            key={index}
            author={book.authors}
            title={book.title}
            image={book.thumbnail}
          />
        ))}
      </BooksDiv>
    </>
  );
}

export default Bestseller