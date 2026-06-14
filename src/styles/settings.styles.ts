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

  // ── Mesh Status ──
  meshStatusSection: {
    paddingHorizontal: Spacing.four,
    marginBottom: Spacing.four,
  },

  // ── Scanning Animation ──
  scanSection: {
    alignItems: 'center',
    paddingVertical: Spacing.five,
    gap: Spacing.three,
  },
  radarContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radarRing: {
    position: 'absolute',
    borderWidth: 1.5,
    borderRadius: 999,
  },
  radarCenter: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  scanLabel: {
    textAlign: 'center',
  },

  // ── Devices ──
  devicesSection: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.two,
  },
  devicesSectionHeader: {
    marginBottom: Spacing.one,
  },

  // ── Quick Actions ──
  actionsSection: {
    paddingHorizontal: Spacing.four,
    marginTop: Spacing.five,
    gap: Spacing.three,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.four,
    borderRadius: Radii.xl,
    gap: Spacing.two,
  },
  actionIcon: {
    fontSize: 28,
  },

  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
});
