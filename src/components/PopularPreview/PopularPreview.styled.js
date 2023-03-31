import styled from 'styled-components';

export const PopularSection = styled.section`
  padding-bottom: 100px;
  background-image: url('../../images/background-1x.png');
  /* transform: rotate(149deg);
  background-position: right bottom; */

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #3e4462;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularList = styled.ul`
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    justify-content: space-between;
  }
`;

export const PopularItem = styled.li`
  width: 343px;
  height: 98px;
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;

export const PopularImage = styled.img`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  background-color: #8baa36;
  border-radius: 8px;
`;

export const PopularSubtitle = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: #3e4462;
  width: 212px;
  margin-bottom: 3px;
`;

export const PopularText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #7e7e7e;

  width: 212px;
  height: 56px;

  @media screen and (min-width: 768px) {
    width: 208px;
  }
`;
