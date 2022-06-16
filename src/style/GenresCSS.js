import styled from "@emotion/styled"

const GenresTitle = styled.div `
  height: 100%;
  margin-top: 50px;
  margin-left:20px;

  .genres_title {
    margin-left: 20x;
    font-size: 25px; 
  }
`

const GenresBox = styled.div `
  display: flex;
  justify-content: flex-start;

  .genres_button {
    border : none;
    border-radius: 3px;
    margin-right: 10px;
    padding: 9px 13px;
    background-color: #06AD3D;
    color: #fff;
  } 
  
`

const GenresDiv = styled.div `
  display: grid;
  grid-template-columns: repeat(10, minmax(100px, 1fr));
  grid-gap: 40px;
  width: 80%;
  margin-top: 20px;

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




export { GenresTitle, GenresDiv, GenresBox, BooksBoxDiv }

