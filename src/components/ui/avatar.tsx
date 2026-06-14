/**
 * Avatar — Premium initials-based avatar with gradient background
 *
 * Generates a unique gradient per user based on name hash.
 * Shows online/offline status indicator dot.
 */

import { useMemo } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';

import { AvatarGradients, Colors } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarProps = {
  name: string;
  size?: AvatarSize;
  showStatus?: boolean;
  isOnline?: boolean;
  style?: ViewStyle;
};

const sizeMap: Record<AvatarSize, number> = {
  xs: 28,
  sm: 36,
  md: 48,
  lg: 72,
  xl: 96,
};

const fontSizeMap: Record<AvatarSize, number> = {
  xs: 11,
  sm: 14,
  md: 18,
  lg: 28,
  xl: 36,
};

const statusSizeMap: Record<AvatarSize, number> = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
};

function hashName(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export function Avatar({ name, size = 'md', showStatus = false, isOnline = false, style }: AvatarProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];
  const dimension = sizeMap[size];
  const fontSize = fontSizeMap[size];
  const statusSize = statusSizeMap[size];

  const gradientIndex = useMemo(() => hashName(name) % AvatarGradients.length, [name]);
  const gradientColors = AvatarGradients[gradientIndex];

  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }, [name]);

  return (
    <Animated.View entering={FadeIn.duration(300)} style={[{ width: dimension, height: dimension }, style]}>
      <View
        style={[
          styles.container,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            backgroundColor: gradientColors[0],
          },
        ]}
      >
        {/* Gradient overlay using experimental_backgroundImage */}
        <View
          style={[
            styles.gradientOverlay,
            {
              borderRadius: dimension / 2,
              experimental_backgroundImage: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
            } as ViewStyle,
          ]}
        />
        <ThemedText
          style={[
            styles.initials,
            {
              fontSize,
              lineHeight: fontSize * 1.2,
            },
          ]}
        >
          {initials}
        </ThemedText>
      </View>

      {showStatus && (
        <View
          style={[
            styles.statusDot,
            {
              width: statusSize,
              height: statusSize,
              borderRadius: statusSize / 2,
              borderWidth: statusSize > 10 ? 3 : 2,
              borderColor: theme.background,
              backgroundColor: isOnline ? theme.online : theme.offline,
              bottom: size === 'xs' ? -1 : 0,
              right: size === 'xs' ? -1 : 0,
            },
          ]}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFill,
  },
  initials: {
    color: '#FFFFFF',
    fontWeight: '700',
    zIndex: 1,
  },
  statusDot: {
    position: 'absolute',
    zIndex: 2,
  },
});
