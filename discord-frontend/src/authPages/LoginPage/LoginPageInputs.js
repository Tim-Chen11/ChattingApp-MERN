import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
  return (
    <>
    <InputWithLabel
      value={mail}
      setValue={setMail}
      label="E-mail"
      type="text"
      placeholder="Enter email address"
    />
    <InputWithLabel
      value={password}
      setValue={setPassword}
      label="Password"
      type="Password"
      placeholder="Enter password"
    />
    </>
  );
};

export default LoginPageInputs;
