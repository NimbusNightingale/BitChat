import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { ThemeModeProvider, type ThemeMode } from '@/context/theme-mode';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const theme = Colors[mode];

  return (
    <ThemeModeProvider value={{ mode, setMode }}>
      <ThemeProvider value={mode === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, backgroundColor: theme.background }}>
          <AnimatedSplashOverlay />
          <AppTabs />
        </View>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}
