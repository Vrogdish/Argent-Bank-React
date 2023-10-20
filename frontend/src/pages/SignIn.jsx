import React from "react";
import SignInForm from "../containers/sign-in/SignInForm";
import { Provider } from "react-redux";
import { mainStore } from "../store/store";


export default function SignIn() {
  return (
    <main className="main bg-dark">
      <Provider store={mainStore}>
        <SignInForm />
      </Provider>
    </main>
  );
}
