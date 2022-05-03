import { useState } from 'react';

import Modal from '@components/molecules/modal';
import MajorModal from '@components/molecules/modal/majorModal';
import SignUpForm from '@components/organisms/signUpForm';
import { MAJOR_TYPE } from '@constants/index';
import { Container, Title } from '@styles/signUp';

const SignUp = () => {
  const [major, setMajor] = useState<keyof typeof MAJOR_TYPE>('sw');
  const [modalOnOff, setModalOnOff] = useState(false);

  const handleModalOnOff = () => setModalOnOff(!modalOnOff);

  return (
    <>
      <Container>
        <Title>SIGN UP</Title>
        <SignUpForm handleModalOnOff={handleModalOnOff} major={major} />
      </Container>
      {modalOnOff && (
        <Modal onClick={handleModalOnOff}>
          <MajorModal major={major} setMajor={setMajor} setModalOnOff={setModalOnOff} />
        </Modal>
      )}
    </>
  );
};
export default SignUp;
