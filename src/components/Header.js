import "../style/Header.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={'header_bar'}>
        <Link to ="/">
          <h1 className={'header_title'}>BOOK APP</h1>
        </Link>
        <div>
          <Link to ="/Search">
            <FaSearch className={'search_icon'}/>
            </Link>
          <from>
            <Link to="/Join">
              <input type="button" value="회원가입" className={'header_join'}/>
            </Link>
            <Link to="/Login">
              <input type="button" value="로그인" className={'header_login'}/>
            </Link>
          </from>
        </div>
      </div>
    </div>
  )
}

export default Header