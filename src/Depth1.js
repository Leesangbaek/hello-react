import Depth2 from './Depth2';

// props = 프로퍼티를 받는다
const Depth1 = () => {
  console.log('Depth1');
  return (
    <>
      <div>
        <h1>Depth1 :</h1>
        <Depth2 />
      </div>
    </>
  );
};

export default Depth1;
