/**
 * MessageBubble — Chat message bubble with sent/received styling
 */

import { View, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ThemedText } from '../themed-text';

import { Colors, Spacing, Radii } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-mode';

type MessageBubbleProps = {
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead?: boolean;
  showTail?: boolean;
  index?: number;
};

export function MessageBubble({
  text,
  timestamp,
  isSent,
  isRead = false,
  showTail = true,
  index = 0,
}: MessageBubbleProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 30).duration(300).springify().damping(18)}
      style={[
        styles.row,
        isSent ? styles.rowSent : styles.rowReceived,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isSent
            ? [styles.bubbleSent, { backgroundColor: theme.bubbleSent }]
            : [styles.bubbleReceived, { backgroundColor: theme.bubbleReceived }],
        ]}
      >
        <ThemedText
          variant="body"
          style={{ color: isSent ? theme.bubbleSentText : theme.bubbleReceivedText }}
        >
          {text}
        </ThemedText>
        <View style={styles.meta}>
          <ThemedText
            variant="caption"
            style={{
              color: isSent
                ? `${theme.bubbleSentText}99`
                : theme.textTertiary,
            }}
          >
            {timestamp}
          </ThemedText>
          {isSent && (
            <ThemedText
              style={{
                fontSize: 12,
                color: isRead ? '#34D399' : `${theme.bubbleSentText}66`,
              }}
            >
              {isRead ? '✓✓' : '✓'}
            </ThemedText>
          )}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: Spacing.three,
    marginVertical: 2,
  },
  rowSent: {
    alignItems: 'flex-end',
  },
  rowReceived: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
    gap: Spacing.one,
  },
  bubbleSent: {
    borderRadius: Radii.md,
    borderBottomRightRadius: 6,
  },
  bubbleReceived: {
    borderRadius: Radii.md,
    borderBottomLeftRadius: 6,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    alignSelf: 'flex-end',
  },
});
