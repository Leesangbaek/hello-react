// function Member(props) {} 같다
import PropTypes from 'prop-types';

const Member = (props) => {
  const { name, age, email, nickname, children } = props;
  return (
    <>
      <div>저는 {name}입니다.</div>
      <div>{age}입니다.</div>
      <div>{email}입니다.</div>
      <div>{nickname}</div>
      <div>{children}입니다.</div>
    </>
  );
};

Member.defaultProps = {
  nickname: '별명',
};

Member.prototype = {
  age: PropTypes.number,
  tel: PropTypes.string.isRequired,
};

export default Member;
