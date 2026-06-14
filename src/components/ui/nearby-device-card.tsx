/**
 * NearbyDeviceCard — Bluetooth device card with signal strength
 */

import { View, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';
import { Avatar } from './avatar';
import { GlassCard } from './glass-card';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type ConnectionStatus = 'connected' | 'available' | 'out-of-range';

type NearbyDeviceCardProps = {
  name: string;
  signalStrength: 1 | 2 | 3 | 4;
  distance: string;
  status: ConnectionStatus;
  onPress?: () => void;
  index?: number;
};

const statusLabels: Record<ConnectionStatus, string> = {
  connected: 'Connected',
  available: 'Available',
  'out-of-range': 'Out of Range',
};

function SignalBars({ strength, color }: { strength: number; color: string }) {
  return (
    <View style={signalStyles.container}>
      {[1, 2, 3, 4].map((bar) => (
        <View
          key={bar}
          style={[
            signalStyles.bar,
            {
              height: 6 + bar * 4,
              backgroundColor: bar <= strength ? color : `${color}30`,
            },
          ]}
        />
      ))}
    </View>
  );
}

const signalStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    width: 4,
    borderRadius: 2,
  },
});

export function NearbyDeviceCard({
  name,
  signalStrength,
  distance,
  status,
  onPress,
  index = 0,
}: NearbyDeviceCardProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  const statusColor =
    status === 'connected'
      ? theme.success
      : status === 'available'
        ? theme.nearby
        : theme.offline;

  return (
    <Animated.View entering={FadeInDown.delay(index * 60).duration(400).springify().damping(18)}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <GlassCard intensity="subtle" padding="three" radius="lg">
          <View style={styles.row}>
            <Avatar name={name} size="md" showStatus isOnline={status === 'connected'} />
            <View style={styles.info}>
              <ThemedText variant="labelBold">{name}</ThemedText>
              <View style={styles.metaRow}>
                <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
                <ThemedText variant="caption" style={{ color: statusColor }}>
                  {statusLabels[status]}
                </ThemedText>
                <ThemedText variant="caption" themeColor="textTertiary">
                  · {distance}
                </ThemedText>
              </View>
            </View>
            <SignalBars strength={signalStrength} color={theme.nearby} />
          </View>
        </GlassCard>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
