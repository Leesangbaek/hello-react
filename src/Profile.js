import { useParams, Navigate } from 'react-router-dom';
const Profile = () => {
  const params = useParams();
  // 로그인여부와 로그인이 아닌경우 로그인페이지로 이동
  const isLogin = false; //로그인여부(false로 막아둔다)
  if (!isLogin) return <Navigate to="/login" replace={true} />;
  return (
    <>
      <div>프로필</div>
      <div>params:{params.name}</div>
    </>
  );
};
export default Profile;
