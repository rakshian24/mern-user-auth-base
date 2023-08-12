import React, { useState } from 'react';
import { ErrorText, FormButton, FormFooterTextContainer, FormHeading, FormItem, StyledLink } from '../common/styled-components';

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(handleValidation());
    console.log("FORM_FIELDS = ", formFields);
  };

  const handleValidation = () => {
    let error = {};

    if (!formFields.name) {
      error.name = 'Name is required';
    }
    if (!formFields.email) {
      error.email = 'Email is required';
    }
    if (!formFields.password) {
      error.password = 'Password is required';
    }
    if (!formFields.confirmPassword) {
      error.confirmPassword = 'Confirm password is required';
    }

    return error;
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <FormHeading>Create an account</FormHeading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="name">
            <label>Name</label>
            <input
              placeholder="Enter your name"
              name="name"
              type="text"
              value={formFields.name}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.name}</ErrorText>
          </FormItem>

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

          <FormItem id="name">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm your password"
              name="confirmPassword"
              type="password"
              value={formFields.confirmPassword}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.confirmPassword}</ErrorText>
          </FormItem>

          <FormFooterTextContainer>
            <p>Already have an account? <StyledLink to={'/sign-in'}>Sign In</StyledLink></p>
          </FormFooterTextContainer>

          <FormButton className="form-button" type="submit">
            Sign Up
          </FormButton>
        </form>
      </div>
    </div>
  )
}

export default SignUp