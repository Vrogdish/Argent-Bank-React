import React from "react";
import { Provider } from "react-redux";
import { mainStore } from "../store/store";
import "./user.css";
import ProfileContainer from "../containers/profile-container/ProfileContainer";

export default function User() {

  return (
    <main className="main bg-dark">
      <Provider store={mainStore}>
        <ProfileContainer/>
      </Provider>
    </main>
  );
}
