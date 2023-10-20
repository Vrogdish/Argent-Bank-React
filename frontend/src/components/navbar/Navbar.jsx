import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, tokenState } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // logout
  const handleclick = () => {
    const confirm = window.confirm("Are you sure to diconnect ?");
    if (confirm === true) {
      navigate("/");
      dispatch(authState(false));
      dispatch(tokenState(""));
      dispatch(resetProfilState());
      localStorage.clear();
    }
  };

  useEffect(() => {
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
  }, [dispatch]);



  const userName = useSelector((state) => state.profilState.userName);
  const auth = useSelector((state) => state.authState.isLogged);

  return (
    <>
      {auth ? (
        <div className="main-nav-item">
          <Link to={`/user`} className="main-nav-link">
            <FontAwesomeIcon icon={faCircleUser} />
            <span>{userName}</span>
          </Link>
          <div onClick={() => handleclick()} className="main-nav-link">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className="main-nav-item">
          <Link to={"/signIn"} className="main-nav-link">
            <FontAwesomeIcon icon={faCircleUser} />
            <span>Sign In</span>
          </Link>
        </div>
      )}
    </>
  );
}
