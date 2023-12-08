import { Link, useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  const move = () => {
    navigate('/counter');
  };
  return (
    <>
      <div>
        <h1>Main</h1>
        <a href="/intro">소개</a>
        <br></br>
        <Link to="/intro">소개</Link>
        <br />
        <h2>라우터변수 방식</h2>
        <Link to="/profile/홍길동">홍길동</Link>
        <Link to="/profile/이순신">이순신</Link>
        <h2>파라미터 방식</h2>
        <Link to="/profile2?a=1&b=2&c=3">프로필2</Link>
        <br />
        <button onClick={move}>페이지이동</button>
        <br />
        {/* <Link to="redux1">리덕스1</Link>
        <Link to="redux2">리덕스2</Link>
        <Link to="redux3">리덕스3</Link> */}
      </div>
    </>
  );
};
export default Main;
