import { StyleSheet } from 'react-native';

import { BottomTabInset, MaxContentWidth, Spacing, Radii } from '@/constants/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: BottomTabInset + Spacing.five,
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
  },

  // ── Profile Header ──
  profileHeader: {
    alignItems: 'center',
    paddingTop: Spacing.five,
    paddingBottom: Spacing.five,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  avatarRing: {
    padding: 4,
    borderRadius: 999,
    borderWidth: 2.5,
  },
  nameGroup: {
    alignItems: 'center',
    gap: Spacing.half,
  },
  displayName: {
    textAlign: 'center',
  },
  username: {
    textAlign: 'center',
  },
  bio: {
    textAlign: 'center',
    maxWidth: 280,
    marginTop: Spacing.one,
  },
  userIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.one,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one + 2,
    borderRadius: Radii.full,
  },
  userId: {
    letterSpacing: 0.5,
  },

  // ── Stats ──
  statsSection: {
    paddingLeft: Spacing.four,
    marginTop: Spacing.one,
  },
  statsRow: {
    gap: Spacing.three,
    paddingRight: Spacing.four,
  },

  // ── Sections ──
  section: {
    marginTop: Spacing.five,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  sectionCard: {
    borderRadius: Radii.xl,
    overflow: 'hidden',
  },
  sectionCardInner: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
  },

  // ── Footer ──
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.six,
    gap: Spacing.two,
  },
  footerLogo: {
    fontSize: 28,
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
});
