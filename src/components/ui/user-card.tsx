/**
 * UserCard — Discord-style user card with avatar and quick actions
 */

import { View, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';
import { Avatar } from './avatar';
import { GlassCard } from './glass-card';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type UserCardProps = {
  name: string;
  username: string;
  isOnline?: boolean;
  bio?: string;
  onMessage?: () => void;
  onAddFriend?: () => void;
  index?: number;
};

export function UserCard({
  name,
  username,
  isOnline = false,
  bio,
  onMessage,
  onAddFriend,
  index = 0,
}: UserCardProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  return (
    <Animated.View entering={FadeInRight.delay(index * 80).duration(400).springify().damping(18)}>
      <GlassCard intensity="subtle" padding="three" radius="xl" style={styles.card}>
        <Avatar name={name} size="lg" showStatus isOnline={isOnline} />
        <View style={styles.info}>
          <ThemedText variant="labelBold" numberOfLines={1}>
            {name}
          </ThemedText>
          <ThemedText variant="caption" themeColor="textSecondary" numberOfLines={1}>
            @{username}
          </ThemedText>
          {bio ? (
            <ThemedText variant="caption" themeColor="textTertiary" numberOfLines={2} style={styles.bio}>
              {bio}
            </ThemedText>
          ) : null}
        </View>
        <View style={styles.actions}>
          {onAddFriend && (
            <Pressable
              onPress={onAddFriend}
              style={({ pressed }) => [
                styles.actionButton,
                { backgroundColor: theme.accent },
                pressed && styles.pressed,
              ]}
            >
              <ThemedText variant="caption" style={styles.actionText}>
                Add
              </ThemedText>
            </Pressable>
          )}
        </View>
      </GlassCard>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    alignItems: 'center',
    gap: Spacing.two,
  },
  info: {
    alignItems: 'center',
    gap: 2,
    width: '100%',
  },
  bio: {
    textAlign: 'center',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  actionButton: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Radii.full,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'none',
    letterSpacing: 0,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.96 }],
  },
});
