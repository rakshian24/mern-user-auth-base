import { styled } from 'styled-components';

export const FormHeading = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 1024px){
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

export const FormItem = styled.div`
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

export const ErrorText = styled.span`
  color: #ff4d42;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const FormFooterTextContainer = styled.div`
  font-size: 1.5rem;
  color: #aaa;
  margin-bottom: 2rem;

  @media screen and (min-width: 501px){
    font-size: 1.65rem;
  }
`;

export const FormButton = styled.button`
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