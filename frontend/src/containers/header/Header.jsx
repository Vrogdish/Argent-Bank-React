import React from "react";
import { Provider } from "react-redux";
import { mainStore } from "../../store/store";
import { Link } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";
import Navbar from "../../components/navbar/Navbar";

export default function Header() {
  return (
    <header>
      <Provider store={mainStore}>
        <nav className="main-nav">
          <Link to={"/"} className="main-nav-logo">
            <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <Navbar/>
        </nav>
      </Provider>
    </header>
  );
}
