'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  id: number;
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface NavBarClientProps {
  navigationItems: NavItem[];
  socialLinks: SocialLink[];
}

const NavBarClient: React.FC<NavBarClientProps> = ({ navigationItems, socialLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/solution');
    router.prefetch('/download');
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(window.scrollY > 50);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const headerClasses = useMemo(
    () =>
      `sticky top-0 py-2 z-50 lg:px-4 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md text-gray-800' : 'bg-[#020E46] text-white'
      }`,
    [isSticky]
  );

  const socialLinkClasses = useCallback(
    (isSticky: boolean) =>
      `text-xl transition-colors duration-300 ${
        isSticky ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
      }`,
    []
  );

  return (
    <div className={headerClasses}>
      <header className="px-4 lg:py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              className="object-contain"
              src="/images/logo.avif"
              alt="SwiftEx Wallet"
              width={120}
              height={48}
              priority
              style={{ width: 'auto', height: '48px' }}
            />
          </Link>
          <nav className="hidden xl:flex items-center space-x-6">
            {navigationItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`text-md font-regular transition-colors duration-300 hover:text-blue-400 ${
                  pathname === href ? 'text-blue-400' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ id, name, icon, href }) => (
                <Link
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkClasses(isSticky)}
                  aria-label={name}
                >
                  {icon}
                </Link>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-300"></div>
            <Link
              href="/solution"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-2xl ${
                isSticky
                  ? 'text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400'
                  : 'text-white/80 hover:text-white border-white/20 hover:border-white/50'
              }`}
            >
              Knowledge Base
            </Link>

            <Link
              href="/download"
              className={`px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-2xl shadow-sm ${
                isSticky
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Download
            </Link>
          </div>

          <button className="xl:hidden p-2" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <X className={`text-xl ${isSticky ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`text-xl ${isSticky ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
              <Image
                className="object-contain"
                src="/images/logo.avif"
                alt="SwiftEx Wallet"
                width={120}
                height={32}
                priority
                style={{ width: 'auto', height: '32px' }}
              />
              <button
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <X className="text-xl" />
              </button>
            </div>

            <div className="flex-1 px-4 py-4 flex flex-col justify-between overflow-y-auto">
              <nav className="space-y-1">
                {navigationItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    // Prefetch enabled (prefetch={false})
                    className={`block py-2.5 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                      pathname === href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-4 pt-4 border-t border-gray-200 mt-auto">
                <div className="space-y-3">
                  <Link
                    href="/solution"
                    onClick={closeMenu}
                    className="w-full block text-center py-3 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm"
                  >
                    Knowledge Base
                  </Link>

                  <Link
                    href="/download"
                    onClick={closeMenu}
                    className="w-full block text-center py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold text-sm shadow-md"
                  >
                    Download App
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-3 font-medium text-center">Follow Us</p>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map(({ id, name, icon, href }) => (
                      <Link
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 text-xl p-2 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        aria-label={name}
                      >
                        {icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarClient;
