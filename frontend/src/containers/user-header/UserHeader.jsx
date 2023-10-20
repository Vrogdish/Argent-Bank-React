import React from "react";
import { useSelector } from "react-redux";
import "./style.css"

export default function UserHeader({openEditor}) {
    const userProfil = useSelector((state)=>state.profilState)

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userProfil.firstName} {userProfil.lastName}!
      </h1>
      <button className="edit-button" onClick={openEditor}>Edit Name</button>
    </div>
  );
}
