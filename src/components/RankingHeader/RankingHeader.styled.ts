import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.bluegrey};
  border-top: 1px solid ${({ theme }) => theme.colors.blue};
  > div {
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.blackgrey};
    font-size: 15px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      width: 170px;
    }
    &:nth-child(2) {
      width: 352px;
    }
    &:nth-child(3) {
      width: 200px;
    }
    &:nth-child(4) {
      width: 132px;
    }
    &:nth-child(5) {
      width: 197px;
    }
    &:nth-child(6) {
      width: 149px;
    }
  }
`;
