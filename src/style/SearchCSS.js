import styled from "@emotion/styled"

const SearchInputDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  input {
    border: 0;
    border-bottom: 2px solid #000;
    width: 300px;
    padding-left: 10px;
    padding-bottom: 10px;
    outline: none;
    margin-bottom: 60px;
  }
`

const SearchBoxDiv = styled.div `
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-gap: 30px;
  margin-left: 5px;

  li {
    list-style-type: none;
    border: 1px solid #dddddd;
    padding: 0 10px;
  }
`

export { SearchInputDiv, SearchBoxDiv }