import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > .left_info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding-left: 0.5rem;

    > .user_info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > .streamer {
        display: flex;
        font-weight: 400;
        font-size: 1.2rem;
        color: #343541;
      }

      > .user_nickname {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
    }

    > .user_avatar {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      background-color: ${({ theme }) => theme.colors.lightgrey};
      > .avatar_img {
        position: absolute;
        object-fit: contain;
        top: -3.2rem;
        left: -2.3rem;
      }
    }
  }

  > .user_exp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: lighter;
    height: 126px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgrey};

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
