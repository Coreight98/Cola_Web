import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border-radius: 25px;
  min-height: 30px;

  div {
    border-radius: 25px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-end;
    min-height: fit-content;
  }
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    min-height: 30px;
  }
`;
export const Title = styled.span`
  flex: 1;
  height: 100%;
  border-radius: 25px;
  padding: 0 1rem;
  box-shadow: 0px 0px 6px #00000029;
  font-weight: 600;
  cursor: pointer;
  line-height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;
export const InfoWrapper = styled.div`
  width: 40%;
  min-width: 12rem;
  background: #6c7bfa20;
  border-radius: 12px;
  color: black;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ProfileWrapper = styled.div`
  flex: 1;
  p {
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }
`;
export const Profile = styled.span`
  min-height: 30px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.blue[500]};
  opacity: 1;
  cursor: pointer;
  svg {
    height: 80%;
  }
`;
export const DateWrapper = styled.div`
  white-space: nowrap;
  height: 30px;
  min-width: fit-content;
  flex: 1;
  background: ${({ theme: { colors } }) => colors.blue[500]};
  span {
    padding: 0 0.5rem;
    color: white;
  }
`;
