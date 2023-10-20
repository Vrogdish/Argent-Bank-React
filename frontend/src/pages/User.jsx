import React, { useState } from "react";
import UserHeader from "../containers/user-header/UserHeader";
import UserAccount from "../containers/user-account/UserAccount";
import { Provider } from "react-redux";
import { mainStore } from "../store/store";
import UserEditor from "../containers/user-editor/UserEditor";
import "./user.css"

export default function User() {
  const [editorMode, setEditorMode] = useState(false);

  return (
    <main className="main bg-dark">
      <Provider store={mainStore}>
        <div className="">
          {!editorMode ? (
            <UserHeader openEditor={() => setEditorMode(true)} />
          ) : (
            <UserEditor closeEditor={() => setEditorMode(false)} />
          )}
  </div>
          <UserAccount />
      
      </Provider>
    </main>
  );
}
