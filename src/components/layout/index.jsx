import { Fragment } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

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
