'use client';
import { motion } from 'framer-motion';
import { Target, Users, LineChart } from 'lucide-react';

const iconMap = {
  target: Target,
  users: Users,
  lineChart: LineChart,
} as const;

type IconMap = typeof iconMap;
type IconName = keyof IconMap;

type AboutSection = {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
  gradient: string;
  bgGradient: string;
};

const aboutSections: AboutSection[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    description:
      'Empower individuals and businesses globally with a secure, decentralized platform that bridges fiat and cryptocurrency, fostering financial inclusion and innovation.',
    iconName: 'target',
    gradient: 'from-blue-500 to-cyen-600',
    bgGradient: 'from-blue-500/10 to-purple-600/10',
  },
  {
    id: 'who-we-are',
    title: 'Who We Are',
    description:
      'SwiftEx is a fintech company revolutionizing digital asset interaction. We offer a secure platform that merges fiat and crypto through blockchain technology. Our team of experts is dedicated to making decentralized finance accessible to all.',
    iconName: 'users',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-500/10 to-cyan-600/10',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    description:
      'Create a transparent, user-friendly platform for seamless asset trading between fiat and crypto. We prioritize security, convenience, and innovation, aiming to lead the global adoption of decentralized finance.',
    iconName: 'lineChart',
    gradient: 'from-purple-500 to-cyan-600',
    bgGradient: 'from-purple-500/10 to-cyan-600/10',
  },
];

export default function ModernAboutHero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-block mb-4"
        ></motion.div>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent mb-4">
          Discover SwiftEx
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Building the future of decentralized finance, one transaction at a time
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {aboutSections.map((section, index) => {
            const Icon = iconMap[section.iconName];
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative group bg-gradient-to-br ${section.bgGradient} backdrop-blur-sm rounded-2xl p-4`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-linear-to-br ${section.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white pt-2">{section.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed pl-16">{section.description}</p>
                </div>
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${section.gradient} opacity-10 rounded-bl-full`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main image container */}
        <div className="relative  rounded-xl p-4 ">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
          >
            <img
              src="/images/logo.avif"
              alt="SwiftEx - Cryptocurrency Platform"
              className="rounded-2xl w-full"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-transparent to-blue-900/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
