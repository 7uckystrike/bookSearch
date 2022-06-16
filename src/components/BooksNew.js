import { useEffect, useState } from "react";
import Books from "./Books";
import { bookSearch } from "../api";
import { TitleDiv, BooksDiv } from "../style/BooksListCSS"

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
      <TitleDiv>
        <h1 className="new_title">영원한 현역작가, 박완서</h1>
      </TitleDiv>
      <BooksDiv>
        {books.map((book, index) => (
              <Books 
              key={index}
              image={book.thumbnail}
              title={book.title}
              />
        ))}
      </BooksDiv>
      
    </>
  )
}

export default BooksNew;