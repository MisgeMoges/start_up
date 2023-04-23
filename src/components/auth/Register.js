import { useState } from "react";

import Input from "./Input";

const Login = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    },
  ];

  const loginInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email address",
      errorMessage: "It should be a valid email address!",
      label: "Email Address",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="col-md-12 ">
        <form name="form" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <Input
                name="firstName"
                type="text"
                placeholder="First name"
                label="First Name"
                pattern="^[A-Za-z0-9]{3,16}$"
                required="true"
                value={values.firstName}
                onChange={onChange}
                submitted={submitted}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Last name"
                label="Last Name"
                pattern="^[A-Za-z0-9]{3,16}$"
                required="true"
                value={values.lastName}
                onChange={onChange}
                submitted={submitted}
              />
            </>
          )}
          <Input
            name="email"
            type="text"
            placeholder="Email address"
            label="Email Address"
            pattern="^[A-Za-z0-9]{3,16}$"
            required="true"
            value={values.email}
            onChange={onChange}
            submitted={submitted}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            pattern="^[A-Za-z0-9]{3,16}$"
            required="true"
            value={values.password}
            onChange={onChange}
            submitted={submitted}
          />
          {isSignUp && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              label="Confirm Password"
              pattern= {values.password}
              required="true"
              value={values.confirmPassword}
              onChange={onChange}
              submitted={submitted}
            />
          )}
          <button
            type="submit"
            className=" w-100 submit btn btn-primary contained"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
