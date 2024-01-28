import { Fragment } from "react";
import Header from "../components/Nav/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Nav/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
