import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

interface ISpace {
  width?: number;
  height?: number;
}

const SpaceView = styled(View)<ISpace>`
  width: ${({ width }) => width || 1}px;
  height: ${({ height }) => height || 1}px;
`;

export const Space = ({ width, height }: ISpace) => (
  <SpaceView width={width} height={height} />
);
