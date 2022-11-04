import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AppColor } from './myTheme';

const { background, second } = AppColor;

export const Container = styled(View)`
  flex: 1;
  background-color: ${background};
  align-items: center;
  padding: 10px 20px;
`;

export const Button = styled(Pressable)`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;

export const ButtonText = styled(Text)`
  color: ${second};
  font-size: 15px;
`;
