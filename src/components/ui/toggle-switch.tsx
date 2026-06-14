/**
 * ToggleSwitch — Custom animated toggle
 */

import { Pressable, View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';

import { Colors, Spacing } from '@/constants/theme';
import { Springs } from '@/constants/animations';
import { useThemeMode } from '@/context/theme-mode';

type ToggleSwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
};

const TRACK_WIDTH = 52;
const TRACK_HEIGHT = 31;
const THUMB_SIZE = 27;
const THUMB_MARGIN = 2;

export function ToggleSwitch({ value, onValueChange, disabled = false }: ToggleSwitchProps) {
  const { mode } = useThemeMode();
  const theme = Colors[mode];

  const progress = useSharedValue(value ? 1 : 0);

  const trackStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [mode === 'dark' ? '#1E1B4B' : '#D1D5DB', theme.accent],
    );
    return { backgroundColor };
  });

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: progress.value * (TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2),
      },
    ],
  }));

  const handlePress = () => {
    const newValue = !value;
    progress.value = withSpring(newValue ? 1 : 0, Springs.snappy);
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={handlePress} disabled={disabled} hitSlop={8}>
      <Animated.View
        style={[
          styles.track,
          trackStyle,
          disabled && styles.disabled,
        ]}
      >
        <Animated.View style={[styles.thumb, thumbStyle]}>
          <View style={[styles.thumbInner, { backgroundColor: '#FFFFFF' }]} />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
    paddingHorizontal: THUMB_MARGIN,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbInner: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  disabled: {
    opacity: 0.5,
  },
});
