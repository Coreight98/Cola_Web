import { Title, MajorWrapper, FooterWrapper, CheckBox, Span } from './styles';

import { MAJOR_TYPE } from '@constants/index';
import { Dispatch, SetStateAction, useState } from 'react';
import { TypeOf } from 'yup';
import { theme } from '@styles/theme';

const MajorModal = ({
  major,
  setMajor,
  setModalOnOff,
}: {
  major: keyof typeof MAJOR_TYPE;
  setMajor: Dispatch<SetStateAction<keyof typeof MAJOR_TYPE>>;
  setModalOnOff: Dispatch<SetStateAction<boolean>>;
}) => {
  const [tempMajor, setTempMajor] = useState<keyof typeof MAJOR_TYPE>(major);
  const handleClick = () => {};
  return (
    <>
      <Title>학과</Title>
      <MajorWrapper>
        {Object.keys(MAJOR_TYPE).map((element) => (
          <label onClick={() => setTempMajor(element as keyof typeof MAJOR_TYPE)}>
            <CheckBox selected={tempMajor === element} />
            <Span selected={tempMajor === element}>{MAJOR_TYPE[element as keyof typeof MAJOR_TYPE]}</Span>
          </label>
        ))}
      </MajorWrapper>
      <FooterWrapper>
        <p onClick={() => setModalOnOff(false)}>취소</p>
        <p
          style={{ color: theme.colors.VeryLightBlue }}
          onClick={() => {
            setMajor(tempMajor);
            setModalOnOff(false);
          }}
        >
          확인
        </p>
      </FooterWrapper>
    </>
  );
};

export default MajorModal;
