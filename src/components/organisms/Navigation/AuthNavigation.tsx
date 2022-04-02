import { useRouter } from 'next/router';

import { BtnWrapper } from './styles';
import Arrow from 'public/arrow.svg';
import Logo from 'public/cola_logo.svg';

const AuthNavigation = () => {
  const router = useRouter();

  return (
    <BtnWrapper>
      <Arrow onClick={() => router.back()} />
      <Logo onClick={() => router.push('/')} />
    </BtnWrapper>
  );
};

export default AuthNavigation;
