import { View, type ViewProps } from 'react-native';

import { type ThemeColor } from '@/constants/theme';
import { Shadows, type ShadowName } from '@/constants/shadows';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  shadow?: ShadowName;
};

export function ThemedView({ style, lightColor, darkColor, type, shadow, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();
  const shadowStyle = shadow ? Shadows[shadow] : undefined;

  return (
    <View
      style={[
        { backgroundColor: theme[type ?? 'background'] },
        shadowStyle,
        style,
      ]}
      {...otherProps}
    />
  );
}
