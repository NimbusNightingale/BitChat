import { Pressable, ScrollView, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { styles } from "@/styles/index.styles";

const stories = ["Maya", "Aarav", "Design", "Family", "Live"];

const initialPosts = [
  {
    name: "Maya",
    time: "2h",
    caption: "BitChat feed test in monochrome. Clean, bold, and easy to scan.",
    likes: "128",
    comments: "24",
    imageLabel: "NEW",
  },
  {
    name: "Design Team",
    time: "5h",
    caption: "The new chat layout feels more like a social feed now.",
    likes: "82",
    comments: "11",
    imageLabel: "UI",
  },
];

function StoryBubble({ name }: { name: string }) {
  return (
    <View style={styles.storyItem}>
      <View style={styles.storyRing}>
        <View style={styles.storyAvatar}>
          <ThemedText type="smallBold" style={styles.storyInitial}>
            {name.slice(0, 1)}
          </ThemedText>
        </View>
      </View>
      <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
        {name}
      </ThemedText>
    </View>
  );
}

function PostCard({
  name,
  time,
  caption,
  likes,
  comments,
  imageLabel,
}: {
  name: string;
  time: string;
  caption: string;
  likes: string;
  comments: string;
  imageLabel: string;
}) {
  return (
    <ThemedView type="backgroundElement" style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.postUser}>
          <View style={styles.postAvatar}>
            <ThemedText type="smallBold">{name.slice(0, 1)}</ThemedText>
          </View>
          <View>
            <ThemedText type="smallBold">{name}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {time}
            </ThemedText>
          </View>
        </View>
        <ThemedText type="smallBold" themeColor="textSecondary">
          ...
        </ThemedText>
      </View>

      <ThemedView type="backgroundSelected" style={styles.postImage}>
        <ThemedText type="subtitle" style={styles.postImageText}>
          {imageLabel}
        </ThemedText>
      </ThemedView>

      <View style={styles.postActions}>
        <View style={styles.actionRow}>
          <ThemedText type="smallBold">♡</ThemedText>
          <ThemedText type="smallBold">💬</ThemedText>
          <ThemedText type="smallBold">↗</ThemedText>
        </View>
        <ThemedText type="small" themeColor="textSecondary">
          {likes} likes · {comments} comments
        </ThemedText>
      </View>

      <ThemedText type="default">
        <ThemedText type="smallBold">{name}</ThemedText> {caption}
      </ThemedText>
    </ThemedView>
  );
}

export default function HomeScreen() {
  const theme = useTheme();
  const [draft, setDraft] = useState("");
  const [feedPosts, setFeedPosts] = useState(initialPosts);

  const addPost = () => {
    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }

    setFeedPosts([
      {
        name: "You",
        time: "Just now",
        caption: trimmed,
        likes: "0",
        comments: "0",
        imageLabel: "POST",
      },
      ...feedPosts,
    ]);
    setDraft("");
  };

  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          decelerationRate="fast"
          bounces
          scrollEventThrottle={16}
          keyboardDismissMode="on-drag"
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topBar}>
            <ThemedText type="subtitle">BitChat</ThemedText>
            <ThemedText type="smallBold" themeColor="textSecondary">
              Feed
            </ThemedText>
          </View>

          <ThemedView type="backgroundElement" style={styles.storiesCard}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.storiesRow}
            >
              {stories.map((story) => (
                <StoryBubble key={story} name={story} />
              ))}
            </ScrollView>
          </ThemedView>

          <View style={styles.feed}>
            {feedPosts.map((post) => (
              <PostCard
                key={`${post.name}-${post.time}-${post.caption}`}
                {...post}
              />
            ))}
          </View>

          <ThemedView type="backgroundElement" style={styles.composer}>
            <View style={styles.composerTop}>
              <ThemedText type="smallBold">Create post</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Share a quick update or photo
              </ThemedText>
            </View>
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder="What’s happening?"
              placeholderTextColor={theme.textSecondary}
              value={draft}
              onChangeText={setDraft}
              multiline
              numberOfLines={3}
              returnKeyType="done"
              onSubmitEditing={addPost}
            />
            <Pressable
              onPress={addPost}
              style={({ pressed }) => [
                styles.postButton,
                pressed && styles.pressed,
              ]}
            >
              <ThemedText type="smallBold" style={styles.postButtonText}>
                Post
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
