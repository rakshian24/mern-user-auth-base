import React, { useState } from 'react';
import { styled } from 'styled-components';


const FormHeading = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 1024px){
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-weight: 400;

  input{
    padding: 1.5rem;
    border: 1px solid #8498e2;
    border-radius: 1rem;

    &::placeholder {
      color: #273178;
      opacity: 0.5;
      font-size: 1.5rem;
      @media screen and (min-width: 501px){
        font-size: 1.65rem;
      }
    } 
    &:focus {
      outline: none !important;
      border: 1.5px solid #6650ef;
    }
  }
  
  label{
    color: #273178;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 501px){
      font-size: 1.65rem;
    }
  }
`;

const ErrorText = styled.span`
  color: #ff4d42;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormFooterTextContainer = styled.div`
  font-size: 1.5rem;
  color: #aaa;
  margin-bottom: 2rem;

  @media screen and (min-width: 501px){
    font-size: 1.65rem;
  }
`;

const FormButton = styled.button`
  background-color: #0077c5;
  border: none;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  border-radius: 10rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 1s ease;
  font-size: 1.4rem;

  @media screen and (min-width: 1024px){
    padding: 1.75rem 3rem;
    font-size: 1.65rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

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
            <p>Already have an account? <span>Sign In</span></p>
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