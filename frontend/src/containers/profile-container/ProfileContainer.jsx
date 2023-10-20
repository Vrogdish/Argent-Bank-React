import React, { useState } from "react";
import UserHeader from "../user-header/UserHeader";
import UserEditor from "../user-editor/UserEditor";
import UserAccount from "../user-account/UserAccount";
import { useSelector } from "react-redux";
import ErrorPage from "../../pages/ErrorPage";

export default function ProfileContainer() {
  const [editorMode, setEditorMode] = useState(false);

  const auth = useSelector((state) => state.authState.isLogged);

  if (auth) {
    return (
      <>
        {!editorMode ? (
          <UserHeader openEditor={() => setEditorMode(true)} />
        ) : (
          <UserEditor closeEditor={() => setEditorMode(false)} />
        )}

        <UserAccount />
      </>
    );
  } else {
    return (
      <ErrorPage/>
    )
    
  }
}
