import styled from "@emotion/styled"

const SearchInputDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  input {
    border: 0;
    border-bottom: 3px solid #000;
    width: 300px;
    padding-left: 10px;
    padding-bottom: 10px;
    outline: none;
    margin-bottom: 20px;
  }
`

const SearchBoxDiv = styled.div `
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  grid-gap: 40px;
  margin-right: 25px;

  li {
    list-style-type: none;
    border: 1px solid #dddddd;
  }
`

export { SearchInputDiv, SearchBoxDiv }