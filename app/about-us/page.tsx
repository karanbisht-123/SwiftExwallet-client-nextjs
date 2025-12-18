import type { Metadata } from 'next';
import TeamSection from '@/components/server/TeamSection';
import RoadmapTimeline from '@/components/server/RoadmapTimeline';
import AboutHero from '@/components/server/AboutHero';

export const metadata: Metadata = {
  title: 'About SwiftEx | Our Mission, Team, Roadmap',

  description:
    'Learn about the SwiftEx mission to empower users with secure, non-custodial finance. Meet our team and view our official development roadmap.',

  keywords: [
    'About SwiftEx',
    'SwiftEx Mission',
    'SwiftEx Team',
    'Crypto Roadmap',
    'Company Vision',
    'Non-Custodial Finance',
    'Blockchain Team',
  ],
  openGraph: {
    title: 'About SwiftEx | Our Vision for Secure Multi-chain Finance',
    description:
      'We are committed to building a secure, user-controlled financial future. See our team, company vision, and project roadmap.',
    url: 'https://swiftexchange.io/about-us',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftEx Team & Roadmap',
    description:
      'Learn about the dedicated team behind SwiftEx and our roadmap for multi-chain wallet and exchange development.',
  },
  alternates: {
    canonical: 'https://swiftexchange.io/about-us',
  },
};

const page = () => {
  return (
    <div className="lg:space-y-16">
      <AboutHero />
      <TeamSection />
      <RoadmapTimeline />
    </div>
  );
};

export default page;
