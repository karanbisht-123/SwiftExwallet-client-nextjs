'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Bug,
  Facebook,
  Linkedin,
  Instagram,
  Smartphone,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface BaseFormValues {
  type: 'contact' | 'bug';
}

interface ContactFormValues {
  email: string;
  phone: string;
  message: string;
}

interface BugReportValues {
  bugName: string;
  bugDescription: string;
  deviceType: string;
}

interface FormErrors {
  phone?: string;
  email?: string;
  message?: string;
  bugName?: string;
  bugDescription?: string;
  deviceType?: string;
}

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<'contact' | 'bug'>('contact');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bugName, setBugName] = useState<string>('');
  const [bugDescription, setBugDescription] = useState<string>('');
  const [deviceType, setDeviceType] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swiftexchange.io/api/v2';
  useEffect(() => {
    if (isSubmitted) {
      const timer = window.setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (isContactForm: boolean): boolean => {
    const newErrors: FormErrors = {};
    if (isContactForm) {
      if (!email) newErrors.email = 'Email is required';
      else if (!validateEmail(email)) newErrors.email = 'Invalid email format';

      if (phone && !/^\d{10}$/.test(phone)) {
        newErrors.phone = 'Phone number must be exactly 10 digits and contain only numbers';
      }
      if (!message) newErrors.message = 'Message is required';
      else if (message.length > 300) newErrors.message = 'Message must be 300 characters or less';
    } else {
      if (!bugName) newErrors.bugName = 'Bug name is required';
      else if (!/^[a-zA-Z\s]+$/.test(bugName))
        newErrors.bugName = 'Bug name should only contain letters and spaces';
      if (!bugDescription) newErrors.bugDescription = 'Bug description is required';
      else if (bugDescription.length > 300)
        newErrors.bugDescription = 'Description must be 300 characters or less';
      if (!deviceType) newErrors.deviceType = 'Device type is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendData = async (data: BaseFormValues & (ContactFormValues | BugReportValues)) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm(activeTab === 'contact')) {
      if (activeTab === 'contact') {
        sendData({ email, phone, message, type: 'contact' });
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        sendData({ bugName, bugDescription, deviceType, type: 'bug' });
        setBugName('');
        setBugDescription('');
        setDeviceType('');
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:bg-white/10 backdrop-blur-lg lg:border lg:border-white/20 lg:shadow-2xl rounded-3xl p-0 lg:p-8 mb-8"
            >
              <div className="relative mb-8 bg-white/5 p-2 rounded-2xl">
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={false}
                  animate={{
                    x: activeTab === 'contact' ? '0%' : '50%',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5,
                  }}
                >
                  <div
                    className={`h-full w-1/2 rounded-xl ${
                      activeTab === 'contact'
                        ? 'bg-gradient-to-r from-blue-500/30 to-blue-600/20'
                        : 'bg-gradient-to-r from-red-500/30 to-red-600/20'
                    }`}
                  />
                </motion.div>

                <div className="relative z-10 flex gap-2">
                  <motion.button
                    onClick={() => setActiveTab('contact')}
                    className={`relative flex-1 py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'contact' ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        scale: activeTab === 'contact' ? 1.1 : 1,
                        rotate: activeTab === 'contact' ? 0 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <MessageSquare size={20} />
                    </motion.div>
                    <span>Contact Us</span>
                  </motion.button>

                  <motion.button
                    onClick={() => setActiveTab('bug')}
                    className={`relative flex-1 py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'bug' ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        scale: activeTab === 'bug' ? 1.1 : 1,
                        rotate: activeTab === 'bug' ? 0 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Bug size={20} />
                    </motion.div>
                    <span>Report Bug</span>
                  </motion.button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {activeTab === 'contact' ? (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                        mass: 0.5,
                      }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="email"
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                          >
                            <Mail size={18} className="text-blue-400" />
                          </motion.div>
                          Email Address
                        </label>
                        <motion.input
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                          >
                            <AlertCircle size={14} />
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="phone"
                        >
                          <Phone size={18} className="text-blue-400" />
                          Phone Number (Optional)
                        </label>
                        <motion.input
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="message"
                        >
                          <MessageSquare size={18} className="text-blue-400" />
                          Your Message
                        </label>
                        <motion.textarea
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[150px] resize-none"
                          id="message"
                          placeholder="Tell us what's on your mind..."
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                          required
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        ></motion.textarea>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="bug"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                        mass: 0.5,
                      }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="bugName"
                        >
                          <motion.div
                            animate={{
                              rotate: [0, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                          >
                            <Bug size={18} className="text-red-400" />
                          </motion.div>
                          Bug Name
                        </label>
                        <motion.input
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          id="bugName"
                          type="text"
                          placeholder="e.g., Button not responding"
                          value={bugName}
                          onChange={e => setBugName(e.target.value)}
                          required
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        />
                        {errors.bugName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.bugName}
                          </motion.p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="bugDescription"
                        >
                          <MessageSquare size={18} className="text-red-400" />
                          Bug Description
                        </label>
                        <motion.textarea
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[150px] resize-none"
                          id="bugDescription"
                          placeholder="Describe what happened in detail..."
                          value={bugDescription}
                          onChange={e => setBugDescription(e.target.value)}
                          required
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        ></motion.textarea>
                        {errors.bugDescription && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.bugDescription}
                          </motion.p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-white text-sm font-semibold mb-3"
                          htmlFor="deviceType"
                        >
                          <Smartphone size={18} className="text-red-400" />
                          Device Type
                        </label>
                        <motion.select
                          className="w-full py-4 px-5 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                          id="deviceType"
                          value={deviceType}
                          onChange={e => setDeviceType(e.target.value)}
                          required
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <option value="" className="bg-[#020E46]">
                            Select your device
                          </option>
                          <option value="Android-12" className="bg-[#020E46]">
                            Android 12
                          </option>
                          <option value="Android-13" className="bg-[#020E46]">
                            Android 13
                          </option>
                          <option value="Android-14" className="bg-[#020E46]">
                            Android 14
                          </option>
                          <option value="iOS-12" className="bg-[#020E46]">
                            iOS 12
                          </option>
                          <option value="iOS-13" className="bg-[#020E46]">
                            iOS 13
                          </option>
                          <option value="iOS-14" className="bg-[#020E46]">
                            iOS 14
                          </option>
                          <option value="iOS-15" className="bg-[#020E46]">
                            iOS 15
                          </option>
                          <option value="Web (Desktop)" className="bg-[#020E46]">
                            Web (Desktop)
                          </option>
                          <option value="Web (Mobile)" className="bg-[#020E46]">
                            Web (Mobile)
                          </option>
                          <option value="Other" className="bg-[#020E46]">
                            Other
                          </option>
                        </motion.select>
                        {errors.deviceType && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.deviceType}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  className={`relative w-full py-4 px-8 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-3 overflow-hidden ${
                    activeTab === 'contact'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                      : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                  }`}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Send size={20} />
                  </motion.div>
                  <span>{activeTab === 'contact' ? 'Send Message' : 'Submit Report'}</span>
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-green-500/30 shadow-2xl rounded-3xl p-12 text-center relative overflow-hidden"
            >
              {/* Success background particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400/30 rounded-full"
                    initial={{
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <CheckCircle2 size={80} className="mx-auto text-green-400 mb-6" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Success!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg"
              >
                {activeTab === 'contact'
                  ? "Your message has been sent successfully. We'll get back to you soon!"
                  : 'Bug report submitted successfully. Thank you for helping us improve!'}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <footer className="text-white py-8 mt-12 border-t border-dashed border-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex gap-6">
            <motion.a
              href="https://www.facebook.com/swiftexwallet"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Facebook size={24} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/swiftexwallet"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Instagram size={24} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/swiftex-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Linkedin size={24} className="relative z-10" />
            </motion.a>
          </div>
        </div>
      </footer>
    </>
  );
}
