import styled from "@emotion/styled"


/* BooksNew, Bestseller, Books */
const TitleDiv = styled.div `
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start
  margin-left:20px;

  .new_title {
    margin-left: 25px;
    font-size: 25px; 
  }
`

const BooksDiv = styled.div `
  display: grid;
  grid-template-columns: repeat(10, minmax(100px, 1fr));
  grid-gap: 40px;
  width: 80%;
  margin-left:20px;

  img {
    border: 1px solid rgb(90, 89, 89);
  }
`

const BooksBoxDiv = styled.div `
  .books_title {
    font-weight: bold;
  }

  .books_author {
    font-size: 13px;
  }
`


export { TitleDiv, BooksDiv, BooksBoxDiv }