'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps, AnimatePresenceProps } from 'framer-motion';

// Motion Div
type MotionDivProps = HTMLMotionProps<'div'>;
export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(function MotionDiv(
  { children, ...props },
  ref
) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

// Motion Article (for semantic HTML)
type MotionArticleProps = HTMLMotionProps<'article'>;
export const MotionArticle = React.forwardRef<HTMLElement, MotionArticleProps>(
  function MotionArticle({ children, ...props }, ref) {
    return (
      <motion.article ref={ref} {...props}>
        {children}
      </motion.article>
    );
  }
);

// Motion Section
type MotionSectionProps = HTMLMotionProps<'section'>;
export const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  }
);

// Motion H1
type MotionH1Props = HTMLMotionProps<'h1'>;
export const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(function MotionH1(
  { children, ...props },
  ref
) {
  return (
    <motion.h1 ref={ref} {...props}>
      {children}
    </motion.h1>
  );
});

// Motion H2
type MotionH2Props = HTMLMotionProps<'h2'>;
export const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(function MotionH2(
  { children, ...props },
  ref
) {
  return (
    <motion.h2 ref={ref} {...props}>
      {children}
    </motion.h2>
  );
});

// Motion P
type MotionPProps = HTMLMotionProps<'p'>;
export const MotionP = React.forwardRef<HTMLParagraphElement, MotionPProps>(function MotionP(
  { children, ...props },
  ref
) {
  return (
    <motion.p ref={ref} {...props}>
      {children}
    </motion.p>
  );
});

// Motion Button
type MotionButtonProps = HTMLMotionProps<'button'>;
export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  function MotionButton({ children, ...props }, ref) {
    return (
      <motion.button ref={ref} {...props}>
        {children}
      </motion.button>
    );
  }
);

// Motion Img
type MotionImgProps = HTMLMotionProps<'img'>;
export const MotionImg = React.forwardRef<HTMLImageElement, MotionImgProps>(
  function MotionImg(props, ref) {
    return <motion.img ref={ref} {...props} />;
  }
);

// AnimatePresence Wrapper
interface ClientAnimatePresenceProps extends AnimatePresenceProps {
  children: React.ReactNode;
}
export function ClientAnimatePresence({ children, ...props }: ClientAnimatePresenceProps) {
  return <AnimatePresence {...props}>{children}</AnimatePresence>;
}

// ============================================
// Common Animation Variants
// ============================================

export const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const slideInFromLeftVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const slideInFromRightVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const scaleVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
