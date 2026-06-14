import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { styles } from '@/styles/explore.styles';
import { useTheme } from '@/hooks/use-theme';

const chats = [
  { name: 'Maya', preview: 'Sent you a new photo', time: 'Now', unread: 3, active: true },
  { name: 'Aarav', preview: 'Meetup at 6?', time: '12m', unread: 1 },
  { name: 'Design Team', preview: 'Review the feed spacing', time: '1h', unread: 0 },
  { name: 'Family', preview: 'Dinner is ready', time: '3h', unread: 0 },
];

function ChatRow({
  name,
  preview,
  time,
  unread,
  active,
}: {
  name: string;
  preview: string;
  time: string;
  unread: number;
  active?: boolean;
}) {
  return (
    <ThemedView type={active ? 'backgroundSelected' : 'backgroundElement'} style={styles.chatRow}>
      <View style={styles.avatar}>
        <ThemedText type="smallBold">{name.slice(0, 1)}</ThemedText>
      </View>
      <View style={styles.chatBody}>
        <View style={styles.chatTop}>
          <ThemedText type="smallBold">{name}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {time}
          </ThemedText>
        </View>
        <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
          {preview}
        </ThemedText>
      </View>
      {unread > 0 ? (
        <View style={styles.badge}>
          <ThemedText type="smallBold" style={styles.badgeText}>
            {unread}
          </ThemedText>
        </View>
      ) : null}
    </ThemedView>
  );
}

export default function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.contentContainer,
        {
          paddingTop: insets.top + Spacing.three,
          paddingBottom: insets.bottom + BottomTabInset + Spacing.five,
        },
      ]}
      decelerationRate="fast"
      bounces
      scrollEventThrottle={16}
      keyboardDismissMode="on-drag"
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.shell}>
        <ThemedView type="backgroundElement" style={styles.header}>
          <ThemedText type="smallBold" themeColor="textSecondary" style={styles.kicker}>
            Messages
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            All chats
          </ThemedText>
          <ThemedText type="default" themeColor="textSecondary" style={styles.subtitle}>
            Direct messages, group chats, and quick replies in one clean inbox.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.searchBar}>
          <ThemedText type="small" themeColor="textSecondary">
            Search people or chats
          </ThemedText>
        </ThemedView>

        <View style={styles.threadList}>
          {chats.map((chat) => (
            <Pressable key={chat.name} style={({ pressed }) => pressed && styles.pressed}>
              <ChatRow {...chat} />
            </Pressable>
          ))}
        </View>
      </ThemedView>
    </ScrollView>
  );
}
