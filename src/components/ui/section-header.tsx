/**
 * SectionHeader — Reusable section header with optional action
 */

import { View, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '../themed-text';

import { Spacing } from '@/constants/theme';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, subtitle, action, onAction }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <ThemedText variant="h3">{title}</ThemedText>
        {subtitle ? (
          <ThemedText variant="caption" themeColor="textSecondary">
            {subtitle}
          </ThemedText>
        ) : null}
      </View>
      {action ? (
        <Pressable
          onPress={onAction}
          style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
        >
          <ThemedText variant="labelBold" themeColor="accent">
            {action}
          </ThemedText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.one,
  },
  textGroup: {
    flex: 1,
    gap: 2,
  },
  actionButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  pressed: {
    opacity: 0.7,
  },
});
