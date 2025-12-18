import MobileSplitScreenClient from '../client/MobileSplitScreenClient';

interface Section {
  title: string;
  content: string;
  gradient: string;
  image: string;
  link: string;
  linkText?: string;
}

interface MobileSplitScreenProps {
  sections: Section[];
}

export default function MobileSplitScreen({ sections }: MobileSplitScreenProps) {
  return (
    <>
      <MobileSplitScreenClient sections={sections} />
    </>
  );
}
