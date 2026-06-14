/**
 * MeshStatusBar — Bluetooth mesh network health indicator
 */

import { View, StyleSheet } from 'react-native';

import { ThemedText } from '../themed-text';
import { GlassCard } from './glass-card';

import { Colors, Spacing } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type MeshHealth = 'excellent' | 'good' | 'fair' | 'poor';

type MeshStatusBarProps = {
  isBluetoothOn: boolean;
  connectedDevices: number;
  relayNodes: number;
  health: MeshHealth;
};

const healthConfig: Record<MeshHealth, { label: string; colorKey: 'success' | 'nearby' | 'warning' | 'error'; bars: number }> = {
  excellent: { label: 'Excellent', colorKey: 'success', bars: 4 },
  good: { label: 'Good', colorKey: 'success', bars: 3 },
  fair: { label: 'Fair', colorKey: 'warning', bars: 2 },
  poor: { label: 'Poor', colorKey: 'error', bars: 1 },
};

function HealthBars({ filled, total, color }: { filled: number; total: number; color: string }) {
  return (
    <View style={barStyles.container}>
      {Array.from({ length: total }, (_, i) => (
        <View
          key={i}
          style={[
            barStyles.bar,
            { backgroundColor: i < filled ? color : `${color}25` },
          ]}
        />
      ))}
    </View>
  );
}

const barStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3,
  },
  bar: {
    width: 24,
    height: 4,
    borderRadius: 2,
  },
});

export function MeshStatusBar({ isBluetoothOn, connectedDevices, relayNodes, health }: MeshStatusBarProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];
  const config = healthConfig[health];
  const healthColor = theme[config.colorKey];

  return (
    <GlassCard intensity="medium" padding="four" radius="xl">
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ThemedText style={styles.bluetoothIcon}>
            {isBluetoothOn ? '📡' : '📴'}
          </ThemedText>
          <View>
            <ThemedText variant="labelBold">
              Mesh Network
            </ThemedText>
            <ThemedText variant="caption" themeColor="textSecondary">
              {isBluetoothOn ? 'Active' : 'Bluetooth Off'}
            </ThemedText>
          </View>
        </View>
        <View style={styles.healthGroup}>
          <ThemedText variant="caption" style={{ color: healthColor }}>
            {config.label}
          </ThemedText>
          <HealthBars filled={config.bars} total={4} color={healthColor} />
        </View>
      </View>

      <View style={[styles.divider, { backgroundColor: theme.separator }]} />

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <ThemedText variant="h3" style={{ color: theme.nearby }}>
            {connectedDevices}
          </ThemedText>
          <ThemedText variant="micro" themeColor="textSecondary">
            Devices
          </ThemedText>
        </View>
        <View style={[styles.verticalDivider, { backgroundColor: theme.separator }]} />
        <View style={styles.statItem}>
          <ThemedText variant="h3" style={{ color: theme.accent }}>
            {relayNodes}
          </ThemedText>
          <ThemedText variant="micro" themeColor="textSecondary">
            Relays
          </ThemedText>
        </View>
        <View style={[styles.verticalDivider, { backgroundColor: theme.separator }]} />
        <View style={styles.statItem}>
          <ThemedText variant="h3" style={{ color: theme.success }}>
            {connectedDevices + relayNodes}
          </ThemedText>
          <ThemedText variant="micro" themeColor="textSecondary">
            Total
          </ThemedText>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  bluetoothIcon: {
    fontSize: 24,
  },
  healthGroup: {
    alignItems: 'flex-end',
    gap: Spacing.one,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginVertical: Spacing.three,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: Spacing.one,
    flex: 1,
  },
  verticalDivider: {
    width: StyleSheet.hairlineWidth,
    height: 40,
  },
});
