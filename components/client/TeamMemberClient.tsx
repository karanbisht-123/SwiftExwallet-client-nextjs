'use client';

import React, { memo, useRef, useEffect, useCallback } from 'react';
import { Linkedin, ChevronDown, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  additionalInfo?: string;
  isCoFounder: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
  linkedInUrl?: string;
  twitterUrl?: string;
}

const TeamMemberClient: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  avatar,
  additionalInfo,
  isCoFounder,
  isExpanded,
  onToggleExpand,
  linkedInUrl,
  twitterUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (isExpanded) onToggleExpand();
      }
    },
    [isExpanded, onToggleExpand]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:min-h-[414px] items-center rounded-3xl shadow-lg bg-[#020E46] p-5 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <motion.img
        className="w-32 h-32 rounded-full object-cover mb-4"
        src={avatar}
        alt={`${name} - ${role} at SwiftEx`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
      />

      <motion.h3 layout className="text-xl font-medium text-white">
        {name}
      </motion.h3>
      <motion.span layout className="text-gray-400 font-medium">
        {role}
      </motion.span>

      <motion.p layout className="mt-3 mb-4 text-white text-center font-thin opacity-80">
        {bio}
      </motion.p>

      <AnimatePresence>
        {isExpanded && additionalInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-white overflow-hidden"
          >
            <p className="text-center font-thin opacity-80">{additionalInfo}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isCoFounder && (
        <motion.div
          layout
          className="w-full mt-4 flex justify-center"
          initial={false}
          animate={{
            backgroundColor: isExpanded ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={onToggleExpand}
            className="flex items-center space-x-2 py-2 px-4 rounded-full text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}

      <motion.div layout className="flex space-x-6 mt-6">
        {linkedInUrl && (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s LinkedIn Profile`}
          >
            <Linkedin className="w-8 h-8 text-white hover:text-blue-400 transition-colors duration-300" />
          </a>
        )}
        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s Twitter Profile`}
          >
            <Twitter className="w-8 h-8 text-white hover:text-blue-400 transition-colors duration-300" />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default memo(TeamMemberClient);
