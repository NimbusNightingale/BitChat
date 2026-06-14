/**
 * SearchBar — Premium search input with glass effect
 */

import { useState, useRef } from 'react';
import { View, TextInput, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { Shadows } from '@/constants/shadows';
import { Springs } from '@/constants/animations';
import { useThemeMode } from '@/context/theme-mode';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  style,
}: SearchBarProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];
  const inputRef = useRef<TextInput>(null);
  const focusScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: focusScale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: theme.border,
        },
        Shadows.subtle,
        animatedStyle,
        style,
      ]}
    >
      <ThemedText style={styles.searchIcon}>🔍</ThemedText>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.textTertiary}
        style={[styles.input, { color: theme.text }]}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => {
          focusScale.value = withSpring(1.01, Springs.snappy);
        }}
        onBlur={() => {
          focusScale.value = withSpring(1, Springs.snappy);
        }}
      />
      {value.length > 0 ? (
        <Pressable
          onPress={() => {
            onChangeText('');
            inputRef.current?.focus();
          }}
          style={styles.clearButton}
          hitSlop={8}
        >
          <View style={[styles.clearCircle, { backgroundColor: theme.textTertiary }]}>
            <ThemedText style={styles.clearText}>✕</ThemedText>
          </View>
        </Pressable>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radii.full,
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    gap: Spacing.two,
  },
  searchIcon: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    paddingVertical: Spacing.one,
  },
  clearButton: {
    padding: 2,
  },
  clearCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
});
