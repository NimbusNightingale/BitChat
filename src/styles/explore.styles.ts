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

  // ── Header ──
  header: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.three,
    gap: Spacing.one,
  },

  // ── Search ──
  searchContainer: {
    paddingHorizontal: Spacing.four,
    marginBottom: Spacing.three,
  },

  // ── Online Friends ──
  onlineSection: {
    paddingLeft: Spacing.four,
    marginBottom: Spacing.three,
  },
  onlineSectionHeader: {
    paddingRight: Spacing.four,
    marginBottom: Spacing.three,
  },
  onlineRow: {
    gap: Spacing.four,
    paddingRight: Spacing.four,
  },
  onlineItem: {
    alignItems: 'center',
    gap: Spacing.one,
    width: 60,
  },

  // ── Chats ──
  chatsSection: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.two,
  },
  chatsSectionHeader: {
    marginBottom: Spacing.one,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderRadius: Radii.lg,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
  },
  chatRowActive: {},
  chatBody: {
    flex: 1,
    gap: 3,
  },
  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatPreviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  typingDots: {
    fontSize: 11,
    letterSpacing: 2,
  },

  // ── Suggested Users ──
  suggestedSection: {
    paddingLeft: Spacing.four,
    marginTop: Spacing.five,
  },
  suggestedSectionHeader: {
    paddingRight: Spacing.four,
    marginBottom: Spacing.three,
  },
  suggestedRow: {
    gap: Spacing.three,
    paddingRight: Spacing.four,
  },

  // ── Pressed ──
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
