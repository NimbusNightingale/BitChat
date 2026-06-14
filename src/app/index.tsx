/**
 * You Tab — Personal Profile & Account Management
 *
 * Inspired by WhatsApp Profile, Discord User Profile, and Telegram Settings.
 */

import { ScrollView, View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Avatar } from '@/components/ui/avatar';
import { StatCard } from '@/components/ui/stat-card';
import { SectionHeader } from '@/components/ui/section-header';
import { SettingsRow } from '@/components/ui/settings-row';
import { GlassCard } from '@/components/ui/glass-card';
import { useTheme } from '@/hooks/use-theme';
import { useThemeMode } from '@/context/theme-mode';
import { staggerDelay } from '@/constants/animations';
import { Spacing } from '@/constants/theme';
import { styles } from '@/styles/index.styles';

// ── Mock User Data ──
const currentUser = {
  displayName: 'Akshat',
  username: 'akshat',
  bio: 'Building the future of decentralized communication ✨',
  userId: 'BC-7X9K-M2PQ',
  stats: {
    connections: 47,
    messagesSent: 1283,
    nearbyFriends: 5,
    internetFriends: 42,
  },
};

const stats = [
  { icon: '🔗', value: currentUser.stats.connections, label: 'Connections', color: '#818CF8' },
  { icon: '💬', value: currentUser.stats.messagesSent, label: 'Messages', color: '#34D399' },
  { icon: '📡', value: currentUser.stats.nearbyFriends, label: 'Nearby', color: '#22D3EE' },
  { icon: '🌐', value: currentUser.stats.internetFriends, label: 'Internet', color: '#F59E0B' },
];

export default function YouScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { mode, setMode } = useThemeMode();

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
        {/* ── Profile Header ── */}
        <Animated.View
          entering={FadeInDown.duration(500).springify().damping(18)}
          style={styles.profileHeader}
        >
          <View style={[styles.avatarRing, { borderColor: theme.accent }]}>
            <Avatar name={currentUser.displayName} size="xl" showStatus isOnline />
          </View>

          <View style={styles.nameGroup}>
            <ThemedText variant="h1" style={styles.displayName}>
              {currentUser.displayName}
            </ThemedText>
            <ThemedText variant="label" themeColor="textSecondary" style={styles.username}>
              @{currentUser.username}
            </ThemedText>
          </View>

          <ThemedText variant="bodySmall" themeColor="textSecondary" style={styles.bio}>
            {currentUser.bio}
          </ThemedText>

          <Pressable
            style={({ pressed }) => [
              styles.userIdContainer,
              { backgroundColor: theme.backgroundElement },
              pressed && styles.pressed,
            ]}
          >
            <ThemedText variant="mono" themeColor="textTertiary" style={styles.userId}>
              {currentUser.userId}
            </ThemedText>
            <ThemedText style={{ fontSize: 12 }}>📋</ThemedText>
          </Pressable>
        </Animated.View>

        {/* ── Statistics ── */}
        <Animated.View
          entering={FadeInDown.delay(staggerDelay(0)).duration(500).springify().damping(18)}
          style={styles.statsSection}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statsRow}
          >
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                accentColor={stat.color}
              />
            ))}
          </ScrollView>
        </Animated.View>

        {/* ── Personalization ── */}
        <Animated.View
          entering={FadeInDown.delay(staggerDelay(1)).duration(500).springify().damping(18)}
          style={styles.section}
        >
          <SectionHeader title="Personalization" />
          <GlassCard intensity="subtle" radius="xl">
            <SettingsRow
              icon="🌙"
              label="Dark Mode"
              toggle
              toggleValue={mode === 'dark'}
              onToggleChange={(val) => setMode(val ? 'dark' : 'light')}
            />
            <SettingsRow
              icon="🎨"
              label="Theme"
              value="Indigo"
              showChevron
              onPress={() => {}}
            />
            <SettingsRow
              icon="🔔"
              label="Notifications"
              showChevron
              onPress={() => {}}
              showDivider={false}
            />
          </GlassCard>
        </Animated.View>

        {/* ── Account ── */}
        <Animated.View
          entering={FadeInDown.delay(staggerDelay(2)).duration(500).springify().damping(18)}
          style={styles.section}
        >
          <SectionHeader title="Account" />
          <GlassCard intensity="subtle" radius="xl">
            <SettingsRow
              icon="✏️"
              label="Edit Profile"
              subtitle="Change name, bio, and photo"
              showChevron
              onPress={() => {}}
            />
            <SettingsRow
              icon="🔒"
              label="Privacy & Security"
              showChevron
              onPress={() => {}}
            />
            <SettingsRow
              icon="💾"
              label="Storage & Data"
              value="2.4 GB"
              showChevron
              onPress={() => {}}
            />
            <SettingsRow
              icon="⚙️"
              label="App Preferences"
              showChevron
              onPress={() => {}}
              showDivider={false}
            />
          </GlassCard>
        </Animated.View>

        {/* ── About ── */}
        <Animated.View
          entering={FadeInDown.delay(staggerDelay(3)).duration(500).springify().damping(18)}
          style={styles.section}
        >
          <SectionHeader title="About" />
          <GlassCard intensity="subtle" radius="xl">
            <SettingsRow
              icon="ℹ️"
              label="App Version"
              value="1.0.0"
              accentColor={theme.textTertiary}
            />
            <SettingsRow
              icon="📄"
              label="Terms of Service"
              showChevron
              onPress={() => {}}
            />
            <SettingsRow
              icon="🛡️"
              label="Privacy Policy"
              showChevron
              onPress={() => {}}
              showDivider={false}
            />
          </GlassCard>
        </Animated.View>

        {/* ── Footer ── */}
        <View style={styles.footer}>
          <ThemedText variant="caption" themeColor="textTertiary">
            BitChat · Decentralized Communication
          </ThemedText>
          <ThemedText variant="micro" themeColor="textTertiary">
            Built with Expo SDK 56
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
