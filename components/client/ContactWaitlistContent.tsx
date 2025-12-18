'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Loader, Users } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swiftexchange.io/api/v2';

interface ContactWaitlistContentProps {
  content: {
    waitlist: {
      title: string;
      description: string;
      joinersCount: string;
      benefits: string[];
    };
    contact: {
      title: string;
      description: string;
      email: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export function ContactWaitlistContent({ content }: ContactWaitlistContentProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (success || error) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [success, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...(firstName && firstName.trim() && { firstName: firstName.trim() }),
          ...(lastName && lastName.trim() && { lastName: lastName.trim() }),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.message || 'Something went wrong');
      }

      // Success
      setSuccess(true);
      setEmail('');
      setFirstName('');
      setLastName('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-linear-to-br from-[#020E46] to-[#0A1A5E] xl:rounded-3xl py-8 overflow-hidden"
    >
      {/* Waitlist Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        <motion.div
          variants={itemVariants}
          className="backdrop-blur-sm rounded-3xl overflow-hidden"
        >
          <div className="p-2 lg:p-8 sm:p-10">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-2 text-center">
              {content.waitlist.title}
            </h2>
            <p className="text-gray-300 mb-6 text-center">{content.waitlist.description}</p>
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    placeholder="First Name (Optional)"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full px-4 py-6 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    autoComplete="given-name"
                    aria-label="First name"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name (Optional)"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="w-full px-4 py-6 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    autoComplete="family-name"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-6 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  autoComplete="email"
                  aria-label="Email address"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`text-white w-full mt-2 min-w-60 bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 font-medium rounded-full px-5 py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 text-lg transition duration-200 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                aria-label={loading ? 'Submitting form...' : 'Join the waitlist'}
                aria-busy={loading}
              >
                {loading ? <Loader className="animate-spin mr-2 inline" size={20} /> : null}
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </form>
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 font-medium text-center text-sm"
                >
                  <CheckCircle className="inline-block mr-2" size={18} />
                  Thank you! You've been added to the waiting list.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 font-medium text-center text-sm"
                >
                  <XCircle className="inline-block mr-2" size={18} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Join {content.waitlist.joinersCount} others</span>
              </div>
              <div className="flex items-center space-x-4">
                {content.waitlist.benefits.map((benefit, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                    {benefit}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        variants={itemVariants}
        className="lg:p-8 lg:py-16 py-8 px-4 border-t border-dashed border-white"
      >
        <div className="mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-medium text-white mb-6">
            {content.contact.title}
          </h2>
          <p className="text-lg text-white mb-8 font-thin opacity-80">
            {content.contact.description}{' '}
            <a href={`mailto:${content.contact.email}`} className="underline">
              {content.contact.email}
            </a>
          </p>
          <motion.a
            href={content.contact.buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-16 mt-2 min-w-60 bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 font-medium rounded-full  py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 text-lg"
          >
            {content.contact.buttonText}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
