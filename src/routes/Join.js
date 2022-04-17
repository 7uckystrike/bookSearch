import Header from "../components/Header";
import "../style/Members.css"

const Join = () => {
  return(
    <>
      <Header />
      <div className={'container'}>
      <form className={'form'}>
        <h1 className={'title'}>책이랑 친해지기</h1>
        <div className={'join'}>
          <input type="name" placeholder="닉네임" required className={'name'} />
          <input type="email" placeholder="이메일 주소" required className={'email'} />
          <input type="password" placeholder="비밀번호 입력" required className={'password'} />
          <input type="submit" value="가입하기" className={'submit'} />
        </div>
      </form>
    </div>
    </>
  )
}

export default Join;