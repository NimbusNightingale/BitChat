/**
 * BitChat Design System — Shadow Presets
 *
 * Platform-aware shadows: iOS uses shadowOffset/shadowRadius,
 * Android uses elevation. Includes accent glow variants.
 */

import { Platform, type ViewStyle } from 'react-native';

type ShadowPreset = ViewStyle;

function createShadow(
  ios: { offsetY: number; radius: number; opacity: number; color?: string },
  androidElevation: number,
): ShadowPreset {
  return Platform.select({
    ios: {
      shadowColor: ios.color ?? '#000000',
      shadowOffset: { width: 0, height: ios.offsetY },
      shadowOpacity: ios.opacity,
      shadowRadius: ios.radius,
    },
    android: {
      elevation: androidElevation,
    },
    default: {},
  }) as ShadowPreset;
}

export const Shadows = {
  /** Very subtle lift — list items, inputs */
  subtle: createShadow({ offsetY: 1, radius: 3, opacity: 0.06 }, 1),

  /** Standard card shadow */
  card: createShadow({ offsetY: 2, radius: 8, opacity: 0.08 }, 3),

  /** Elevated cards — modals, popovers */
  elevated: createShadow({ offsetY: 4, radius: 16, opacity: 0.12 }, 6),

  /** Large floating elements */
  floating: createShadow({ offsetY: 8, radius: 32, opacity: 0.16 }, 12),

  /** Accent glow — buttons, focused elements (dark mode) */
  accentGlowDark: createShadow(
    { offsetY: 0, radius: 20, opacity: 0.4, color: '#818CF8' },
    0,
  ),

  /** Accent glow — buttons, focused elements (light mode) */
  accentGlowLight: createShadow(
    { offsetY: 0, radius: 16, opacity: 0.25, color: '#6366F1' },
    0,
  ),

  /** Nearby/mesh cyan glow */
  nearbyGlow: createShadow(
    { offsetY: 0, radius: 20, opacity: 0.35, color: '#22D3EE' },
    0,
  ),

  /** Success glow */
  successGlow: createShadow(
    { offsetY: 0, radius: 12, opacity: 0.3, color: '#10B981' },
    0,
  ),

  /** No shadow */
  none: {} as ShadowPreset,
} as const;

export type ShadowName = keyof typeof Shadows;
