import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { ThemeModeProvider, type ThemeMode } from '@/context/theme-mode';

export default function TabLayout() {
  const [mode, setMode] = useState<ThemeMode>('light');
  return (
    <ThemeModeProvider value={{ mode, setMode }}>
      <ThemeProvider value={mode === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, backgroundColor: mode === 'dark' ? '#0b0b0b' : '#f7f7f7' }}>
          <AnimatedSplashOverlay />
          <AppTabs />
        </View>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}
