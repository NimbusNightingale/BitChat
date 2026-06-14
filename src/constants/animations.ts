/**
 * BitChat Design System — Animation Presets
 *
 * Shared animation configs for react-native-reanimated 4.x.
 * Spring presets, durations, stagger helpers, and entrance effects.
 */

import { Easing, type WithSpringConfig, type WithTimingConfig } from 'react-native-reanimated';

// ────────────────────────────────────────────
// Spring Presets
// ────────────────────────────────────────────

export const Springs: Record<string, WithSpringConfig> = {
  /** Soft, slow settle — profile cards, large elements */
  gentle: {
    damping: 20,
    stiffness: 120,
    mass: 1,
  },

  /** Quick, responsive — buttons, toggles */
  snappy: {
    damping: 18,
    stiffness: 300,
    mass: 0.8,
  },

  /** Playful overshoot — badges, notifications */
  bouncy: {
    damping: 12,
    stiffness: 200,
    mass: 0.6,
  },

  /** Tab transitions, overlays */
  smooth: {
    damping: 22,
    stiffness: 180,
    mass: 0.9,
  },
};

// ────────────────────────────────────────────
// Timing Presets
// ────────────────────────────────────────────

export const Durations = {
  fast: 150,
  normal: 250,
  slow: 400,
  entrance: 600,
  exit: 200,
} as const;

export const Timings: Record<string, WithTimingConfig> = {
  /** Quick micro-interactions */
  fast: {
    duration: Durations.fast,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  },

  /** Standard transitions */
  normal: {
    duration: Durations.normal,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  },

  /** Slow, smooth reveals */
  slow: {
    duration: Durations.slow,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  },

  /** Entrance animations — ease-out expo */
  entrance: {
    duration: Durations.entrance,
    easing: Easing.out(Easing.exp),
  },

  /** Exit animations — ease-in */
  exit: {
    duration: Durations.exit,
    easing: Easing.in(Easing.ease),
  },
};

// ────────────────────────────────────────────
// Stagger Helper
// ────────────────────────────────────────────

/**
 * Calculate stagger delay for a child at given index.
 * @param index - Index of the item in the list
 * @param baseDelay - Base delay between items in ms (default: 50)
 * @param initialDelay - Delay before the first item starts (default: 100)
 */
export function staggerDelay(
  index: number,
  baseDelay: number = 50,
  initialDelay: number = 100,
): number {
  return initialDelay + index * baseDelay;
}

// ────────────────────────────────────────────
// Entrance Animation Configs
// ────────────────────────────────────────────

/** Vertical slide distance for entrance animations */
export const EntranceOffset = {
  small: 12,
  medium: 24,
  large: 40,
} as const;

/** Opacity + translate Y for fade-in-up / fade-in-down */
export const EntranceConfig = {
  fadeInUp: {
    initialOpacity: 0,
    initialTranslateY: EntranceOffset.medium,
    duration: Durations.entrance,
  },
  fadeInDown: {
    initialOpacity: 0,
    initialTranslateY: -EntranceOffset.medium,
    duration: Durations.entrance,
  },
  scaleIn: {
    initialOpacity: 0,
    initialScale: 0.85,
    duration: Durations.normal,
  },
  slideInRight: {
    initialOpacity: 0,
    initialTranslateX: 30,
    duration: Durations.entrance,
  },
} as const;

// ────────────────────────────────────────────
// Pulse Animation Timing (for scanning, online indicators)
// ────────────────────────────────────────────

export const PulseConfig = {
  /** Slow pulse for online indicators */
  slow: {
    duration: 2000,
    minScale: 1,
    maxScale: 1.15,
    minOpacity: 0.4,
    maxOpacity: 1,
  },
  /** Fast pulse for active scanning */
  fast: {
    duration: 1200,
    minScale: 0.8,
    maxScale: 2.5,
    minOpacity: 0.6,
    maxOpacity: 0,
  },
} as const;
