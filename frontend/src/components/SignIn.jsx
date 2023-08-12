import React, { useState } from 'react';
import { ErrorText, FormButton, FormFooterTextContainer, FormHeading, FormItem } from '../common/styled-components';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(handleValidation());
    console.log("FORM_FIELDS = ", formFields);
  };

  const handleValidation = () => {
    let error = {};

    if (!formFields.email) {
      error.email = 'Email is required';
    }
    if (!formFields.password) {
      error.password = 'Password is required';
    }

    return error;
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <FormHeading>Sign In</FormHeading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="email">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              value={formFields.email}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.email}</ErrorText>
          </FormItem>

          <FormItem id="password">
            <label>Password</label>
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              value={formFields.password}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.password}</ErrorText>
          </FormItem>

          <FormFooterTextContainer>
            <p>Don't have an account? <span>Sign Up</span></p>
          </FormFooterTextContainer>

          <FormButton className="form-button" type="submit">
            Sign In
          </FormButton>
        </form>
      </div>
    </div>
  )
}

export default SignIn