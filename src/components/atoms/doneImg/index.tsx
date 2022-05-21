import styled from '@emotion/styled';

import { theme } from '@styles/theme';

const Svg = styled.svg`
  width: 3rem;
  height: 3rem;
  align-items: center;
`;

const Rect = styled.rect<{ rotate: number }>`
  transform: ${({ rotate }) => `rotate(${rotate * 45}deg)`};
  transform-box: fill-box;
  transform-origin: center;
`;

interface Props {
  data: any[];
}

const DoneImg = ({ data }: Props) => {
  return (
    <Svg>
      {data.map((v, i) => (
        <Rect key={i} rotate={i} x="50%" y="0" width="7" height="33" rx="4" ry="4" fill={theme.colors.blue[100]} />
      ))}
    </Svg>
  );
};

export default DoneImg;
