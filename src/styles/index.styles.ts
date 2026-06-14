import { StyleSheet } from 'react-native';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.five,
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.five,
  },
  storiesCard: {
    borderRadius: 28,
    paddingVertical: Spacing.three,
  },
  storiesRow: {
    gap: Spacing.three,
    paddingHorizontal: Spacing.two,
  },
  storyItem: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyInitial: {
    color: '#ffffff',
  },
  feed: {
    gap: Spacing.four,
  },
  postCard: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  postAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImage: {
    borderRadius: 24,
    minHeight: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImageText: {
    fontSize: 44,
    letterSpacing: 4,
  },
  postActions: {
    gap: Spacing.one,
  },
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  composer: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  composerTop: {
    gap: Spacing.one,
  },
  inputMock: {
    borderRadius: 24,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    minHeight: 64,
    justifyContent: 'center',
  },
  postButton: {
    borderRadius: 999,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    backgroundColor: '#111111',
    alignSelf: 'flex-start',
  },
  postButtonText: {
    color: '#ffffff',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
});
