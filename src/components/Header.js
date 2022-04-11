import Search from "../routes/Search"

function Header() {
  return (
    <div>
      <div>
        <h1>BOOK APP</h1>
        <from>
          <input type="button" value="회원가입"/>
          <input type="button" value="로그인"/>
          <Search />
        </from>
      </div>
    </div>
  )
}

export default Header