/**
 * EmptyState — Beautiful empty state with icon, title, and description
 */

import { View, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type EmptyStateProps = {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  return (
    <Animated.View entering={FadeInDown.duration(500).springify().damping(18)} style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: theme.accentSoft }]}>
        <ThemedText style={styles.icon}>{icon}</ThemedText>
      </View>
      <ThemedText variant="h3" style={styles.title}>
        {title}
      </ThemedText>
      <ThemedText variant="bodySmall" themeColor="textSecondary" style={styles.description}>
        {description}
      </ThemedText>
      {actionLabel && onAction ? (
        <Pressable
          onPress={onAction}
          style={({ pressed }) => [
            styles.actionButton,
            { backgroundColor: theme.accent },
            pressed && styles.pressed,
          ]}
        >
          <ThemedText variant="labelBold" style={styles.actionText}>
            {actionLabel}
          </ThemedText>
        </Pressable>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Spacing.seven,
    paddingHorizontal: Spacing.five,
    gap: Spacing.three,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
  },
  icon: {
    fontSize: 36,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    maxWidth: 280,
  },
  actionButton: {
    paddingHorizontal: Spacing.five,
    paddingVertical: Spacing.three,
    borderRadius: Radii.full,
    marginTop: Spacing.two,
  },
  actionText: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
});
