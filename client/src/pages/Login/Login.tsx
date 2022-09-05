import React, { useEffect, useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputFIeld/InputField";
import { Logo } from "../../components/Logo/Logo";
import { changeOpasity } from "../../helpers/changeOpasity";
import { isValidEmail } from "../../helpers/validators";
import { postLogin } from "../../queries/authQueries";
import { TFormState } from "../../types/defaultObjType";
import "./Login.scss";
import { storageStateUpdator } from './../../helpers/storageStateUpdator';
import jwt_decode from 'jwt-decode';
import { useApp } from "../../contexts/AppContext";

export const Login = () => {
  
  const { 
    color, 
    backgroundColor, 
    setToken, 
    setDecodedToken
  } = useApp();

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
        storageStateUpdator(setToken, res.data.token, 'token')
        setDecodedToken(jwt_decode(res.data.token))
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
