'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ContactWaitlistContentProps {
  readonly content: {
    readonly contact: {
      readonly title: string;
      readonly description: string;
      readonly email: string;
      readonly buttonText: string;
      readonly buttonLink: string; // Discord invite URL
    };
  };
}

export function ContactWaitlistContent({ content }: ContactWaitlistContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-linear-to-br from-[#020E46] to-[#0A1A5E] xl:rounded-3xl py-16 overflow-hidden"
    >
      {/* ambient glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#5865F2]/10 blur-3xl" />

      <motion.div variants={itemVariants} className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl rounded-4xl border border-white/10 bg-white/5 p-8 sm:p-12 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-center mb-4">
            {content.contact.title}
          </h2>
          <p className="text-center text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            {content.contact.description}
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {/* Email - direct click, opens mail client */}
            <Link
              href={`mailto:${content.contact.email}`}
              aria-label="Email us"
              className="group flex flex-col items-center gap-3"
            >
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:bg-blue-500/20">
                <Image
                  src="/svg/gmail-icon.svg"
                  alt="Email"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                Email
              </span>
            </Link>

            {/* Discord - direct click, opens invite in new tab */}
            <Link
              href={content.contact.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord server"
              className="group flex flex-col items-center gap-3"
            >
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-[#5865F2]/30 bg-[#5865F2]/20 p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#5865F2]/60 group-hover:bg-[#5865F2]/30">
                <Image
                  src="/svg/discord-square-color-icon.svg"
                  alt="Discord"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                Discord
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
