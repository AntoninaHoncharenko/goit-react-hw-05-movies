import styled from 'styled-components';
import arror from 'images/chevron-down.png';

export const DescrWrap = styled.div`
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const FileInputWrap = styled.div`
  position: relative;
  width: 279px;
  margin: 0 auto 32px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const FileInput = styled.input`
  width: 279px;
  height: 268px;
  opacity: 0;

  /* z-index: -1;
  overflow: hidden; */
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const InputWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 393px;
  }
`;

export const DescrInput = styled.input`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
  padding-bottom: 18px;
  outline: none;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

  ::placeholder {
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
    font-size: 16px;
  }
`;

export const SelectWrap = styled.div`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
  }
`;

export const DescrLabel = styled.label`
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DescrSelect = styled.select`
  font-family: 'Poppins';
  width: 85px;
  height: 19px;
  padding: 0;
  font-size: 12px;
  line-height: 1;
  color: #000000;
  background-color: #ffffff;
  border: none;

  appearance: none;
  overflow: hidden;
  background-image: url(${arror});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 16px;

  @media screen and (min-width: 768px) {
    width: 94px;
    font-size: 14px;
  }
`;

export const DescrOption = styled.option`
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: #000000;
  opacity: 0.5;
`;
