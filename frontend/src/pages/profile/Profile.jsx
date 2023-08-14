import React, { useState } from 'react';
import { Heading, ProfileContainer, UpdateFormFooterContainer } from './styles';
import { useSelector } from 'react-redux';
import { ErrorText, FormButton, FormItem } from '../../common/styled-components';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [formFields, setFormFields] = useState({ name: userInfo?.name || '', email: userInfo?.email || '' });
  const [formError, setFormError] = useState({});

  const handleValidation = () => {
    let error = {};

    if (!formFields.name) {
      error.name = 'Name is required';
    }
    if (!formFields.email) {
      error.email = 'Email is required';
    }

    return error;
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(handleValidation());

    console.log("UPDATE_VALUE = ", formFields)
  };


  return (
    <ProfileContainer>
      <Heading>Edit User Profile</Heading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="name">
            <label>Name</label>
            <input
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

          <UpdateFormFooterContainer>
            <Link to="/dashboard">
              <FormButton className="form-button" priority='tertiary'>
                Cancel
              </FormButton>
            </Link>
            <FormButton className="form-button" type="submit">
              Update
            </FormButton>
          </UpdateFormFooterContainer>
        </form>
      </div>
    </ProfileContainer>
  )
}

export default Profile