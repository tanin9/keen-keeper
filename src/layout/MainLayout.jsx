import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet, useRouteError } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import Errorpage from '../pages/errorpage/Errorpage';

const MainLayout = () => {
    const error = useRouteError();
    return (
      <div>
        <Navbar />
        <main>{error ? <Errorpage/>: <Outlet />}</main>

        <Footer />
      </div>
    );
};

export default MainLayout;