import { StyleSheet } from "react-native";

import { MaxContentWidth, Spacing } from "@/constants/theme";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Spacing.four,
  },
  shell: {
    width: "100%",
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
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 640,
  },
  subtitle: {
    maxWidth: 640,
  },
  searchBar: {
    borderRadius: 28,
    paddingVertical: Spacing.three,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    paddingHorizontal: Spacing.four,
  },
  searchInput: {
    fontSize: 16,
    lineHeight: 24,
    minHeight: 40,
  },
  threadList: {
    gap: Spacing.two,
  },
  chatDetail: {
    borderRadius: 28,
    padding: Spacing.four,
    marginTop: Spacing.four,
  },
  chatDetailPreview: {
    marginVertical: Spacing.one,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    borderRadius: 28,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  chatBody: {
    flex: 1,
    gap: 4,
  },
  chatTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.two,
  },
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
});
