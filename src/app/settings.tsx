/**
 * Nearby Tab — Bluetooth Mesh Communication
 *
 * Inspired by BitChat, Bridgefy, and Bluetooth Mesh Networks.
 * Features radar scanning animation, device discovery, and mesh status.
 */

import { ScrollView, View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MeshStatusBar } from '@/components/ui/mesh-status-bar';
import { NearbyDeviceCard } from '@/components/ui/nearby-device-card';
import { SectionHeader } from '@/components/ui/section-header';
import { GlassCard } from '@/components/ui/glass-card';
import { useTheme } from '@/hooks/use-theme';
import { staggerDelay } from '@/constants/animations';
import { styles } from '@/styles/settings.styles';

// ── Mock Data ──

const nearbyDevices = [
  { name: 'Priya\'s iPhone', signalStrength: 4 as const, distance: '~2m', status: 'connected' as const },
  { name: 'Dev\'s Pixel', signalStrength: 3 as const, distance: '~5m', status: 'connected' as const },
  { name: 'Aarav\'s iPad', signalStrength: 3 as const, distance: '~8m', status: 'available' as const },
  { name: 'Maya\'s Phone', signalStrength: 2 as const, distance: '~15m', status: 'available' as const },
  { name: 'Unknown Device', signalStrength: 1 as const, distance: '~25m', status: 'out-of-range' as const },
];

// ── Radar Animation Component ──

function RadarScanner() {
  const theme = useTheme();
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 2500, easing: Easing.linear }),
      -1,
      false,
    );
  }, [progress]);

  const ring1Style = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.2, 1]);
    const opacity = interpolate(progress.value, [0, 0.7, 1], [0.6, 0.2, 0]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const ring2Style = useAnimatedStyle(() => {
    const adjusted = (progress.value + 0.33) % 1;
    const scale = interpolate(adjusted, [0, 1], [0.2, 1]);
    const opacity = interpolate(adjusted, [0, 0.7, 1], [0.6, 0.2, 0]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const ring3Style = useAnimatedStyle(() => {
    const adjusted = (progress.value + 0.66) % 1;
    const scale = interpolate(adjusted, [0, 1], [0.2, 1]);
    const opacity = interpolate(adjusted, [0, 0.7, 1], [0.6, 0.2, 0]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <View style={styles.radarContainer}>
      <Animated.View
        style={[
          styles.radarRing,
          {
            width: 200,
            height: 200,
            borderColor: theme.nearby,
          },
          ring1Style,
        ]}
      />
      <Animated.View
        style={[
          styles.radarRing,
          {
            width: 200,
            height: 200,
            borderColor: theme.nearby,
          },
          ring2Style,
        ]}
      />
      <Animated.View
        style={[
          styles.radarRing,
          {
            width: 200,
            height: 200,
            borderColor: theme.nearby,
          },
          ring3Style,
        ]}
      />
      <View style={[styles.radarCenter, { backgroundColor: theme.nearby }]} />
    </View>
  );
}

// ── Main Screen ──

export default function NearbyScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top },
        ]}
        showsVerticalScrollIndicator={false}
        bounces
      >
        {/* ── Header ── */}
        <Animated.View
          entering={FadeInDown.duration(400).springify().damping(18)}
          style={styles.header}
        >
          <ThemedText variant="h1">Nearby</ThemedText>
          <ThemedText variant="bodySmall" themeColor="textSecondary">
            Communicate through Bluetooth Mesh
          </ThemedText>
        </Animated.View>

        {/* ── Mesh Status ── */}
        <Animated.View
          entering={FadeInDown.delay(50).duration(400).springify().damping(18)}
          style={styles.meshStatusSection}
        >
          <MeshStatusBar
            isBluetoothOn
            connectedDevices={2}
            relayNodes={3}
            health="good"
          />
        </Animated.View>

        {/* ── Scanning Animation ── */}
        <Animated.View
          entering={FadeInDown.delay(100).duration(500).springify().damping(18)}
          style={styles.scanSection}
        >
          <RadarScanner />
          <ThemedText variant="label" themeColor="textSecondary" style={styles.scanLabel}>
            Scanning for nearby users...
          </ThemedText>
          <ThemedText variant="caption" themeColor="textTertiary">
            {nearbyDevices.length} devices found
          </ThemedText>
        </Animated.View>

        {/* ── Nearby Devices ── */}
        <View style={styles.devicesSection}>
          <View style={styles.devicesSectionHeader}>
            <SectionHeader
              title="Devices"
              subtitle={`${nearbyDevices.filter((d) => d.status === 'connected').length} connected`}
              action="Refresh"
            />
          </View>
          {nearbyDevices.map((device, index) => (
            <NearbyDeviceCard
              key={device.name}
              name={device.name}
              signalStrength={device.signalStrength}
              distance={device.distance}
              status={device.status}
              index={index}
            />
          ))}
        </View>

        {/* ── Quick Actions ── */}
        <Animated.View
          entering={FadeInDown.delay(staggerDelay(4)).duration(400).springify().damping(18)}
          style={styles.actionsSection}
        >
          <SectionHeader title="Quick Actions" />
          <View style={styles.actionsRow}>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressed, { flex: 1 }]}
            >
              <GlassCard intensity="medium" padding="four" radius="xl">
                <View style={{ alignItems: 'center', gap: 8 }}>
                  <ThemedText style={styles.actionIcon}>📢</ThemedText>
                  <ThemedText variant="labelBold">Broadcast</ThemedText>
                  <ThemedText variant="caption" themeColor="textSecondary" style={{ textAlign: 'center' }}>
                    Send to all nearby
                  </ThemedText>
                </View>
              </GlassCard>
            </Pressable>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressed, { flex: 1 }]}
            >
              <GlassCard intensity="medium" padding="four" radius="xl">
                <View style={{ alignItems: 'center', gap: 8 }}>
                  <ThemedText style={styles.actionIcon}>👥</ThemedText>
                  <ThemedText variant="labelBold">Group Chat</ThemedText>
                  <ThemedText variant="caption" themeColor="textSecondary" style={{ textAlign: 'center' }}>
                    Start mesh group
                  </ThemedText>
                </View>
              </GlassCard>
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </ThemedView>
  );
}
