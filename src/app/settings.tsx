import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { styles } from '@/styles/settings.styles';
import { ThemeMode, useThemeMode } from '@/context/theme-mode';
import { useTheme } from '@/hooks/use-theme';

function ModeToggle({
  label,
  value,
  selected,
  onPress,
}: {
  label: string;
  value: ThemeMode;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.toggle, selected && styles.toggleActive, pressed && styles.pressed]}>
      <ThemedText
        type="smallBold"
        themeColor={selected ? 'text' : 'textSecondary'}
        style={selected ? styles.toggleTextActive : styles.toggleText}
      >
        {label}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {value === 'dark' ? 'Best for low light' : 'Bright and clear'}
      </ThemedText>
    </Pressable>
  );
}

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { mode, setMode } = useThemeMode();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.contentContainer,
        {
          paddingTop: insets.top + Spacing.three,
          paddingBottom: insets.bottom + BottomTabInset + Spacing.five,
        },
      ]}
      decelerationRate="fast"
      bounces
      scrollEventThrottle={16}
      keyboardDismissMode="on-drag"
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.shell}>
        <ThemedView type="backgroundElement" style={styles.header}>
          <ThemedText type="smallBold" themeColor="textSecondary" style={styles.kicker}>
            Settings
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            Theme and display
          </ThemedText>
          <ThemedText type="default" themeColor="textSecondary" style={styles.subtitle}>
            Choose how BitChat looks and feels on your device.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Theme control
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Your current mode is {mode}.
            </ThemedText>
          </View>

          <View style={styles.toggleGrid}>
            <ModeToggle label="Light" value="light" selected={mode === 'light'} onPress={() => setMode('light')} />
            <ModeToggle label="Dark" value="dark" selected={mode === 'dark'} onPress={() => setMode('dark')} />
          </View>

          <ThemedView type="backgroundSelected" style={styles.preview}>
            <ThemedText type="smallBold" style={styles.previewLabel}>
              Preview
            </ThemedText>
            <ThemedText type="default">
              BitChat is now using the {mode} theme.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
