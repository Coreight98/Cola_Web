import { ReactChild, ReactChildren, isValidElement } from 'react';

import Navigation from './organisms/Navigation';

export default function Layout({ children }: { children: ReactChild | ReactChildren }) {
  const NOT_NAVIGATION_LIST = ['SignUp', 'SignIn'];
  return (
    <>
      {isValidElement(children) &&
        typeof children.type !== 'string' &&
        !NOT_NAVIGATION_LIST.includes(children.type.name) && <Navigation />}
      <div className="children">{children}</div>
      <style jsx>
        {`
          .children {
            display: flex;
            justify-content: center;
            padding-top: 5rem;
            padding-left: 4rem;
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
