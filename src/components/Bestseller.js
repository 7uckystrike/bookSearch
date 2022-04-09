import { useEffect, useState } from "react";
import Books from "./Books"
import { bookSearch } from "../api";


function Bestseller() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "민음사",
      sort: "",
      size: "8",
      target: "",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };
  return (
    <>
      <div>
        <h2>베스트셀러</h2>
      </div>
      <div>
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