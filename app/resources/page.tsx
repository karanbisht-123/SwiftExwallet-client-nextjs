'use client';

import {
  Download,
  Video,
  FileText,
  Globe,
  Book,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';

interface Resource {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  isVideo?: boolean;
  videoId?: string;
  imageSrc?: string;
  isSocial?: boolean;
}

const VideoPlayer: React.FC<{ videoId: string }> = ({ videoId }) => (
  <div className="w-full h-full">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className="grid grid-cols-2 gap-8 mx-auto">
    <a
      href="https://x.com/SwiftExwallet"
      className="flex items-center justify-center text-[#1E40AF] hover:text-blue-600 transition"
    >
      <Twitter size={80} />
    </a>
    <a
      href="https://www.facebook.com/swiftexwallet"
      className="flex items-center justify-center text-[#1E40AF] hover:text-blue-800 transition"
    >
      <Facebook size={80} />
    </a>
    <a
      href="https://www.linkedin.com/company/swiftex-wallet"
      className="flex items-center justify-center text-[#1E40AF] hover:text-blue-900 transition"
    >
      <Linkedin size={80} />
    </a>
    <a
      href="https://www.instagram.com/swiftexwallet"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-[#1E40AF] hover:text-pink-600 transition"
    >
      <Instagram size={80} />
    </a>
  </div>
);

const ResourceSection: React.FC<Resource> = ({
  icon,
  title,
  description,
  link,
  isVideo,
  videoId,
  imageSrc,
  isSocial,
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 flex flex-col h-full">
    <div className="p-6 flex-grow">
      <div className="flex items-center mb-4">
        <div className="mr-4 flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#1E40AF] flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isSocial && <SocialLinks />}

      {isSocial && (
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Contact Us:</p>
          <a href="mailto:info@swiftexchange.io" className="text-blue-500 hover:text-blue-700">
            info@swiftexchange.io
          </a>
        </div>
      )}
    </div>
    {!isSocial && (
      <div className="h-64 relative">
        {isVideo && videoId ? (
          <VideoPlayer videoId={videoId} />
        ) : (
          <img
            src={imageSrc || 'https://via.placeholder.com/400x300'}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        {link && !isVideo && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 bg-[#1E40AF] text-white rounded-md hover:bg-blue-700 transition"
          >
            Access Resource
          </a>
        )}
      </div>
    )}
  </div>
);

const ResourcePage: React.FC = () => {
  const resources: Resource[] = [
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: 'Demo Video',
      description:
        'Watch our App demo to see our solution in action and understand its key features.',
      isVideo: true,
      videoId: 'BZie-z79BGQ',
    },
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: 'Pitch Deck',
      description:
        'Download our comprehensive pitch deck to learn more about our vision and strategy.',
      link: 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/Swift+Ex+Pitch+deck+Latest+1M+Ask%2B.pdf',
      imageSrc: '/images/pitchdeck.avif',
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'White Paper',
      description:
        'Dive deep into our technology and market analysis with our detailed white paper.',
      link: 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/White+Paper+SwiftEX+%2B%2B%2B.pdf',
      imageSrc: '/images/whitepapaper.avif',
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'Website',
      description:
        'Visit our official website for the most up-to-date information about our App and services.',
      link: 'https://swiftexchange.io',
      imageSrc: '/images/websiteimage.avif',
    },
    {
      icon: <Book className="w-6 h-6 text-white" />,
      title: 'Architecture Document',
      description:
        'Explore our system architecture to understand the technical foundation of our solution.',
      link: 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/%5BSwiftEx%5D++-+Technical+Architecture_V1.docx.pdf',
      imageSrc: '/images/digram.avif',
    },
    {
      icon: <Share2 className="w-6 h-6 text-white" />,
      title: 'Social Links',
      description:
        'Connect with us on social media to stay updated on our latest news and developments.',
      isSocial: true,
      imageSrc: '/images/contact.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020E46] p-6 lg:p-10 ">
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-medium text-white mb-4">
          Explore our comprehensive collection of resources
        </h2>
      </header>
      <main className="grid  gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {resources.map((resource, index) => (
          <ResourceSection key={index} {...resource} />
        ))}
      </main>
    </div>
  );
};

export default ResourcePage;
