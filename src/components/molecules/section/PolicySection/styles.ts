import styled from '@emotion/styled';

const SectionContent = styled.p`
  width: 650px;
  height: 150px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.shadow};
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.gray[900]};
  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue['200']};
    height: 24px;
    width: 9px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    padding: 1px 0;
  }
`;
export { SectionContent };
