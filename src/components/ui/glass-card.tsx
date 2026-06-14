/**
 * GlassCard — Glassmorphism card component
 *
 * Uses expo-glass-effect on iOS for native blur.
 * Falls back to a semi-transparent background on other platforms.
 */

import { type ReactNode } from 'react';
import { View, StyleSheet, Platform, type ViewStyle } from 'react-native';

import { Colors, Radii, Spacing } from '@/constants/theme';
import { Shadows } from '@/constants/shadows';
import { useThemeMode } from '@/context/theme-mode';

type GlassIntensity = 'subtle' | 'medium' | 'strong';

type GlassCardProps = {
  children: ReactNode;
  intensity?: GlassIntensity;
  style?: ViewStyle;
  padding?: keyof typeof Spacing;
  radius?: keyof typeof Radii;
};

const opacityMap: Record<string, Record<GlassIntensity, number>> = {
  dark: { subtle: 0.08, medium: 0.14, strong: 0.22 },
  light: { subtle: 0.5, medium: 0.7, strong: 0.85 },
};

export function GlassCard({
  children,
  intensity = 'medium',
  style,
  padding = 'four',
  radius = 'xl',
}: GlassCardProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];
  const opacity = opacityMap[mode][intensity];

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: Radii[radius],
          borderColor: mode === 'dark'
            ? `rgba(255, 255, 255, ${intensity === 'strong' ? 0.1 : 0.06})`
            : `rgba(0, 0, 0, 0.04)`,
          backgroundColor: mode === 'dark'
            ? `rgba(15, 11, 46, ${opacity})`
            : `rgba(255, 255, 255, ${opacity})`,
          padding: Spacing[padding],
        },
        Shadows.card,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    overflow: 'hidden',
  },
});
