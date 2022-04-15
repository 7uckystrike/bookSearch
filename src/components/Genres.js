import { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../api";
import { GenresBook } from "./Books";
import "../style/Genres.css"

function Genres() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("인문학");

  const getBooks = useCallback(async() => {
    let params = {
      query : genres,
      size: "6",
    };
    if (genres === "어린이") {
      params = {
        query: "어린이", 
        sort: "latest", 
        size: "6"
      }
    }
    const {
      data : { documents },
    } = await bookSearch(params);
    setBooks(documents);
  }, [genres])
  const handleGenres = (e) => {
    const {
      target : { id },
    } = e;
    const Btns = document.querySelectorAll("button");
    Btns.forEach((Btn) => {
      Btn.classList.remove("clickedBtn");
    });
    setGenres(id);
    getBooks();
    e.target.classList.add("clickedBtn");
  };
  useEffect(() => {
    getBooks();
  }, [genres, getBooks]);

  return(
    <div className={'genres_container'}>
      <h1 className={'genres_title'}>장르별 추천</h1>
      <div>
        <button id="어린이" onClick={handleGenres} className={'genres_button'}>어린이</button>
        <button id="인문학" onClick={handleGenres} className={'genres_button'}>인문학</button>
        <button id="시" onClick={handleGenres} className={'genres_button'}>시</button>
        <button id="경제" onClick={handleGenres} className={'genres_button'}>경제</button>
      </div>
      <div className={'genres_books'}>
        {books.map((book, index) => (
          <GenresBook
            key={index}
            author={book.authors}
            description={book.contents}
            title={book.title}
            image={book.thumbnail}
          />
            ))}
        </div>
  </div>
  )
}

export default Genres;





