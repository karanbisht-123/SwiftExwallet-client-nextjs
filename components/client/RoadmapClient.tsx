'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RoadmapPhase } from '@/data/roadmap/roadmap-data';

interface RoadmapTimelineClientProps {
  phases: RoadmapPhase[];
}

export default function RoadmapTimelineClient({ phases }: RoadmapTimelineClientProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative wrap overflow-hidden p-10 h-full" ref={ref}>
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }}
        />
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: phase.side === 'left' ? -80 : 80 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : phase.side === 'left' ? -80 : 80,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`mb-3 flex justify-between items-center w-full ${
              phase.side === 'left' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="order-1 w-5/12" />
            <div
              className={`z-8 flex items-center order-1 ${
                phase.inProgress
                  ? 'bg-[#00B69B] shadow-[0_0_10px_rgba(0,182,155,0.5)]'
                  : 'bg-gray-900 shadow-xl'
              } w-8 h-8 rounded-full`}
            >
              <h1 className="mx-auto font-semibold text-lg text-white z-10">{index + 1}</h1>
            </div>
            <motion.div
              className={`order-1 ${phase.bgColor} rounded-2xl border shadow-xl w-5/12 px-6 py-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className={`mb-3 font-medium ${phase.textColor} text-xl`}>{phase.title}</h3>
              <p className={`text-sm ${phase.textColor} opacity-70 mb-2`}>{phase.quarter}</p>
              <ul
                className={`text-sm leading-snug tracking-wide ${phase.textColor} text-opacity-100`}
              >
                {phase.content.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-lg font-thin opacity-80 relative pl-5 before:absolute before:left-0 before:content-["•"]'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="block lg:hidden py-10">
        <div className="relative">
          <div
            className="border-r-4 border-gray-400 absolute h-full top-0"
            style={{ left: '8px' }}
          />
          <ul className="list-none m-0 p-0">
            {phases.map((phase, index) => (
              <li className="mb-5" key={index}>
                <div className="flex group items-center">
                  <div
                    className={`${
                      phase.inProgress
                        ? 'bg-[#00B69B] group-hover:bg-[#00B69B]'
                        : 'bg-gray-400 group-hover:bg-green-600'
                    } z-10 rounded-full border-4 ${
                      phase.inProgress ? 'border-[#00B69B]' : 'border-gray-400'
                    } h-5 w-5`}
                  >
                    <div
                      className={`${
                        phase.inProgress ? 'bg-[#00B69B]' : 'bg-gray-400'
                      } h-1 w-6 items-center ml-4 mt-1`}
                    />
                  </div>
                  <div className="flex-1 ml-4 z-10 font-medium">
                    <div
                      className={`order-1 space-y-2 ${phase.bgColor} rounded-lg shadow-lg transition-ease lg:w-5/12 px-6 py-4`}
                    >
                      <h3 className={`mb-3 font-medium text-2xl ${phase.textColor}`}>
                        {phase.title}
                      </h3>
                      <p className={`text-sm ${phase.textColor} opacity-70 mb-2`}>
                        {phase.quarter}
                      </p>
                      <ul className={`text-md ${phase.textColor}`}>
                        {phase.content.map((item, idx) => (
                          <li
                            key={idx}
                            className='relative font-thin opacity-80 pl-5 before:absolute before:left-0 before:content-["•"]'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
