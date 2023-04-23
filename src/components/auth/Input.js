import { useState } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, submitted, value, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div
      className={"form-group" + (submitted && !{ value } ? " has-error" : "")}
    >
      <label>{label}</label>
      <input
        className="form-control m-2"
        {...inputProps}
        value={value}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      
      {/* <span>{errorMessage}</span> */}
    </div>
  );
};

export default Input;
