/**
 * Badge — Notification and status badge
 */

import { View, StyleSheet } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';

import { Colors } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type BadgeVariant = 'count' | 'dot' | 'label';
type BadgeColor = 'accent' | 'success' | 'warning' | 'error' | 'nearby';

type BadgeProps = {
  variant?: BadgeVariant;
  color?: BadgeColor;
  count?: number;
  label?: string;
};

const colorMap: Record<BadgeColor, Record<'dark' | 'light', string>> = {
  accent: { dark: '#6366F1', light: '#6366F1' },
  success: { dark: '#34D399', light: '#10B981' },
  warning: { dark: '#FBBF24', light: '#F59E0B' },
  error: { dark: '#F87171', light: '#EF4444' },
  nearby: { dark: '#22D3EE', light: '#06B6D4' },
};

export function Badge({ variant = 'count', color = 'accent', count = 0, label }: BadgeProps) {
  const { mode } = useThemeMode();
  const bgColor = colorMap[color][mode];

  if (variant === 'dot') {
    return (
      <Animated.View entering={ZoomIn.springify().damping(12)}>
        <View style={[styles.dot, { backgroundColor: bgColor }]} />
      </Animated.View>
    );
  }

  if (variant === 'label' && label) {
    return (
      <Animated.View entering={ZoomIn.springify().damping(12)}>
        <View style={[styles.labelBadge, { backgroundColor: bgColor }]}>
          <ThemedText style={styles.labelText}>{label}</ThemedText>
        </View>
      </Animated.View>
    );
  }

  if (count <= 0) return null;

  const displayCount = count > 99 ? '99+' : String(count);

  return (
    <Animated.View entering={ZoomIn.springify().damping(12)}>
      <View style={[styles.countBadge, { backgroundColor: bgColor }]}>
        <ThemedText style={styles.countText}>{displayCount}</ThemedText>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  countBadge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  labelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
