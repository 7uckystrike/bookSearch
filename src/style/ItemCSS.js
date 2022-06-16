import styled from "@emotion/styled"

const ItemLi = styled.li `
  display: flex;
  justfiy-content: center;
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
    color: #06AD3D;
    font-size: 15px;
    margin-right: 35px;
    margin: auto;
  }

  .item_link {
    background-color: #06AD3D;
    color: #fff;
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