/**
 * Connect Tab — Global Internet Communication Hub
 *
 * Inspired by Discord, WhatsApp, and Telegram messaging interfaces.
 */

import { ScrollView, View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from '@/components/ui/search-bar';
import { SectionHeader } from '@/components/ui/section-header';
import { UserCard } from '@/components/ui/user-card';
import { EmptyState } from '@/components/ui/empty-state';
import { useTheme } from '@/hooks/use-theme';
import { staggerDelay } from '@/constants/animations';
import { styles } from '@/styles/explore.styles';

// ── Mock Data ──

const onlineFriends = [
  { name: 'Maya', isOnline: true },
  { name: 'Aarav', isOnline: true },
  { name: 'Priya', isOnline: true },
  { name: 'Dev', isOnline: true },
  { name: 'Ananya', isOnline: true },
];

const chatThreads = [
  {
    name: 'Maya',
    preview: 'Just sent you the design files! 🎨',
    time: 'Now',
    unread: 3,
    isOnline: true,
    isTyping: false,
  },
  {
    name: 'Aarav',
    preview: 'Meetup at 6?',
    time: '12m',
    unread: 1,
    isOnline: true,
    isTyping: true,
  },
  {
    name: 'Design Team',
    preview: 'Let\'s finalize the mesh UI tomorrow',
    time: '1h',
    unread: 0,
    isOnline: false,
    isTyping: false,
  },
  {
    name: 'Priya',
    preview: 'The Bluetooth relay is working perfectly now!',
    time: '2h',
    unread: 0,
    isOnline: true,
    isTyping: false,
  },
  {
    name: 'Dev',
    preview: 'Check the new nearby feature 📡',
    time: '5h',
    unread: 0,
    isOnline: true,
    isTyping: false,
  },
  {
    name: 'Family Group',
    preview: 'Dinner tonight? 🍕',
    time: '1d',
    unread: 0,
    isOnline: false,
    isTyping: false,
  },
];

const suggestedUsers = [
  { name: 'Rishi Kapoor', username: 'rishi', bio: 'iOS Developer · Mesh enthusiast', isOnline: true },
  { name: 'Zara Ali', username: 'zara', bio: 'UX Designer · BitChat contributor', isOnline: false },
  { name: 'Kai Chen', username: 'kaichen', bio: 'Bluetooth protocol researcher', isOnline: true },
  { name: 'Lena Schmidt', username: 'lena', bio: 'P2P networking · Open source', isOnline: false },
];

// ── Chat Row Component ──

function ChatRow({
  name,
  preview,
  time,
  unread,
  isOnline,
  isTyping,
  index,
}: {
  name: string;
  preview: string;
  time: string;
  unread: number;
  isOnline: boolean;
  isTyping: boolean;
  index: number;
}) {
  const theme = useTheme();

  return (
    <Animated.View entering={FadeInDown.delay(staggerDelay(index, 40, 50)).duration(400).springify().damping(18)}>
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
        <View
          style={[
            styles.chatRow,
            unread > 0 && { backgroundColor: theme.accentGlow },
          ]}
        >
          <Avatar name={name} size="md" showStatus isOnline={isOnline} />
          <View style={styles.chatBody}>
            <View style={styles.chatTop}>
              <ThemedText variant="labelBold" numberOfLines={1}>
                {name}
              </ThemedText>
              <ThemedText
                variant="caption"
                themeColor={unread > 0 ? 'accent' : 'textTertiary'}
              >
                {time}
              </ThemedText>
            </View>
            <View style={styles.chatPreviewRow}>
              {isTyping ? (
                <ThemedText variant="caption" themeColor="accent">
                  typing
                  <ThemedText variant="caption" themeColor="accent" style={styles.typingDots}>
                    ...
                  </ThemedText>
                </ThemedText>
              ) : (
                <ThemedText
                  variant="caption"
                  themeColor="textSecondary"
                  numberOfLines={1}
                  style={{ flex: 1 }}
                >
                  {preview}
                </ThemedText>
              )}
            </View>
          </View>
          {unread > 0 && <Badge variant="count" count={unread} />}
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ── Main Screen ──

export default function ConnectScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [query, setQuery] = useState('');

  const filteredChats = useMemo(
    () =>
      chatThreads.filter(
        (chat) =>
          chat.name.toLowerCase().includes(query.toLowerCase()) ||
          chat.preview.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top },
        ]}
        showsVerticalScrollIndicator={false}
        bounces
        keyboardDismissMode="on-drag"
      >
        {/* ── Header ── */}
        <Animated.View
          entering={FadeInDown.duration(400).springify().damping(18)}
          style={styles.header}
        >
          <ThemedText variant="h1">Connect</ThemedText>
          <ThemedText variant="bodySmall" themeColor="textSecondary">
            Chat with friends around the world
          </ThemedText>
        </Animated.View>

        {/* ── Search ── */}
        <Animated.View
          entering={FadeInDown.delay(50).duration(400).springify().damping(18)}
          style={styles.searchContainer}
        >
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search people or chats"
          />
        </Animated.View>

        {/* ── Online Friends ── */}
        <Animated.View
          entering={FadeInDown.delay(100).duration(400).springify().damping(18)}
          style={styles.onlineSection}
        >
          <View style={styles.onlineSectionHeader}>
            <SectionHeader
              title="Online"
              subtitle={`${onlineFriends.length} friends`}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.onlineRow}
          >
            {onlineFriends.map((friend) => (
              <Pressable
                key={friend.name}
                style={({ pressed }) => [
                  styles.onlineItem,
                  pressed && styles.pressed,
                ]}
              >
                <Avatar name={friend.name} size="md" showStatus isOnline />
                <ThemedText variant="caption" numberOfLines={1}>
                  {friend.name}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>

        {/* ── Recent Chats ── */}
        <View style={styles.chatsSection}>
          <View style={styles.chatsSectionHeader}>
            <SectionHeader title="Recent Chats" action="See All" />
          </View>
          {filteredChats.length > 0 ? (
            filteredChats.map((chat, index) => (
              <ChatRow key={chat.name} {...chat} index={index} />
            ))
          ) : (
            <EmptyState
              icon="💬"
              title="No chats found"
              description="Try a different search or start a new conversation"
              actionLabel="Start Chat"
              onAction={() => setQuery('')}
            />
          )}
        </View>

        {/* ── Suggested Users ── */}
        <View style={styles.suggestedSection}>
          <View style={styles.suggestedSectionHeader}>
            <SectionHeader title="Suggested" subtitle="People you may know" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suggestedRow}
          >
            {suggestedUsers.map((user, index) => (
              <UserCard
                key={user.username}
                name={user.name}
                username={user.username}
                bio={user.bio}
                isOnline={user.isOnline}
                onAddFriend={() => {}}
                index={index}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
