import { Link } from "react-router-dom";
import {HeaderDiv, } from "../style/HeaderCSS"

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <h1 className="header_title">우리는 더 많은 책을 읽어야해</h1>
        <Link to ="/" className="header_cate">메인</Link>
        <Link to ="/Search" className="header_cate">검색</Link>
        <Link to ="/Memo" className="header_cate">연습</Link>
      </HeaderDiv>
    </>
  )
}

export default Header