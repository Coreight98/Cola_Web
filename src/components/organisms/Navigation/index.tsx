import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Header from '@molecules/header';
import SideBar from '@molecules/sidebar';

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 5rem;
  background: salmon;
`;

export interface ISidebarStateProps {
  sidebar?: boolean | undefined;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setSidebar(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
  }, []);
  return (
    <Container>
      <SideBar sidebar={sidebar} setSidebar={setSidebar} />
      <Header setSidebar={setSidebar} />
    </Container>
  );
};
export default Navigation;
