import { ContactWaitlistContent } from '../client/ContactWaitlistContent';

export default function ContactWaitlistSection() {
  const content = {
    waitlist: {
      title: 'Join the Waitlist',
      description: 'Be the first to experience our revolutionary crypto app. Sign up now!',
      joinersCount: '1,000+',
      benefits: ['Early access', 'Exclusive features'],
    },
    contact: {
      title: 'Have more questions?',
      description: 'SwiftEx support is available 24/7 from within the app for any inquiries.',
      email: 'info@swiftexwallet.com',
      buttonText: 'Contact us',
      buttonLink: '/contact-us',
    },
  };

  return (
    <section id="waitlist" className="max-w-7xl mx-auto  lg:my-16 ">
      <ContactWaitlistContent content={content} />
    </section>
  );
}
