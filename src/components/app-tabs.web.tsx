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
import { useThemeMode } from '@/context/theme-mode';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>YOU</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>CONNECT</TabButton>
          </TabTrigger>
          <TabTrigger name="settings" href="/settings" asChild>
            <TabButton>NEARBY</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <View style={styles.tabButtonContent}>
          <SymbolView
            tintColor={isFocused ? '#6366F1' : '#94A3B8'}
            name={
              children === 'YOU'
                ? { web: 'person', ios: 'person.fill' }
                : children === 'CONNECT'
                ? { web: 'globe', ios: 'globe' }
                : { web: 'antenna.radiowaves.left.and.right', ios: 'antenna.radiowaves.left.and.right' }
            }
            size={14}
          />
          <ThemedText type="smallBold" themeColor={isFocused ? 'text' : 'textSecondary'}>
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
      <ThemedView type="backgroundElement" style={[styles.innerContainer, { borderColor: colors.border }]}>        
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
