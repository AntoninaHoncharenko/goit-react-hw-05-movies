import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
`;
