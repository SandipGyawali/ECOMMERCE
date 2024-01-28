import { Fragment } from "react";
import Header from "../components/Nav/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Nav/Footer";
import SideBar from "../components/SideBar/SideBar";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
