import React, { useContext, useEffect, useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../../App";
import { InputField } from "../../components/InputFIeld/InputField";
import { Logo } from "../../components/Logo/Logo";
import { changeOpasity } from "../../helpers/changeOpasity";
import { isValidEmail } from "../../helpers/validators";
import { postLogin } from "../../queries/authQueries";
import { TFormState } from "../../types/defaultObjType";
import "./Login.scss";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';

export const Login = () => {
  
  const { color, backgroundColor, setToken } = useContext(appContext);

  const [formData, setFormData] = useState<TFormState>({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(
      isValidEmail(formData.email) && formData.password.length > 0
    );
  }, [formData]);

  let navigate = useNavigate();

  const handleForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postLogin(formData)
      .then((res) => {
        localStorageStateUpdator(setToken, res.data.token, 'token')
      })
      .catch((err) => {
        console.log(err);
      })
    setFormData({
      email: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <nav className="login-nav">
          <Link style={{ color }} to={"/"}>
            back to products
          </Link>
          <Link style={{ color }} to={"/register"}>
            or sign up
          </Link>
        </nav>
        <header className="login-header">
          <h1 style={{ color }}>Login</h1>
          <Logo />
        </header>
        <form action="">
          <InputField
            fieldName="email"
            validFunc={isValidEmail}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="password"
            formData={formData}
            setFormData={setFormData}
          />
          <button
            className="default-btn"
            style={
              isFormValid
                ? {
                    color: backgroundColor,
                    backgroundColor: color,
                  }
                : {
                    color: changeOpasity(backgroundColor, 0.5),
                    backgroundColor: changeOpasity(color, 0.5),
                  }
            }
            disabled={!isFormValid}
            onClick={(e: MouseEvent<HTMLButtonElement>) => handleForm(e)}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
