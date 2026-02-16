'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
        aria-hidden="true"
        className={className}
    >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
);

const socialIcons = [
    {
        id: 1,
        icon: <Instagram size={24} aria-hidden="true" />,
        name: 'Instagram',
        ariaLabel: 'Visit SwiftEx on Instagram',
        color: '#E1306C',
        hoverColor: '#C13584',
        href: 'https://www.instagram.com/swiftexwallet',
    },
    {
        id: 2,
        icon: <Facebook size={24} aria-hidden="true" />,
        name: 'Facebook',
        ariaLabel: 'Visit SwiftEx on Facebook',
        color: '#1877F2',
        hoverColor: '#4267B2',
        href: 'https://www.facebook.com/swiftexwallet',
    },
    {
        id: 3,
        icon: <Linkedin size={24} aria-hidden="true" />,
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
                viewBox="0 0 50 50"
                aria-hidden="true"
                className="w-6 h-6 fill-current"
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
] as const;

export default function ContactContent() {
    const [copied, setCopied] = useState(false);
    const email = 'info@swiftexwallet.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut' as const,
            },
        },
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-[#020E46]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl w-full space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl  text-white">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Our team is here to help. Whether you have questions about our services,
                        need technical support, or want to explore partnership opportunities.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-[#0F216E]/40 backdrop-blur-md p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-6 border border-blue-500/20">
                                <Image
                                    src="/svg/gmail-icon.svg"
                                    alt="Email Icon"
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl  text-white">Email Support</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Our dedicated support team is available to assist you.
                                    Reach out for any inquiries related to app usage, reporting issues, or general feedback.
                                </p>
                            </div>

                            <div className="w-full flex items-center gap-3 pt-4 mt-auto">
                                <Link
                                    href={`mailto:${email}`}
                                    className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <Mail size={18} />
                                    <span>Send Email</span>
                                </Link>

                                <button
                                    onClick={handleCopy}
                                    className="w-14 h-[48px] rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium transition-colors duration-300 flex items-center justify-center border border-white/5 hover:border-white/20"
                                    aria-label="Copy Email Address"
                                >
                                    {copied ? (
                                        <Check size={20} className="text-green-400" />
                                    ) : (
                                        <Copy size={20} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-[#1E2124]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5865F2]/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#5865F2]/10 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-6 border border-[#5865F2]/20">
                                <Image
                                    src="/svg/discord-square-color-icon.svg"
                                    alt="Discord Icon"
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl  text-white">Join Community</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Join our community. Face any issue?
                                    Our team and community members are available 24/7 to help you resolve it.
                                </p>
                            </div>

                            <div className="w-full pt-4 mt-auto">
                                <Link
                                    href="https://discord.gg/DaDcE32dDm"
                                    target="_blank"
                                    className="w-full py-3 px-6 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium transition-colors duration-300 flex items-center justify-center gap-2 border border-white/10"
                                >
                                    <DiscordIcon className="w-5 h-5 fill-current" />
                                    <span>Join Server</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="pt-12 text-center space-y-8">
                    <div className="flex items-center justify-center gap-4 text-gray-500">
                        <div className="h-px w-12 bg-gray-700" />
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Connect With Us</span>
                        <div className="h-px w-12 bg-gray-700" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {socialIcons.map((social) => (
                            <div key={social.id} className="relative group/icon">
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    aria-label={social.ariaLabel}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/5 hover:border-white/20 overflow-hidden"
                                >
                                    <div
                                        className="relative z-10 transition-colors duration-300"
                                        style={{ color: 'inherit' }}
                                    >
                                        <div className="group-hover/icon:text-[var(--hover-color)]" style={{ '--hover-color': social.color } as React.CSSProperties}>
                                            {social.icon}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500">
                        Follow us for the latest updates and announcements
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
