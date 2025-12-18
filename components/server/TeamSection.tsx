'use client';

import React, { useState } from 'react';
import TeamMemberClient from '../client/TeamMemberClient';
import { teamMembers } from '@/data/team/team-data';
import { motion } from 'framer-motion';

const TeamSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
      id="team"
      className="max-w-7xl  md:mx-auto py-12 lg:py=16 bg-gray-100  px-4 lg:px-8 lg:rounded-2xl"
    >
      <div className="text-center mb-12 lg:mb-20">
        <h1 className="mb-4 text-4xl md:text-5xl font-medium text-gray-900">Our Team</h1>
        <p className="font-light text-gray-500 sm:text-xl max-w-4xl mx-auto">
          The SwiftEx team comprises industry experts with diverse backgrounds in blockchain
          technology, cybersecurity, finance, and customer service. United by a shared vision, we
          are committed to delivering the highest standards of performance and reliability.
        </p>
      </div>

      <motion.div
        className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.15 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TeamMemberClient
              {...member}
              isExpanded={expanded === index}
              onToggleExpand={() => handleToggleExpand(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
