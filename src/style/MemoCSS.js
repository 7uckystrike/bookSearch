import styled from "@emotion/styled"


/* 메모 작성 부분 */
const AddFormDiv = styled.div `
  margin-left: 20px;
  text-align: center;
  margin-top: 70px;

  input {
    width:400px;
    border: none;
    border-bottom: 3px solid #000;
    outline: none;
    margin-right: 20px;
    margin-bottom: 40px;
    padding: 5px;
  }

  button {
    background-color: #06AD3D;
    border : none;
    padding: 9px 13px;
    color: #fff;
    cursor: pointer;
    padding : 
  }

  p {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
  }

  span {
    font-style: italic;
    font-weight: bold;
    font-size: 13px;
  }
`

/* 메모 출력 부분 */
const MemoDiv = styled.div `
  width: 480px;
  height: 30px;
  padding-left: 20px;
  padding-top: 15px;
  border: 1px solid #000;
  margin: auto;
  margin-bottom: 20px;
`

export { AddFormDiv, MemoDiv }