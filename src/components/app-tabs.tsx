import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { Colors } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

export default function AppTabs() {
  const { mode } = useThemeMode();
  const colors = Colors[mode];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.accent}
      labelStyle={{ selected: { color: colors.accent }, color: colors.tabBarInactive }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>You</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Connect</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'bubble.left.and.bubble.right', selected: 'bubble.left.and.bubble.right.fill' }}
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Nearby</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'antenna.radiowaves.left.and.right', selected: 'antenna.radiowaves.left.and.right' }}
          src={require('@/assets/images/tabIcons/settings.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
