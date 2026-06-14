/**
 * StatCard — Statistics display card
 */

import { View, StyleSheet } from 'react-native';

import { ThemedText } from '../themed-text';
import { GlassCard } from './glass-card';

import { Spacing, Colors } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type StatCardProps = {
  icon: string;
  value: string | number;
  label: string;
  accentColor?: string;
};

export function StatCard({ icon, value, label, accentColor }: StatCardProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];
  const color = accentColor ?? theme.accent;

  return (
    <GlassCard intensity="subtle" padding="three" radius="lg" style={styles.card}>
      <View style={[styles.iconCircle, { backgroundColor: `${color}20` }]}>
        <ThemedText style={[styles.icon, { fontSize: 18 }]}>{icon}</ThemedText>
      </View>
      <ThemedText variant="h3" style={[styles.value, { color }]}>
        {value}
      </ThemedText>
      <ThemedText variant="caption" themeColor="textSecondary" style={styles.label}>
        {label}
      </ThemedText>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  value: {
    fontWeight: '700',
  },
  label: {
    textTransform: 'none',
    letterSpacing: 0,
  },
});
