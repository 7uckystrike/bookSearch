import { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../api";
import { GenresTitle, GenresDiv, GenresBox, BooksBoxDiv } from "../style/GenresCSS"

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
    <GenresTitle>
      <h1 className="genres_title">장르별 추천</h1>
      <GenresBox>
        <button id="소설" onClick={handleGenres} className="genres_button">소설</button>
        <button id="교양" onClick={handleGenres} className="genres_button">교양</button>
        <button id="과학" onClick={handleGenres} className="genres_button">과학</button>
        <button id="에세이" onClick={handleGenres} className="genres_button">에세이</button>
      </GenresBox>
      <GenresDiv>
        {books.map((book, index) => (
          <GenresBook
            key={index}
            author={book.authors}
            title={book.title}
            image={book.thumbnail}
          />
        ))}
        </GenresDiv>
    </GenresTitle>
  )
}

export const GenresBook = ({ title, image, author }) => {
  return (
    <BooksBoxDiv>
      <img src={image} alt={title}/>
      <p className="books_title">{title}</p>
      <p className="books_author">{author}</p>
    </BooksBoxDiv>
  )}

  
export default Genres;





