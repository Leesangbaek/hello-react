import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Intro from './Intro';
import Profile from './Profile';
import Profile2 from './Profile2';
import Layout from './Layout';
import Counter from './Counter';
import NotFound from './NotFound';
import Login from './Login';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default AppRouter;
