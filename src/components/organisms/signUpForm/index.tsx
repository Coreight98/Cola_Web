import { MouseEvent, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import SubmitBtn from '@components/atoms/button/submit';
import SignUpInput from '@components/organisms/signUpInput';
import { FlexDiv } from '@styles/index';
import { SignUpFormStyle, CheckIcon } from './styles';
import { Select, Triangle, SubTitle } from '@styles/signUp';
import { SignUpFormInterface, SignUpData } from './index.type';
import { MAJOR_TYPE } from '@constants/index';

interface Props {
  handleModalOnOff: () => void;
  major: keyof typeof MAJOR_TYPE;
}

interface SelectBoxProps extends Props {
  register: UseFormRegister<SignUpFormInterface>;
}

const MajorSelectBox = ({ major, handleModalOnOff, register }: SelectBoxProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <Select onClick={handleModalOnOff} {...register('department', SignUpData.department)}>
        <option value={MAJOR_TYPE[major]} hidden>
          {MAJOR_TYPE[major]}
        </option>
      </Select>
      <Triangle />
    </div>
  );
};

const SignUpForm = ({ handleModalOnOff, major }: Props) => {
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

  const handleChange = () => {
    setIsEmailValid(false);
    setCheckEmail(false);
  };

  return (
    <SignUpFormStyle onSubmit={handleSubmit(onSubmit)}>
      <SignUpInput
        placeholder="이름"
        content="이름"
        {...register('name', SignUpData.name)}
        error={errors.name?.message}
      />
      <FlexDiv direction="row" style={{ position: 'relative' }}>
        <SignUpInput
          placeholder="아주대 메일"
          content="이메일 인증"
          buttonContent={!isEmailValid ? '인증' : undefined}
          onClick={onClickEmailAuth}
          {...register('email', SignUpData.email)}
          error={errors.email?.message}
          onChange={handleChange}
        />
        {isEmailValid && <CheckIcon />}
      </FlexDiv>
      {checkEmail && !isEmailValid && (
        <SignUpInput
          placeholder="인증번호를 입력하세요"
          buttonContent="확인"
          onClick={onClickEmailAuth}
          {...register('emailCheck', SignUpData.emailCheck)}
          error={errors.emailCheck?.message}
        />
      )}
      <FlexDiv direction="row">
        <SubTitle>학과</SubTitle>
        <MajorSelectBox major={major} register={register} handleModalOnOff={handleModalOnOff} />
      </FlexDiv>
      <SignUpInput
        placeholder="GIT 이메일"
        content="GIT 계정"
        {...register('gitEmailId', SignUpData.gitEmailId)}
        error={errors.gitEmailId?.message}
      />
      <SubmitBtn size="medium">SAVE</SubmitBtn>
    </SignUpFormStyle>
  );
};

export default SignUpForm;
