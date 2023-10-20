import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../../api/updateProfil";
import { updateUsernameState } from "../../store/ProfilSlice";
import { ErrorMessage } from "@hookform/error-message";
import "./style.css"

export default function UserEditor({closeEditor}) {
  const userProfil = useSelector((state) => state.profilState);
  const token = useSelector((state) => state.authState.token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (inputs) => {
    const newUsername = { userName: inputs.username };
    const updatedUsername = await updateProfil(newUsername, token);

    if (updatedUsername?.status === 200) {
      alert(updatedUsername.message);
      dispatch(updateUsernameState(updatedUsername.body.userName));
      closeEditor()
    }
  };

  return (
    <div className="editor">
      <h1 className="">Edit user info</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="editor-input-wrapper">
          <label htmlFor="username" className="">
            User name:
          </label>
          <input
            type="text"
            id="username"
            defaultValue={userProfil.userName}
            {...register("username", {
              required: "Type your new username",
            })}
          />
                <div className="alert">
        <ErrorMessage
          name="username"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
        </div>
        <div className="editor-input-wrapper">
          <label htmlFor="firstname" className="">
            First name:
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            disabled
            defaultValue={userProfil.firstName}
          />
        </div>
        <div className="editor-input-wrapper">
          <label htmlFor="lastname" className="">
            Last name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            disabled
            defaultValue={userProfil.lastName}
          />
        </div>
        <div className="editor-confirm">
          <button type="submit" className="editor-button">
            Save
          </button>
          <button type="button" className="editor-button" onClick={closeEditor}>
            Cancel
          </button>
        </div>
      </form>

    </div>
  );
}
