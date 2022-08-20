import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";
import { InputField } from "../../components/InputFIeld/InputField";
import { TFormState } from "../../types/defaultObjType";

export const Register = () => {


  const { color, backgroundColor } = useContext(appContext) as {
    color: string;
    backgroundColor: string;
  };

  const [formData, setFormData] = useState<TFormState>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  // const [isFormValid, setIsFormValid] = useState<Boolean>(false)

  function isNormName(value: string): boolean {
    return value.length>1 && value.length<50 && /^[a-zA-Zа-яА-Я]+$/
      .test(value)
  }

  function isNormPhone(value: string): boolean {
    return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/
      .test(value)
  }

  function isNormEmail(value: string): boolean {
    return /\S+@\S+\.\S+/.test(value);
  }

  function isNormPassword(value: string): boolean {
    return value.length>7
  }

  function isNormRepeatPassword(value: string): boolean {
    return formData.password === formData.repeatPassword
  }

  useEffect(() => {
    console.log(formData)
  }, [formData]);

  return (
    <div className="register-container">
      <div className="register-content">
        <h1 style={{ color }}>Sign up</h1>
        <form action="">
          <InputField fieldName="first name" validFunc={isNormName} formData={formData} setFormData={setFormData}/>
          <InputField fieldName="second name" validFunc={isNormName} formData={formData} setFormData={setFormData}/>
          <InputField fieldName="phone" validFunc={isNormPhone} formData={formData} setFormData={setFormData}/>
          <InputField fieldName="email" validFunc={isNormEmail} formData={formData} setFormData={setFormData}/>
          <InputField fieldName="password" validFunc={isNormPassword} formData={formData} setFormData={setFormData}/>
          <InputField
            fieldName="repeat password"
            validFunc={isNormRepeatPassword}
            formData={formData}
            setFormData={setFormData}
          />
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
