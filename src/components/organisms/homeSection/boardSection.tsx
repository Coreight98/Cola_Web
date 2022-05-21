import { useState } from 'react';

import styled from '@emotion/styled';

import BoardItem from '@components/molecules/homeBoardItem';

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.blue[500]};
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 5px;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const BoardLeftWrapper = styled.div`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  div {
    display: flex;
    gap: 1rem;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    align-items: center;
    justify-content: center;
  }
`;
const BoardTitle = styled.h3`
  font-size: 25px;
  color: white;
  position: relative;

  &::after {
    position: absolute;
    bottom: -10px;
    left: 1.6rem;
    content: '';
    width: 40%;
    height: 3px;
    background: white;
  }
`;
const BoardItemSection = styled.div`
  flex: 1;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background: ${({ theme: { colors } }) => colors.blue[300]};
    border-radius: 8px;
  }
`;

interface IInterestBtn {
  on: boolean;
}
const InterestBtn = styled.div<IInterestBtn>`
  width: 36px;
  height: 20px;
  border-radius: 11px;
  background: white;
  cursor: pointer;
  transition: all 300ms linear;
  position: relative;
  span {
    transition: all 200ms linear;
    position: absolute;
    top: calc(50% - 8px);
    left: ${({ on }) => (on ? '4px' : '16px')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.blue[500]};
  }
`;

const BoardSection = () => {
  const [boardItems, setBoardItems] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [on, setOn] = useState(false);

  const onClickInterest = () => {
    setOn((prev) => !prev);
  };

  return (
    <Container>
      <BoardLeftWrapper>
        <BoardTitle>인기글</BoardTitle>
        <div>
          <span>관심</span>
          <InterestBtn on={on} onClick={onClickInterest}>
            <span></span>
          </InterestBtn>
        </div>
      </BoardLeftWrapper>
      <BoardItemSection>
        {boardItems.map((_, idx) => (
          <BoardItem key={idx} />
        ))}
      </BoardItemSection>
    </Container>
  );
};
export default BoardSection;
