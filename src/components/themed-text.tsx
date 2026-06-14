import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, type ThemeColor } from '@/constants/theme';
import { Typography, type TypographyVariant } from '@/constants/typography';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  /** Legacy type variants (kept for backward compat) */
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  /** New typography scale variants */
  variant?: TypographyVariant;
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', variant, themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  // If a new variant is specified, use the new typography system
  if (variant) {
    return (
      <Text
        style={[
          { color: theme[themeColor ?? 'text'] },
          Typography[variant],
          style,
        ]}
        {...rest}
      />
    );
  }

  // Legacy type system
  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && legacyStyles.default,
        type === 'title' && legacyStyles.title,
        type === 'small' && legacyStyles.small,
        type === 'smallBold' && legacyStyles.smallBold,
        type === 'subtitle' && legacyStyles.subtitle,
        type === 'link' && legacyStyles.link,
        type === 'linkPrimary' && legacyStyles.linkPrimary,
        type === 'code' && legacyStyles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const legacyStyles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
});
