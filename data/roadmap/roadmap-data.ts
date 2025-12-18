export interface RoadmapPhase {
  title: string;
  quarter: string;
  content: string[];
  bgColor: string;
  textColor: string;
  side: 'left' | 'right';
  completed?: boolean;
  inProgress?: boolean;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    title: 'Phase 1: Planning / R&D',
    quarter: 'Q3 2024',
    content: [
      'Conducted market research and gap analysis.',
      'Built initial prototypes and validated concepts.',
      'Defined project scope and technical architecture.',
    ],
    bgColor: 'bg-[#F4F4F7]',
    textColor: 'text-black',
    side: 'left',
  },
  {
    title: 'Phase 2: Development Kickoff',
    quarter: 'Q4 2024',
    content: [
      'Assembled core development team.',
      'Set up CI/CD pipelines and dev environments.',
      'Started building core SwiftEx protocol.',
    ],
    bgColor: 'bg-[#020E46]',
    textColor: 'text-white',
    side: 'right',
  },
  {
    title: 'Phase 3: Test Beta Launch',
    quarter: 'Q4 2024',
    content: [
      'Private beta released to early adopters.',
      'Collected feedback and fixed critical bugs.',
      'Optimized performance and UX.',
    ],
    bgColor: 'bg-[#E6F4F1]',
    textColor: 'text-[#00B69B]',
    side: 'left',
  },
  {
    title: 'Phase 4: Seed Fund $1 Million',
    quarter: 'Q1 2025',
    content: [
      'Raise $1M seed round from strategic investors.',
      'Finalize tokenomics and legal framework.',
      'Prepare for public marketing push.',
    ],
    bgColor: 'bg-[#020E46]',
    textColor: 'text-white',
    side: 'right',
  },
  {
    title: 'Phase 5: SwiftEx Anchor Launch UAE/India',
    quarter: 'Q2 2025',
    content: [
      'Official public launch in UAE and India.',
      'Localized apps, support, and compliance.',
      'Onboard first 100K+ active users.',
    ],
    bgColor: 'bg-[#F4F4F7]',
    textColor: 'text-black',
    side: 'left',
  },
  {
    title: 'Phase 6: SwiftEx Bridge Launch',
    quarter: 'Q1 2026',
    content: [
      'Launch cross-chain bridge (EVM ↔ Tron ↔ Solana).',
      'Enable gasless & instant transfers.',
      'Expand to EU and Southeast Asia.',
    ],
    bgColor: 'bg-[#020E46]',
    textColor: 'text-white',
    side: 'right',
  },
];
