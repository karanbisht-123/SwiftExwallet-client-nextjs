import Image from 'next/image';
import Link from 'next/link';
import FooterClient from '../client/FooterClient';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const socialIcons = [
  {
    id: 1,
    icon: <Instagram size={40} aria-hidden="true" />,
    name: 'Instagram',
    ariaLabel: 'Visit SwiftEx on Instagram',
    color: '#E1306C',
    hoverColor: '#C13584',
    href: 'https://www.instagram.com/swiftexwallet',
  },
  {
    id: 2,
    icon: <Facebook size={40} aria-hidden="true" />,
    name: 'Facebook',
    ariaLabel: 'Visit SwiftEx on Facebook',
    color: '#1877F2',
    hoverColor: '#4267B2',
    href: 'https://www.facebook.com/swiftexwallet',
  },
  {
    id: 3,
    icon: <Linkedin size={40} aria-hidden="true" />,
    name: 'LinkedIn',
    ariaLabel: 'Connect with SwiftEx on LinkedIn',
    color: '#0A66C2',
    hoverColor: '#2867B2',
    href: 'https://www.linkedin.com/company/swiftex-wallet',
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 50 50"
        aria-hidden="true"
      >
        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
      </svg>
    ),
    name: 'X (Twitter)',
    ariaLabel: 'Follow SwiftEx on X (formerly Twitter)',
    color: '#000000',
    hoverColor: '#1a1a1a',
    href: 'https://x.com/SwiftExwallet',
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
    name: 'Discord',
    ariaLabel: 'Join SwiftEx community on Discord',
    color: '#5865F2',
    hoverColor: '#4752C4',
    href: 'https://discord.gg/gCevdzbC',
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#F4F4F7] py-6 lg:py-12 shadow-lg max-w-7xl mx-auto mb-0 lg:mb-16 xl:rounded-3xl relative overflow-hidden lg:my-16"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto space-y-8 px-4 lg:pt-16 sm:px-6 lg:space-y-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Link href="/" aria-label="SwiftEx Home">
              <div className="h-28 w-28">
                <Image
                  src="/images/logo.avif"
                  alt="SwiftEx Wallet Logo"
                  width={112}
                  height={112}
                  loading="lazy"
                  quality={90}
                  className="h-full w-full object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-gray-500">
              SwiftEx Wallet and Exchange is architected as a comprehensive solution to the
              multifaceted challenges that beset the cryptocurrency market.
            </p>
          </div>

          <FooterClient />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <p className="text-sm text-gray-600">
            © 2023{currentYear > 2023 ? ` - ${currentYear}` : ''} SwiftEx. All Rights Reserved.
          </p>

          {/* Social Links with proper accessibility */}
          <nav aria-label="Social media links" className="flex space-x-4 mt-8 lg:mt-0">
            {socialIcons.map(({ id, icon, ariaLabel, hoverColor, href, name }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="text-gray-700 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                style={{ '--hover-color': hoverColor } as React.CSSProperties}
              >
                {icon}
                <span className="sr-only">{name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
