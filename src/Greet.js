import Member2 from './Member2';

const Greet = () => {
  const name = '최길동';
  return (
    <>
      <div>
        안녕하세요{' '}
        <Member2
          name={name}
          age={30}
          email="hong@gmail.com"
          nickname="궁따리"
          tel="02-1234-1234"
        >
          회원명
        </Member2>
      </div>
    </>
  );
};
export default Greet;
