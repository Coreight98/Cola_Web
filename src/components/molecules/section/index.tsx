import styled from '@emotion/styled';

const SectionTitle = styled.h3`
  height: 24px;
  text-align: left;
  font: normal normal medium 24px/29px;
  font-family: 'GmarketSans';
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.blue['200']};
  height: 24px;
`;

interface ISectionProps {
  title: string;
  children: React.ReactElement;
}

const CommonSection = ({ title, children }: ISectionProps) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </div>
  );
};
export default CommonSection;
