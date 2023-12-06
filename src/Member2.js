import React from 'react';

class Member2 extends React.Component {
  render() {
    const { name, age, email, nickname, children } = this.props;
    return (
      <>
        <div>저는 {name}입니다.</div>
        <div>{age}입니다.</div>
        <div>{email}입니다.</div>
        <div>{nickname}</div>
        <div>{children}입니다.</div>
      </>
    );
  }
}
export default Member2;

// 1
