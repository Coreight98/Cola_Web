import { ReactChild, ReactChildren, isValidElement } from 'react';

import Navigation from './organisms/Navigation';
import AuthNavigation from './organisms/Navigation/AuthNavigation';

export default function Layout({ children }: { children: ReactChild | ReactChildren }) {
  const NOT_NAVIGATION_LIST = ['SignUp', 'SignIn', 'SignUpPolicy'];
  return (
    <>
      {isValidElement(children) && typeof children.type !== 'string' && children.type.name !== 'GatherMap' ? (
        !NOT_NAVIGATION_LIST.includes(children.type.name) ? (
          <>
            <Navigation />
            <div className="children">{children}</div>
          </>
        ) : (
          <>
            <AuthNavigation />
            <div className="not">{children}</div>
          </>
        )
      ) : (
        <div>{children}</div>
      )}

      <style jsx>
        {`
          .children {
            display: flex;
            justify-content: center;
            padding-top: 5rem;
            padding-left: 1rem;
            transition: 0.2s ease-in-out;
            width: calc(100vw - 5rem);
            height: calc(100vh - 1rem);
          }
          .not {
            width: 100vw;
            height: calc(100vh - 8rem);
            display: flex;
            justify-content: center;
            transition: 0.2s ease-in-out;
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
