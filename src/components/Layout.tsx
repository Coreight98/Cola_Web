import { ReactChild, ReactChildren } from 'react';

import { useRecoilValue } from 'recoil';

import { sideBarState } from '@atoms/sidebar';
import Header from '@molecules/header';
import SideBar from '@molecules/sidebar';

export default function Layout({ children }: { children: ReactChild | ReactChildren }) {
  const isSideBarOpen = useRecoilValue(sideBarState);

  return (
    <>
      <Header />
      <SideBar />
      <div className="children">{children}</div>
      <style jsx>
        {`
          .children {
            display: flex;
            justify-content: center;
            padding-left: ${isSideBarOpen ? '200px' : '0'};
          }
        `}
      </style>
    </>
  );
}
// 레이아웃 패턴을 이용한다.
// 레이아웃에 어떤 children (footer 등)이든 넣을 수 있다.
// global로 import해야하는 것들. ex) 구글 애널리틱스, 서치 엔진 등
// 커스텀 스타일을 줄 수도 있다.
