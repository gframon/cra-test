import React from "react";
import LoginPage from "../pages/LoginPage";

export default function Login() {
  const handleSubmit = (data) =>
    console.log("this is the way!", data.username, data.password);

  return (
    <>
      <h2 style={{ justifyContent: "right" }}>
        My Sample about React Hook forms
      </h2>
      <LoginPage onSave={handleSubmit} username="ramon.gomez" />
    </>
  );
}
