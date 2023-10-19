import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../containers/header/Header";
import Footer from "../containers/footer/Footer";

export default function Root() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
