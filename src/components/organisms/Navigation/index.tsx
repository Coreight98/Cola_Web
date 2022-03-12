import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Header from '@molecules/header';
import SideBar from '@molecules/sidebar';

const Container = styled.div`
  z-index: 100;
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

  useEffect(() => {
    console.log('sidebar changed', sidebar);
  }, [sidebar]);

  return (
    <Container>
      <Header setSidebar={setSidebar} />
      <SideBar sidebar={sidebar} setSidebar={setSidebar} />
    </Container>
  );
};
export default Navigation;
