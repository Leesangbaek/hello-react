import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

const App = () => {
  let numbers = ['1', '2', '3', '4'];
  let Greets = [];
  for (let i = 0; i < numbers.length; i++) {
    Greets[i] = (
      <li key={i}>
        <Greet />
      </li>
    );

    let Greets2 = numbers.map((v, i) => {
      console.log(v, i);
      return (
        <li key={i}>
          <Greet />
        </li>
      );
    });
    console.log(Greets2);
  }
  return <>{Greets}</>;
};

export default App;
