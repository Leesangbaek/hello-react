import ContextConsumer from './ContextConsumer';
import Context1 from './Context1';

const AppContext = () => {
  return (
    <>
      <ContextConsumer />

      <Context1.Provider value={{ name: '이순신' }}>
        <ContextConsumer />
      </Context1.Provider>
    </>
  );
};

export default AppContext;
