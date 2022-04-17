import "../style/Members.css"
import Header from "../components/Header"


const Login = () => {
  return(
    <>
      <Header />
      <div className={'container'}>
      <form className={'form'}>
        <h1 className={'title'}>입장하기</h1>
        <div className={'join'}>
          <input type="email" placeholder="이메일 주소" required className={'email'} />
          <input type="password" placeholder="비밀번호 입력" required className={'password'} />
          <input type="submit" value="로그인" className={'submit'} />
        </div>
      </form>
    </div>
    </>
  )
}

export default Login