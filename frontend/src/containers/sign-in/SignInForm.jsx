import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { auth } from "../../api/auth";
import { authState, tokenState } from "../../store/authSlice";
import { getProfil } from "../../api/getProfil";
import { loadProfilState } from "../../store/ProfilSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import "./style.css"

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // init redux dispatch and router() for redirect
  const dispatch = useDispatch();
  //   const router = useRouter(); <-- dont work ?
  const navigate = useNavigate()

  const onSubmit = async (inputs) => {
    const userData = { email: inputs.email, password: inputs.password };

    // save email and password if remember checked
    const rememberMe = (tokenToSave) => {
      if (inputs.remember === true) {
        localStorage.setItem("token", tokenToSave);
      } else {
        localStorage.clear();
      }
    };

    // connect
    const login = await auth(userData);
    if (login?.status === 200) {
      dispatch(tokenState(login.body.token));
      dispatch(authState(true));
      rememberMe(login.body.token);
      const profil = await getProfil(login.body.token);

      if (profil?.status === 200) {
        dispatch(loadProfilState(profil.body));

        // router.push(`/user`);
        navigate("/user")
      }
    } else {
      alert(login?.message);
    }
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            className=""
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            className=""
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember"
            {...register("remember")}
            
            defaultChecked
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <input type="submit" value={"Sign in"} className="sign-in-button" />
      </form>
      <div className="alert">
        <ErrorMessage
          name="email"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
          
        />
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
    </section>
  );
}
