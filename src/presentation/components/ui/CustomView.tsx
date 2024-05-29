import React, { useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { StyleProp } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  margin?: boolean;
}

export const CustomView = ({ style, children, margin }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        style,
        { backgroundColor: colors.background },
      ]}>
      {children}
    </View>
  );
};
