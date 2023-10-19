import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, tokenState } from "../../store/authSlice";
import { Link, redirect } from "react-router-dom";
import { getProfil } from "../../api/getProfil";
import { loadProfilState, resetProfilState } from "../../store/ProfilSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Navbar() {
  const dispatch = useDispatch();

  // logout
  const handleclick = () => {
    window.confirm("Are you sure to diconnect ?");

    redirect("/");
    dispatch(authState(false));
    dispatch(tokenState(""));
    dispatch(resetProfilState());
    localStorage.clear();
  };

  // autoConnect if remember
  const autoConnect = async (token) => {
    dispatch(tokenState(token));

    const profil = await getProfil(token);
    if (profil?.status === 200) {
      dispatch(loadProfilState(profil?.body));
      dispatch(authState(true));
    }
  };

  const localStorageToken = localStorage.getItem("token");
  if (localStorageToken) {
    autoConnect(localStorageToken);
  }

  const auth = useSelector((state) => state.authState.isLogged);
  const userName = useSelector((state) => state.profilState.userName);

  return (
    <nav>
      {auth ? (
        <div className="main-nav-item">
          <Link to={`/user`}>
            <FontAwesomeIcon icon={faCircleUser} />
            <div>{userName}</div>
          </Link>
          <div onClick={() => handleclick()}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <div>Sign Out</div>
          </div>
        </div>
      ) : (
        <Link to={"/signIn"} className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} />
          <div>Sign In</div>
        </Link>
      )}
    </nav>
  );
}
