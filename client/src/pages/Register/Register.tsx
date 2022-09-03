import React, { useContext, useEffect, useState, MouseEvent } from "react";
import { appContext } from "../../App";
import { InputField } from "../../components/InputFIeld/InputField";
import { changeOpasity } from "../../helpers/changeOpasity";
import { isValidEmail, isValidName } from "../../helpers/validators";
import { TFormState } from "../../types/defaultObjType";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
import { postRegister } from './../../queries/authQueries';

export const Register = () => {
  const { color, backgroundColor } = useContext(appContext);

  const [formData, setFormData] = useState<TFormState>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  function isValidPhone(value: string): boolean {
    return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(
      value
    );
  }

  function isValidPassword(value: string): boolean {
    return value.length > 7;
  }

  function isValidRepeatPassword(value: string): boolean {
    return formData.password === value;
  }

  useEffect(() => {
    setIsFormValid(
      isValidName(formData.firstName) &&
        isValidName(formData.secondName) &&
        isValidPhone(formData.phone) &&
        isValidEmail(formData.email) &&
        isValidPassword(formData.password) &&
        isValidRepeatPassword(formData.repeatPassword)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  let navigate = useNavigate();

  const handleForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const toServerData = {
      name: formData.firstName,
      surname: formData.secondName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    postRegister(toServerData)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch((err) => {
        console.log(err);
      })

    console.log(toServerData);
    setFormData({
      firstName: "",
      secondName: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
    });
    navigate("/");
  };

  // console.log(isFormValid);

  return (
    <div className="register-container">
      <div className="register-content">
        <nav className="login-nav">
          <Link style={{ color }} to={"/"}>
            back to products
          </Link>
          <Link style={{ color }} to={"/login"}>
            or log in
          </Link>
        </nav>
        <header className="register-header">
          <h1 style={{ color }}>Sign up</h1>
          <Logo />
        </header>
        <form>
          <InputField
            fieldName="first name"
            validFunc={isValidName}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="second name"
            validFunc={isValidName}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="phone"
            validFunc={isValidPhone}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="email"
            validFunc={isValidEmail}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="password"
            validFunc={isValidPassword}
            formData={formData}
            setFormData={setFormData}
          />
          <InputField
            fieldName="repeat password"
            validFunc={isValidRepeatPassword}
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
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};
