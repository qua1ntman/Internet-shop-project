import React, { useRef } from "react";
import { WrongInputFill } from "../WrongInputFill/WrongInputFill";
import "./InputField.scss";
import { useState } from "react";
import { TFormState } from "../../types/defaultObjType";

export const InputField = ({
  fieldName,
  validFunc,
  formData,
  setFormData,
}: {
  fieldName: string;
  validFunc?: (value: string) => boolean;
  formData: TFormState;
  setFormData: React.Dispatch<React.SetStateAction<TFormState>>;
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  let fieldNameCamelCase: string = fieldName
    .toLocaleLowerCase()
    .split(" ")
    .map((item, i): string => {
      if (i > 0)
        return `${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`;
      return item;
    })
    .join("");

  let fieldId: string = fieldName.split(" ").join("_").toLocaleLowerCase();

  const isInputValueValid = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === "") {
      setIsInputEmpty(true);
      setIsInputInvalid(false);
    } else if (validFunc && !validFunc!(value)) {
      setIsInputEmpty(false);
      setIsInputInvalid(true);
    }
  };

  const isInputValueValid2 = (value: string) => {
    if (value !== "") {
      setIsInputEmpty(false);
    }
    if (validFunc && validFunc!(value)) {
      setIsInputInvalid(false);
    }
  };

  const inputValueHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    isInputValueValid2(value);
    setFormData((formDataObj: TFormState | null): TFormState => {
      let newForm = { ...formDataObj };
      formDataObj = null;
      newForm[fieldNameCamelCase] = value;
      return newForm;
    });
  };

  return (
    <div className="input-container">
      <input
        name={fieldNameCamelCase}
        id={fieldId}
        ref={inputRef}
        placeholder=" "
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          inputValueHandler(e)
        }
        value={formData[fieldNameCamelCase]}
        onBlur={isInputValueValid}
        autoComplete={fieldId.includes("password") ? "off" : "on"}
        type={
          fieldName.toLocaleLowerCase().includes("password")
            ? "password"
            : "text"
        }
      />
      <label htmlFor={fieldId}>{fieldName.toUpperCase()} *</label>
      {isInputEmpty && <WrongInputFill />}
      {isInputInvalid && (
        <WrongInputFill
          field={`${fieldName[0].toUpperCase()}${fieldName.slice(1)}`}
        />
      )}
    </div>
  );
};
