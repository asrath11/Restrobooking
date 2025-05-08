import React from 'react';
import NavBar from './NavBarSection/NavBar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default Layout;
