import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;