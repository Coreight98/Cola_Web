import { MouseEvent, useState } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import AuthBtn from '@components/atoms/button/auth';
import SubmitBtn from '@components/atoms/button/submit';
import { MAJOR_TYPE } from '@constants/index';

import { SignUpFormInterface, SignUpData, SignUpType } from './index.type';
import { Container, Title, FormWrapper, Select, Triangle, SubTitle } from './styles';

import Input from '@molecules/input';
import Arrow from 'public/arrow.svg';
import Logo from 'public/cola_logo.svg';
import Check from 'public/check.svg';
import Modal from '@components/molecules/modal';
import MajorModal from '@components/molecules/modal/majorModal';
import { FlexWrapper } from '@styles/global';

const SignUpTemp = () => {
  const router = useRouter();
  const [major, setMajor] = useState<keyof typeof MAJOR_TYPE>('sw');
  const [modalOnOff, setModalOnOff] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignUpFormInterface>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '@ajou.ac.kr',
    },
  });

  const onClickEmailAuth = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // onSubmit이 아니기때문에 validation을 trigger한다.
    const result = await trigger('email');
    if (!result) return;
    if (!checkEmail) {
      // 이메일 인증 필요
      setCheckEmail(true);
    } else {
      // 이메일 인증 코드 확인
      console.log(emailCode);

      // TODO: email code 비교 및 체크하기
      setEmailCode('');
      setIsEmailValid(true);
    }
  };

  const onSubmit = (dd: any) => {
    if (!isEmailValid) return;
    console.log(dd);
  };
  const SignUpProps = (value: keyof typeof SignUpData) => {
    return { ...SignUpType[value], ...register(value, SignUpData[value]), error: errors[value]?.message };
  };
  // const ErrorMessage = (value: keyof typeof errors) => errors[value]?.message;

  const handleModalOnOff = () => setModalOnOff(!modalOnOff);

  const handleChange = () => {
    setIsEmailValid(false);
    setCheckEmail(false);
  };

  return (
    <>
      <Container>
        <Title>SIGN UP</Title>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input {...SignUpProps('name')} />
          <FlexWrapper style={{ position: 'relative' }}>
            <Input {...SignUpProps('email')} onChange={handleChange}>
              {!isEmailValid && <AuthBtn onClick={onClickEmailAuth}>인증</AuthBtn>}
            </Input>
            {isEmailValid && <Check style={{ position: 'absolute', right: '20px', top: '20px' }} />}
          </FlexWrapper>
          {checkEmail && !isEmailValid && (
            <Input {...SignUpProps('emailCheck')} value={emailCode} onChange={(e) => setEmailCode(e.target.value)} />
          )}
          <FlexWrapper>
            <SubTitle>학과</SubTitle>
            <div style={{ position: 'relative' }}>
              <Select onClick={handleModalOnOff} {...register('department', SignUpData.department)}>
                <option value={MAJOR_TYPE[major]} hidden>
                  {MAJOR_TYPE[major]}
                </option>
              </Select>
              <Triangle />
            </div>
          </FlexWrapper>
          <Input {...SignUpProps('gitEmailId')} />
          <SubmitBtn>SAVE</SubmitBtn>
        </FormWrapper>
      </Container>
      {modalOnOff && (
        <Modal>
          <MajorModal major={major} setMajor={setMajor} setModalOnOff={setModalOnOff} />
        </Modal>
      )}
    </>
  );
};
export default SignUpTemp;
