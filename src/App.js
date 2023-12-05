import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'React';
  const greet = true;
  const style = {
    backgroundColor: 'black',
    color: 'white',
  };
  return (
    <>
      <h1 style={style}>Hello {name}</h1>
      <h2 style={{ backgroundColor: 'yellow', color: 'red' }}>Hello {name}</h2>
    </>
  );
}

export default App;
