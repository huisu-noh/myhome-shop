import { Outlet } from 'react-router-dom';

export default function Event() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet />
    </div>
  );
}

export const Service = () => {
  return <div>첫 주문시 양배추즙 서비스</div>;
};

export const Cupon = () => {
  return <div>생일기념 쿠폰 받기</div>;
};
