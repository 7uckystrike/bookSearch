import "../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={'header_bar'}>
      <h1 className={'header_title'}>우리는 더 많은 책을 읽어야해</h1>
        <Link to ="/" className={'header_cate'}>메인</Link>
        <Link to ="/Search" className={'header_cate'}>검색</Link>
        <Link to ="/Burket" className={'header_cate'}>바구니</Link>
      </div>
    </div>
  )
}

export default Header