import RoadmapTimelineClient from '../client/RoadmapClient';
import { roadmapPhases } from '@/data/roadmap/roadmap-data';
export default function RoadmapTimeline() {
  return (
    <div className="container mx-auto w-full px-2 h-full bg-[#020E46] lg:rounded-2xl">
      <h1 className="text-center font-medium  text-4xl lg:text-6xl py-6  text-white">
        Our Roadmap
      </h1>
      <RoadmapTimelineClient phases={roadmapPhases} />
    </div>
  );
}
