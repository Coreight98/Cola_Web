import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1``;
const SubTitle = styled.h3`
  margin: 0;
  padding: 0 2rem;
`;
const FormWrapper = styled.form``;
const SubFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 2rem 0;
  input {
    width: 250px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const ErrorMsg = styled.p`
  width: 100%;
  margin: 0;
  padding: 5px 0 10px 0;
  color: red;
`;
const EmailAuthBtn = styled.button`
  padding: 0.5rem 1rem;
`;
const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
`;

export { Container, Title, SubTitle, FormWrapper, SubFormWrapper, InputWrapper, ErrorMsg, EmailAuthBtn, SubmitBtn };
