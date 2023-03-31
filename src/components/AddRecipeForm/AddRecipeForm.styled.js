import styled from 'styled-components';

export const AddRecipeSection = styled.section`
  padding-bottom: 72px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: #001833;
  margin-top: 30px;
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  width: 129px;
  height: 46px;
  border-radius: 24px 44px;
  border: none;
  background-color: #22252a;
  color: #fafafa;

  font-family: 'Poppins';
  font-size: 16px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }
`;
