import { StyleSheet } from 'react-native';

import { MaxContentWidth, Spacing } from '@/constants/theme';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
  },
  shell: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
  },
  header: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  kicker: {
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    maxWidth: 640,
  },
  subtitle: {
    maxWidth: 640,
  },
  section: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  sectionHeader: {
    gap: Spacing.one,
  },
  sectionTitle: {
    letterSpacing: -0.5,
  },
  toggleGrid: {
    gap: Spacing.two,
  },
  toggle: {
    borderRadius: 28,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    gap: Spacing.one,
  },
  toggleActive: {
    backgroundColor: '#111111',
    borderColor: '#111111',
  },
  toggleText: {
  },
  toggleTextActive: {
    color: '#ffffff',
  },
  preview: {
    borderRadius: 24,
    padding: Spacing.four,
    gap: Spacing.one,
  },
  previewLabel: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.86,
    transform: [{ scale: 0.99 }],
  },
});
