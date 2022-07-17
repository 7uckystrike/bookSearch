import styled from "@emotion/styled"

const ItemLi = styled.li `
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  
  dl > dt > img {
    margin-bottom: 20px;
  }

  dd {
    display: block;
    text-align: center;
    margin: auto;
  }
`

const ItemDiv = styled.div `
  .item_title {
    color: #f19995;
    font-size: 15px;
    margin-right: 35px;
    margin: auto;
  }

  .item_link {
    background-color: #bcdce4;
    color: #000;
    font-size: 12px; 
    width: 50px;
    margin-top: 20px;
  }

  button {
    width: 30px;
    background:  transparent;
    border: none;
    margin-top:10px;
  }
`

export { ItemDiv, ItemLi }