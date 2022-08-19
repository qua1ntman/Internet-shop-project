import React, { useContext, useRef, useState } from "react";
import { appContext } from "../../App";
import { TFormState } from "../../intarfaces/defaultType";

export const Register = () => {
  // Ссылки на инпуты
  const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const secondNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const phoneRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const repeatPasswordRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  const { color, backgroundColor } = useContext(appContext) as {
    color: string;
    backgroundColor: string;
  };

  // const [isFormValid, setIsFormValid] = useState<Boolean>(false);

  // function isNormEmail(): boolean {
  //   return /\S+@\S+\.\S+/.test(formData.email)
  // }

  const [formData, setFormData] = useState<TFormState>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  // const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target: EventTarget & HTMLInputElement = event.currentTarget;
    const value: string = target.value.trim();
    const name: string = target.name;
    // formValidFunc()
    setFormData((formDataObj: TFormState): TFormState => {
      formDataObj[name] = value;
      return formDataObj;
    });
    console.log(formData);
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1 style={{ color }}>Sign up</h1>
        <form action="">
          <div className="input-container">
            <input
              name="firstName"
              id="first_name"
              ref={firstNameRef}
              type="text"
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="first_name">FIRST NAME *</label>
          </div>
          <div className="input-container">
            <input
              name="secondName"
              id="second_name"
              ref={secondNameRef}
              type="text"
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="second_name">SECOND NAME *</label>
          </div>
          <div className="input-container">
            <input
              name="email"
              id="register_email"
              ref={emailRef}
              type="text"
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="register_email">EMAIL *</label>
          </div>
          <div className="input-container">
            <input
              name="phone"
              id="phone"
              type="text"
              ref={phoneRef}
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="phone">PHONE *</label>
          </div>
          <div className="input-container">
            <input
              name="password"
              id="register_password"
              ref={passwordRef}
              type="text"
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="register_password">PASSWORD *</label>
          </div>
          <div className="input-container">
            <input
              name="repeatPassword"
              id="register_password_repeat"
              ref={repeatPasswordRef}
              type="text"
              placeholder=" "
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <label htmlFor="register_password_repeat">REPEAT PASSWORD *</label>
          </div>
          <button
            className="default-btn"
            style={{ color: backgroundColor, backgroundColor: color }}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};
