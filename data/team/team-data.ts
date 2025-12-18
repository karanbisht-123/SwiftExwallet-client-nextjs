export interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  additionalInfo?: string;
  isCoFounder: boolean;
  linkedInUrl?: string;
  twitterUrl?: string;
}

export const teamMembers: TeamMemberData[] = [
  {
    name: 'Rohan Sethi',
    role: 'Co-Founder',
    bio: 'As the CEO / Co-Founder of SwiftEx, Rohan is passionate about driving innovation and excellence in custom software and blockchain development.',
    avatar:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958405/b9iohca6mjwjaoftnalb_wtatet.avif',
    additionalInfo:
      'As a former Technology Architect, he have been an effective leader by being hands-on technically and equipped with superior decision-making and problem-solving techniques...',
    isCoFounder: true,
    linkedInUrl: 'https://in.linkedin.com/in/rohan-sethi-blockchain',
  },
  {
    name: 'Manish Rai',
    role: 'Co-Founder',
    bio: 'Blockchain developer with expertise in Ethereum, Bitcoin, Tron, Hyperledger Fabric, and Web3. Skilled in designing and refining blockchain solutions to drive innovation.',
    avatar:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958406/qrcz9cxlfal1dgpsyrkn_xopwvg.avif',
    additionalInfo:
      'Experienced blockchain developer with advanced skills in Ethereum (ETH), Bitcoin (BTC), Tron (TRX), Hyperledger Fabric, and Web3 technologies...',
    isCoFounder: true,
    linkedInUrl: 'https://in.linkedin.com/in/manish-rai-73812b82',
  },
  {
    name: 'Isha Chaudhary',
    role: 'Quality Assurance',
    bio: 'QA Automation Engineer specializing in blockchain applications, ensuring quality through functional and regression testing. Experienced with selenium  Cucumber for comprehensive test automation.',
    avatar:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958407/qx0yslbthcmezunxzctp_kswbub.avif',
    isCoFounder: false,
    linkedInUrl: 'https://www.linkedin.com/in/isha-chaudhary-51b9a4196',
  },
  {
    name: 'Ram Sharma',
    role: 'Senior Application Developer',
    bio: 'Full Stack Developer skilled in JavaScript, TypeScript, Angular 8, MongoDB, PostgreSQL, Sequelize.js, and Node.js. Expert in building dynamic web applications and scalable backend systems.',
    avatar:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958407/okwmunummdw9tqugxvws_t7knc9.avif',
    isCoFounder: false,
    linkedInUrl: 'https://www.linkedin.com/in/ram-sharma-3590289b',
  },
  {
    name: 'Hunny',
    role: 'Application Developer',
    bio: 'Developer with experience in backend development, React Native, Android, and iOS. Proficient in creating cross-platform applications and integrating smart contracts.',
    avatar:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958405/lay7xrxt4ov6g6n8cd6l_f7qp2g.avif',
    isCoFounder: false,
    linkedInUrl: 'https://www.linkedin.com/in/hunny-009971211',
  },
];
