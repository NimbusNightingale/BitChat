/**
 * SettingsRow — Settings list item with icon, label, and action
 */

import { Pressable, View, StyleSheet } from 'react-native';

import { ThemedText } from '../themed-text';
import { ToggleSwitch } from './toggle-switch';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type SettingsRowProps = {
  icon: string;
  label: string;
  subtitle?: string;
  value?: string;
  showChevron?: boolean;
  toggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  onPress?: () => void;
  showDivider?: boolean;
  accentColor?: string;
};

export function SettingsRow({
  icon,
  label,
  subtitle,
  value,
  showChevron = false,
  toggle = false,
  toggleValue = false,
  onToggleChange,
  onPress,
  showDivider = true,
  accentColor,
}: SettingsRowProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  const content = (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: (accentColor ?? theme.accent) + '18' }]}>
        <ThemedText style={styles.icon}>{icon}</ThemedText>
      </View>
      <View style={styles.body}>
        <View style={styles.labelRow}>
          <View style={styles.labelGroup}>
            <ThemedText variant="bodyMedium">{label}</ThemedText>
            {subtitle ? (
              <ThemedText variant="caption" themeColor="textSecondary">
                {subtitle}
              </ThemedText>
            ) : null}
          </View>
          {toggle ? (
            <ToggleSwitch value={toggleValue} onValueChange={onToggleChange ?? (() => {})} />
          ) : value ? (
            <ThemedText variant="label" themeColor="textSecondary">
              {value}
            </ThemedText>
          ) : showChevron ? (
            <ThemedText variant="label" themeColor="textTertiary">
              ›
            </ThemedText>
          ) : null}
        </View>
        {showDivider && <View style={[styles.divider, { backgroundColor: theme.separator }]} />}
      </View>
    </View>
  );

  if (onPress && !toggle) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.one,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
  body: {
    flex: 1,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.two,
  },
  labelGroup: {
    flex: 1,
    gap: 2,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
