/**
 * BitChat Design System — Theme Tokens
 *
 * Premium color palette, spacing, radius, and gradient definitions
 * for both dark and light modes.
 */

import '@/global.css';

import { Platform } from 'react-native';

// ────────────────────────────────────────────
// Color Palette
// ────────────────────────────────────────────

export const Colors = {
  light: {
    // Backgrounds
    text: '#0F172A',
    background: '#F8FAFF',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#EEF2FF',
    backgroundSubtle: '#F1F5F9',

    // Text
    textSecondary: '#64748B',
    textTertiary: '#94A3B8',

    // Accent
    accent: '#6366F1',
    accentLight: '#818CF8',
    accentSoft: '#EEF2FF',
    accentGlow: 'rgba(99, 102, 241, 0.15)',

    // Semantic
    success: '#10B981',
    successSoft: '#D1FAE5',
    warning: '#F59E0B',
    warningSoft: '#FEF3C7',
    error: '#EF4444',
    errorSoft: '#FEE2E2',

    // Status
    online: '#10B981',
    offline: '#94A3B8',
    nearby: '#06B6D4',
    nearbySoft: '#CFFAFE',

    // Surface
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    card: '#FFFFFF',
    cardElevated: '#FFFFFF',

    // Misc
    separator: '#E2E8F0',
    overlay: 'rgba(15, 23, 42, 0.4)',
    shimmer: '#E2E8F0',

    // Message bubbles
    bubbleSent: '#6366F1',
    bubbleSentText: '#FFFFFF',
    bubbleReceived: '#F1F5F9',
    bubbleReceivedText: '#0F172A',

    // Tab bar
    tabBarBackground: '#FFFFFF',
    tabBarBorder: '#E2E8F0',
    tabBarActive: '#6366F1',
    tabBarInactive: '#94A3B8',
  },
  dark: {
    // Backgrounds
    text: '#F1F5F9',
    background: '#030014',
    backgroundElement: '#0F0B2E',
    backgroundSelected: '#1A1545',
    backgroundSubtle: '#0A0720',

    // Text
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',

    // Accent
    accent: '#818CF8',
    accentLight: '#A5B4FC',
    accentSoft: '#1E1B4B',
    accentGlow: 'rgba(129, 140, 248, 0.2)',

    // Semantic
    success: '#34D399',
    successSoft: 'rgba(52, 211, 153, 0.15)',
    warning: '#FBBF24',
    warningSoft: 'rgba(251, 191, 36, 0.15)',
    error: '#F87171',
    errorSoft: 'rgba(248, 113, 113, 0.15)',

    // Status
    online: '#34D399',
    offline: '#64748B',
    nearby: '#22D3EE',
    nearbySoft: 'rgba(34, 211, 238, 0.15)',

    // Surface
    border: '#1E1B4B',
    borderLight: '#150F36',
    card: '#0F0B2E',
    cardElevated: '#150F36',

    // Misc
    separator: '#1E1B4B',
    overlay: 'rgba(3, 0, 20, 0.7)',
    shimmer: '#1E1B4B',

    // Message bubbles
    bubbleSent: '#6366F1',
    bubbleSentText: '#FFFFFF',
    bubbleReceived: '#150F36',
    bubbleReceivedText: '#F1F5F9',

    // Tab bar
    tabBarBackground: '#0A0720',
    tabBarBorder: '#1E1B4B',
    tabBarActive: '#818CF8',
    tabBarInactive: '#64748B',
  },
} as const;

export type ThemeColor = keyof (typeof Colors)['light'] & keyof (typeof Colors)['dark'];

// ────────────────────────────────────────────
// Gradients
// ────────────────────────────────────────────

export const Gradients = {
  dark: {
    profileHeader: ['#1E1B4B', '#0F0B2E', '#030014'] as const,
    accentSubtle: ['rgba(129,140,248,0.12)', 'rgba(99,102,241,0.04)'] as const,
    meshRadar: ['rgba(34,211,238,0.3)', 'rgba(34,211,238,0)'] as const,
    cardShine: ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0)'] as const,
    avatarRing: ['#818CF8', '#6366F1', '#4F46E5'] as const,
  },
  light: {
    profileHeader: ['#EEF2FF', '#F8FAFF', '#FFFFFF'] as const,
    accentSubtle: ['rgba(99,102,241,0.08)', 'rgba(99,102,241,0.02)'] as const,
    meshRadar: ['rgba(6,182,212,0.2)', 'rgba(6,182,212,0)'] as const,
    cardShine: ['rgba(255,255,255,0.8)', 'rgba(255,255,255,0)'] as const,
    avatarRing: ['#6366F1', '#818CF8', '#A5B4FC'] as const,
  },
} as const;

// ────────────────────────────────────────────
// Avatar Gradient Palette (unique per user)
// ────────────────────────────────────────────

export const AvatarGradients = [
  ['#6366F1', '#8B5CF6'],
  ['#EC4899', '#F43F5E'],
  ['#06B6D4', '#0EA5E9'],
  ['#10B981', '#059669'],
  ['#F59E0B', '#EF4444'],
  ['#8B5CF6', '#EC4899'],
  ['#14B8A6', '#06B6D4'],
  ['#F97316', '#F59E0B'],
] as const;

// ────────────────────────────────────────────
// Fonts
// ────────────────────────────────────────────

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

// ────────────────────────────────────────────
// Spacing
// ────────────────────────────────────────────

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 48,
  seven: 64,
  eight: 80,
  nine: 96,
} as const;

// ────────────────────────────────────────────
// Border Radius
// ────────────────────────────────────────────

export const Radii = {
  xs: 8,
  sm: 12,
  md: 20,
  lg: 28,
  xl: 32,
  full: 999,
} as const;

// ────────────────────────────────────────────
// Layout
// ────────────────────────────────────────────

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
