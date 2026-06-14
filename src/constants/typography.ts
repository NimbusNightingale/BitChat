/**
 * BitChat Design System — Typography
 *
 * Modern typography scale inspired by Discord, Apple HIG, and Notion.
 * Uses system fonts for optimal rendering on each platform.
 */

import { Platform, StyleSheet, type TextStyle } from 'react-native';

import { Fonts } from './theme';

const base: TextStyle = {
  fontFamily: Fonts.sans,
};

export const Typography = StyleSheet.create({
  /** 56px — Splash/hero screens */
  hero: {
    ...base,
    fontSize: 56,
    lineHeight: 64,
    fontWeight: '800' as TextStyle['fontWeight'],
    letterSpacing: -1.5,
  },

  /** 34px — Main screen titles */
  h1: {
    ...base,
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700' as TextStyle['fontWeight'],
    letterSpacing: -0.5,
  },

  /** 28px — Section headers */
  h2: {
    ...base,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700' as TextStyle['fontWeight'],
    letterSpacing: -0.3,
  },

  /** 22px — Card titles, sub-sections */
  h3: {
    ...base,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600' as TextStyle['fontWeight'],
    letterSpacing: -0.2,
  },

  /** 17px — Large body text */
  bodyLarge: {
    ...base,
    fontSize: 17,
    lineHeight: 25,
    fontWeight: '400' as TextStyle['fontWeight'],
    letterSpacing: -0.1,
  },

  /** 16px — Regular body text */
  body: {
    ...base,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as TextStyle['fontWeight'],
  },

  /** 16px — Emphasized body text */
  bodyMedium: {
    ...base,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500' as TextStyle['fontWeight'],
  },

  /** 15px — Secondary body, descriptions */
  bodySmall: {
    ...base,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400' as TextStyle['fontWeight'],
  },

  /** 14px — Labels */
  label: {
    ...base,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as TextStyle['fontWeight'],
  },

  /** 14px — Emphasized labels */
  labelBold: {
    ...base,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as TextStyle['fontWeight'],
  },

  /** 13px — Captions, timestamps */
  caption: {
    ...base,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500' as TextStyle['fontWeight'],
  },

  /** 11px — Badges, tiny labels, uppercase kickers */
  micro: {
    ...base,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600' as TextStyle['fontWeight'],
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  /** 13px monospace — Code, IDs, technical info */
  mono: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: Platform.select({ android: '700' as TextStyle['fontWeight'] }) ?? ('500' as TextStyle['fontWeight']),
  },

  /** 12px — Section kickers */
  kicker: {
    ...base,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700' as TextStyle['fontWeight'],
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});

export type TypographyVariant = keyof typeof Typography;
