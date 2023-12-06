const onClick = (e) => {
  const { isTrusted, target, bubbles } = e;
  console.log('클릭 이벤트 : ', isTrusted, target, bubbles);
};

export default function Event2() {
  return (
    <>
      <button onClick={onClick}>클릭3</button>
    </>
  );
}
