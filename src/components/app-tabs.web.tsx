import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable, View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { Shadows } from '@/constants/shadows';
import { useThemeMode } from '@/context/theme-mode';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton icon="person">YOU</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton icon="bubble.left.and.bubble.right">CONNECT</TabButton>
          </TabTrigger>
          <TabTrigger name="settings" href="/settings" asChild>
            <TabButton icon="antenna.radiowaves.left.and.right">NEARBY</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({
  children,
  isFocused,
  icon,
  ...props
}: TabTriggerSlotProps & { icon?: string }) {
  const { mode } = useThemeMode();
  const colors = Colors[mode];

  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'accentSoft' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <View style={styles.tabButtonContent}>
          {icon && (
            <SymbolView
              tintColor={isFocused ? colors.accent : colors.tabBarInactive}
              name={
                icon === 'person'
                  ? { web: 'person', ios: isFocused ? 'person.fill' : 'person' }
                  : icon === 'bubble.left.and.bubble.right'
                  ? { web: 'message', ios: isFocused ? 'bubble.left.and.bubble.right.fill' : 'bubble.left.and.bubble.right' }
                  : { web: 'wifi', ios: 'antenna.radiowaves.left.and.right' }
              }
              size={14}
            />
          )}
          <ThemedText
            type="smallBold"
            themeColor={isFocused ? 'accent' : 'tabBarInactive'}
          >
            {children}
          </ThemedText>
        </View>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const { mode } = useThemeMode();
  const colors = Colors[mode];

  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView
        type="backgroundElement"
        style={[styles.innerContainer, { borderColor: colors.border }]}
      >
        {props.children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    paddingHorizontal: Spacing.two,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
    borderWidth: 1,
    ...Shadows.card,
  },
  pressed: {
    opacity: 0.75,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: 999,
  },
  tabButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
});
