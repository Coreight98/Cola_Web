import styled from '@emotion/styled';

const SectionContent = styled.p`
  width: 650px;
  height: 150px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #90a8f0;
    height: 24px;
    width: 9px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    padding: 1px 0;
  }
`;
export { SectionContent };
