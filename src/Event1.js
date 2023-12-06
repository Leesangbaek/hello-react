const Event1 = () => {
  document.getElementById('root').addEventListener('click', (event) => {
    const { isTrusted, target, bubbles } = event;
    console.log(isTrusted, target, bubbles);
  });
  return (
    <>
      <div>클릭</div>
    </>
  );
};
export default Event1;
