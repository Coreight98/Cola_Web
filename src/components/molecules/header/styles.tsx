import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #151d3b;
  color: whitesmoke;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
  padding: 0px 10px;
`;
const SubTitle = styled.span`
  font-size: 14px;
  padding: 0px 10px;
`;
const HeaderBtn = styled.button`
  background: none;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;
`;

export { Container, TitleWrapper, Title, SubTitle, HeaderBtn };
