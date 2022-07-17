import styled from "@emotion/styled"


/* 메모 작성 부분 */
const AddFormDiv = styled.div `
  margin-left: 20px;
  text-align: center;
  margin-top: 40px;

  .time {
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
  }

  .title {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
  }

  .area {
    width: 300px;
    height: 50px;
    border: 2px solid #000;
    outline: none;
    margin-right: 20px;
    margin-bottom: 40px;
    padding: 5px;
    resize: none;
  }

  .form {
    display: flex;
    justify-content: center;
  }
  

  .button {
    background-color: #bcdce4;
    border : none;
    padding: 9px 13px;
    color: #000;
    height: 65px;
    cursor: pointer;
  }
`

/* 메모 출력 부분 */
const MemoDiv = styled.div `
  width: 500px;
  margin: auto;

  li {
    border-bottom: 1px solid #000;
    padding: 10px 5px;
    margin: auto;
  }
`

export { AddFormDiv, MemoDiv }