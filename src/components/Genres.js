import { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../api";
import { GenresBook } from "./Books";
import "../style/Genres.css"

const Genres = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("소설");

  const getBooks = useCallback(async() => {
    let params = {
      query : genres,
      size: "10",
    };
    if (genres === "소설") {
      params = {
        query: "소설", 
        sort: "accuracy", 
        size: "10"
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
      <div className={'genres_box'}>
        <button id="소설" onClick={handleGenres} className={'genres_button'}>소설</button>
        <button id="교양" onClick={handleGenres} className={'genres_button'}>교양</button>
        <button id="과학" onClick={handleGenres} className={'genres_button'}>과학</button>
        <button id="에세이" onClick={handleGenres} className={'genres_button'}>에세이</button>
      </div>
      <div className={'genres_books'}>
        {books.map((book, index) => (
          <GenresBook
            key={index}
            author={book.authors}
            title={book.title}
            image={book.thumbnail}
          />
            ))}
        </div>
  </div>
  )
}

export default Genres;





