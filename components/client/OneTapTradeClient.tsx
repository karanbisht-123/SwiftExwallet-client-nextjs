'use client';

import { useRef, useEffect, useState, useMemo, JSX } from 'react';
import { motion, AnimatePresence, useAnimation, type Variants } from 'framer-motion';

import {
  Wallet,
  Banknote,
  Repeat,
  RefreshCw,
  Info,
  Check,
  ChevronRight,
  ArrowRightCircle,
  MessageCircle,
} from 'lucide-react';

interface FlowItem {
  name: string;
  icon: JSX.Element;
  color: string;
  lightColor: string;
  borderColor: string;
  description: string;
  detailedMessage: string;
}

const OneTapTradeClient: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const flowContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isFlowVisible, setIsFlowVisible] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [showParticles, setShowParticles] = useState<boolean>(false);
  const [isLongPressing, setIsLongPressing] = useState<boolean>(false);
  const flowControls = useAnimation();
  const autoAdvanceTimerRef = useRef<number | null>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const debouncedScroll = useRef<number | null>(null);

  const flowItems: FlowItem[] = useMemo(
    () => [
      {
        name: 'Choose any Multi Chain assets',
        icon: <Banknote className="h-5 w-5" />,
        color: 'bg-green-600',
        lightColor: 'bg-green-100',
        borderColor: 'border-green-200',
        description: 'Select any Asset from your wallet',
        detailedMessage:
          'Choose any Multi Chain assets in your wallet. Our system supports all major Asset for cross-chain transfers.',
      },
      {
        name: 'Automated Swap & Bridging to USDC',
        icon: <Repeat className="h-5 w-5" />,
        color: 'bg-blue-600',
        lightColor: 'bg-blue-100',
        borderColor: 'border-blue-200',
        description: 'Cross-chain bridge converts Asset automatically',
        detailedMessage:
          'Our smart cross-chain bridge handles all the complex operations with one simple tap. Your Asset are converted and bridged in a single transaction.',
      },
      {
        name: ' USDC -> Trade on SDEX',
        icon: <Wallet className="h-5 w-5" />,
        color: 'bg-purple-600',
        lightColor: 'bg-purple-100',
        borderColor: 'border-purple-200',
        description: 'USDC delivered to your wallet',
        detailedMessage: 'USDC is delivered directly to your Trade Wallet. You are ready to trade!',
      },
    ],
    []
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const flowItemVariants: Variants = {
    inactive: { opacity: 0.7, scale: 0.95 },
    active: {
      opacity: 1,
      scale: 1,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    },
    completed: {
      opacity: 0.9,
      scale: 0.98,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const messageBoxVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.15,
      },
    },
  };

  const handleReplayVideo = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Video playback failed:', e));
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsFlowVisible(true);
          flowControls.start('visible');
          setTimeout(() => setShowParticles(true), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (flowContainerRef.current) {
      observer.observe(flowContainerRef.current);
    }

    return () => {
      if (flowContainerRef.current) {
        observer.unobserve(flowContainerRef.current);
      }
    };
  }, [flowControls]);

  useEffect(() => {
    if (autoAdvanceTimerRef.current !== null) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    if (autoAdvance && !isTransitioning && !isLongPressing) {
      autoAdvanceTimerRef.current = window.setTimeout(() => {
        setActiveStep(prev => {
          const nextStep = prev < flowItems.length - 1 ? prev + 1 : 0;
          return nextStep;
        });
      }, 3000);
    }
    return () => {
      if (autoAdvanceTimerRef.current !== null) {
        window.clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
    };
  }, [activeStep, autoAdvance, isTransitioning, flowItems.length, isLongPressing]);
  useEffect(() => {
    if (scrollContainerRef.current && isFlowVisible) {
      const container = scrollContainerRef.current;
      const activeStepElement = container.querySelector(`[data-step="${activeStep}"]`);

      if (activeStepElement) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeStepElement.getBoundingClientRect();
        const scrollPos =
          activeRect.left - containerRect.left - containerRect.width / 2 + activeRect.width / 2;

        container.scrollTo({
          left: scrollPos + container.scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeStep, isFlowVisible]);
  const handleTouchStart = (): void => {
    longPressTimerRef.current = window.setTimeout(() => {
      setIsLongPressing(true);
      setAutoAdvance(false);
    }, 500);
  };

  const handleTouchEnd = (): void => {
    if (longPressTimerRef.current) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    if (isLongPressing) {
      setIsLongPressing(false);
      setTimeout(() => setAutoAdvance(true), 2000);
    } else {
      setAutoAdvance(false);
      setTimeout(() => setAutoAdvance(true), 5000);
    }
  };
  const handleStepChange = (step: number) => {
    if (isTransitioning) return;
    setAutoAdvance(false);
    if (autoAdvanceTimerRef.current) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setIsTransitioning(true);
    setActiveStep(step);
    const resumeTimer = window.setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setAutoAdvance(true), 1000);
    }, 500);

    return () => window.clearTimeout(resumeTimer);
  };
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const items = container.querySelectorAll('[data-step]');
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestItem = null;
    let closestDistance = Infinity;

    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(itemCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });

    if (closestItem) {
      const step = parseInt((closestItem as HTMLElement).getAttribute('data-step') || '0', 10);
      if (step !== activeStep) {
        handleStepChange(step);
      }
    }
  };
  const handleScrollDebounced = () => {
    if (debouncedScroll.current) {
      window.clearTimeout(debouncedScroll.current);
    }
    debouncedScroll.current = window.setTimeout(() => {
      handleScroll();
    }, 100);
  };
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        window.clearTimeout(autoAdvanceTimerRef.current);
      }
      if (longPressTimerRef.current) {
        window.clearTimeout(longPressTimerRef.current);
      }
      if (debouncedScroll.current) {
        window.clearTimeout(debouncedScroll.current);
      }
    };
  }, []);

  const Particles = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {showParticles &&
          Array.from({ length: 30 }).map((_, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-full ${
                idx % 3 === 0 ? 'bg-green-500' : idx % 3 === 1 ? 'bg-blue-500' : 'bg-purple-500'
              }`}
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0.1 + Math.random() * 0.3,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [null, -100 - Math.random() * 300],
                x: [null, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                repeatDelay: Math.random() * 5,
              }}
              style={{
                width: 3 + Math.random() * 5,
                height: 3 + Math.random() * 5,
              }}
            />
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto md:px-4 pt-4 lg:py-6 md:rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 min-h-screen flex flex-col relative">
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
          1-Tap Bridge & Trade
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Use the USDT in your wallet to trade any Asset across chains. Fast. Secure. One tap.
        </p>
      </motion.div>

      <motion.div
        ref={flowContainerRef}
        initial="hidden"
        animate={isFlowVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-6 lg:mb-6 bg-white rounded-xl rounded-b-none lg:rounded-b-xl md:shadow-md border border-slate-200/80 overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.h3
          variants={itemVariants}
          className="text-lg font-bold text-blue-900 mb-4 text-center flex items-center justify-center"
        >
          <motion.div
            animate={{
              x: [0, 5, 0],
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                duration: 1.5,
                ease: 'easeInOut',
              },
            }}
          >
            <ArrowRightCircle className="mr-2 h-5 w-5" />
          </motion.div>
          How It Works
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="md:hidden text-center text-sm text-blue-600 mb-2 flex items-center justify-center"
        >
          <motion.div
            animate={{
              x: [-3, 3, -3],
              scale: [1, 1.2, 1],
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                duration: 1.5,
                ease: 'easeInOut',
              },
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
          <span className="mx-1">Swipe to see all steps</span>
          <motion.div
            animate={{
              x: [-3, 3, -3],
              scale: [1, 1.2, 1],
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                duration: 1.5,
                ease: 'easeInOut',
              },
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4 md:px-4 relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-2 hide-scrollbar flex items-center justify-start md:justify-center snap-x snap-mandatory"
            onScroll={handleScrollDebounced}
          >
            <div className="flex items-center min-w-max relative">
              {flowItems.map((item, idx) => (
                <div key={idx} className="flex items-center snap-center" data-step={idx}>
                  <motion.div
                    variants={flowItemVariants}
                    initial="inactive"
                    animate={
                      activeStep === idx ? 'active' : activeStep > idx ? 'completed' : 'inactive'
                    }
                    className="cursor-pointer relative z-10"
                    onClick={() => handleStepChange(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span
                      className={`px-4 py-3 ${
                        activeStep >= idx ? item.color : 'bg-gray-400'
                      } text-white rounded-xl shadow-md font-medium flex items-center space-x-2`}
                    >
                      <motion.span
                        animate={
                          activeStep === idx && autoAdvance && !isLongPressing
                            ? {
                                scale: [1, 1.15, 1],
                                transition: {
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: 'reverse',
                                  duration: 1,
                                  ease: 'easeInOut',
                                },
                              }
                            : {}
                        }
                        className="bg-white/20 p-1 rounded-xl"
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm">{item.name}</span>

                      <motion.div
                        className={`h-4 w-4 flex items-center justify-center rounded-full ${
                          activeStep > idx ? 'bg-white' : 'bg-white/30'
                        }`}
                        animate={
                          activeStep > idx
                            ? {
                                scale: [1, 1.2, 1],
                                transition: {
                                  duration: 0.5,
                                  repeat: 1,
                                  repeatDelay: 2,
                                },
                              }
                            : {}
                        }
                      >
                        <Check
                          className={`h-3 w-3 ${
                            activeStep > idx ? 'text-green-600' : 'text-gray-400'
                          }`}
                        />
                      </motion.div>
                    </span>

                    {activeStep === idx && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl -z-10 ${item.color}`}
                        initial={{ opacity: 0 }}
                        animate={
                          autoAdvance && !isLongPressing
                            ? {
                                opacity: [0.2, 0.4, 0.2],
                                scale: [1, 1.1, 1],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: 'reverse',
                                },
                              }
                            : {
                                opacity: 0.3,
                                scale: 1.05,
                              }
                        }
                        style={{ filter: 'blur(8px)' }}
                      />
                    )}
                  </motion.div>

                  {idx < flowItems.length - 1 && (
                    <div className="relative mx-1 md:mx-2 w-4 h-10 flex items-center justify-center">
                      <motion.div
                        className="absolute top-1/2 -left-2 w-full h-2 bg-gray-200 -z-10"
                        style={{
                          transformOrigin: 'left center',
                        }}
                      />
                      <motion.div
                        className={`absolute top-1/2 -left-2 w-[200%] h-2 ${
                          activeStep > idx ? flowItems[idx].color : 'bg-gray-300'
                        } -z-5`}
                        style={{
                          transformOrigin: 'left center',
                          scaleX: activeStep > idx ? 1 : 0,
                        }}
                        animate={
                          activeStep === idx && autoAdvance && !isLongPressing
                            ? {
                                scaleX: [0, 1],
                                transition: {
                                  duration: 1.5,
                                  ease: 'easeInOut',
                                },
                              }
                            : activeStep > idx
                              ? { scaleX: 1 }
                              : { scaleX: 0 }
                        }
                      />

                      {activeStep === idx && showParticles && autoAdvance && !isLongPressing && (
                        <motion.div
                          className="absolute top-1/2 left-0 -translate-y-1/2 z-10 flex items-center"
                          animate={{
                            x: ['0%', '200%'],
                            transition: {
                              duration: 1.5,
                              ease: 'easeInOut',
                              repeat: 1,
                              repeatDelay: 0.5,
                            },
                          }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full ${flowItems[idx].color}`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 1, 0.8],
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                              },
                            }}
                          />
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" key={`animation-${activeStep}`}>
          <motion.div
            key={`step-${activeStep}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={messageBoxVariants}
            className="mx-2 md:mx-8 mb-4 relative"
            onAnimationComplete={() => setIsTransitioning(false)}
          >
            <div
              className={`p-5 rounded-xl ${
                flowItems[activeStep]?.lightColor || flowItems[0].lightColor
              } border ${flowItems[activeStep]?.borderColor || flowItems[0].borderColor} shadow-sm`}
            >
              <div
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 ${
                  flowItems[activeStep]?.lightColor || flowItems[0].lightColor
                } border-t ${
                  flowItems[activeStep]?.borderColor || flowItems[0].borderColor
                } border-l ${flowItems[activeStep]?.borderColor || flowItems[0].borderColor}`}
              ></div>

              <div className="flex lg:flex-row flex-col items-start gap-2 lg:gap-4">
                <motion.div
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  className={`${
                    flowItems[activeStep]?.color || flowItems[0].color
                  } p-3 rounded-full text-white flex-shrink-0 hidden md:block`}
                >
                  {flowItems[activeStep]?.icon || flowItems[0].icon}
                </motion.div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-4 w-4 text-slate-500 hidden md:block" />
                    <h3 className="md:text-lg text-md font-bold text-slate-800">
                      Step {activeStep + 1}: {flowItems[activeStep]?.name || flowItems[0].name}
                    </h3>
                  </div>
                  <p className="text-md text-slate-700">
                    {flowItems[activeStep]?.description || flowItems[0].description}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-3 bg-white bg-opacity-80 p-3 rounded-lg text-slate-700 border border-slate-200"
              >
                {flowItems[activeStep]?.detailedMessage || flowItems[0].detailedMessage}

                <motion.div
                  className="absolute inset-0 rounded-lg z-0 pointer-events-none"
                  animate={
                    autoAdvance && !isLongPressing
                      ? {
                          boxShadow: [
                            '0 0 0px rgba(255,255,255,0)',
                            '0 0 2px rgba(99,102,241,0.3)',
                            '0 0 0px rgba(255,255,255,0)',
                          ],
                          transition: {
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                          },
                        }
                      : {
                          boxShadow: '0 0 1px rgba(99,102,241,0.2)',
                        }
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="flex flex-col lg:flex-row lg:gap-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-2 md:p-5 rounded-none lg:rounded-2xl shadow-lg border border-slate-200/80 lg:w-1/2"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start space-x-3"
            >
              <motion.div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold shadow-md flex-shrink-0">
                1
              </motion.div>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-blue-900 flex items-center">Enter Amount</h3>
                <p className="text-md text-slate-600">
                  Enter how much USDT you want to use from your wallet. We'll show a real-time quote
                  including all fees.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-start space-x-3"
            >
              <motion.div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold shadow-md flex-shrink-0">
                2
              </motion.div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-blue-900 flex items-center">
                  Confirm & Execute
                </h3>
                <p className="text-md text-slate-600">
                  Approve the transaction and get Asset directly to your wallet. All in one tap.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-4"
            >
              <motion.div className="bg-gray-800 p-2 md:p-4 rounded-xl text-white shadow-md md:mx-0">
                <h4 className="text-sm font-semibold mb-3 flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  QUOTE DETAILS
                </h4>
                <div className="space-y-4 text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="p-3 bg-gray-700/50 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Provider</span>
                      <motion.span className="font-medium bg-blue-600/30 px-2 py-1 rounded">
                        Uniswap
                      </motion.span>
                    </div>
                    <div className="flex justify-between my-1">
                      <span className="text-gray-300">Rate</span>
                      <span className="font-medium">1 WETH = 7305605.12 USDT</span>
                    </div>
                    <div className="flex justify-between my-1">
                      <span className="text-gray-300">Slippage</span>
                      <span className="font-medium text-green-400">0.005%</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-300">Min Received</span>
                      <span className="font-medium">7269.07 USDT</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="p-3 bg-gray-700/50 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Provider</span>
                      <motion.span className="font-medium bg-purple-600/30 px-2 py-1 rounded">
                        ALLbridge
                      </motion.span>
                    </div>
                    <div className="flex justify-between my-1">
                      <span className="text-gray-300">Rate</span>
                      <span className="font-medium">1 USDT = 0.996 USDC</span>
                    </div>
                    <div className="flex justify-between my-1">
                      <span className="text-gray-300">Slippage</span>
                      <span className="font-medium text-yellow-400">1%</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-300">Min Received</span>
                      <span className="font-medium">7244.89 USDC</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                className="md:mt-3 mt-1 bg-emerald-500 text-white p-2 md:p-3 rounded-xl flex items-center justify-between font-bold"
              >
                <span className="flex items-center">
                  <motion.div
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'reverse',
                        duration: 2,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <Check className="mr-2 h-5 w-5" />
                  </motion.div>
                  Total Received
                </span>
                <span className="text-sm md:text-md">≈7244.89 USDC</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex items-center justify-center lg:w-1/2 bg-white md:rounded-2xl overflow-hidden md:px-4"
        >
          <div className="relative w-full max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl rounded-t-none lg:rounded-t-xl overflow-hidden bg-[#020F47]"
            >
              <video
                ref={videoRef}
                className="w-full h-[400px] lg:h-[630px] rounded-2xl mt[-100px]"
                muted
                playsInline
                autoPlay
                loop
              >
                <source
                  src="https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/oneTap.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                onClick={handleReplayVideo}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all shadow-lg"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    transition: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: 'loop',
                      duration: 10,
                      ease: 'linear',
                    },
                  }}
                >
                  <RefreshCw className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OneTapTradeClient;
