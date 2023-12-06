const onClick = (e) => {
  const { isTrusted, target, bubbles, currentTarget } = e;
  console.log('클릭 이벤트 : ', isTrusted, target, bubbles);
  e.stopPropagation();
};

const onClick2 = (e) => {
  const { isTrusted, target, bubbles, currentTarget } = e;
  console.log('클릭 이벤트2 : ', isTrusted, target, bubbles);
};

export default function Event4() {
  return (
    <>
      <div onClick={onClick2}>
        <button onClick={onClick}>클릭4</button>
      </div>
    </>
  );
}
