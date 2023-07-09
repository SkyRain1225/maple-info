import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  background-color: ${({ theme }) => theme.colors.darkgrey};
  margin-top: 10rem;

  > .github_info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 14px;
    padding-top: 4px;
    color: #6f7684;
    &:hover {
      color: #cfdcf6;
    }
  }

  > div,
  a {
    width: 1220px;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    > p {
      margin-top: 2px;
    }

    > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
