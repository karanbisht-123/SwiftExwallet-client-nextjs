'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

interface SharePostProps {
  url: string;
  title: string;
}

export default function SharePost({ url, title }: SharePostProps) {
  const shareButtons = [
    {
      Component: FacebookShareButton,
      Icon: FacebookIcon,
      props: { quote: title },
      name: 'Facebook',
    },
    {
      Component: TwitterShareButton,
      Icon: TwitterIcon,
      props: { title },
      name: 'Twitter',
    },
    {
      Component: LinkedinShareButton,
      Icon: LinkedinIcon,
      props: { title },
      name: 'LinkedIn',
    },
    {
      Component: RedditShareButton,
      Icon: RedditIcon,
      props: { title },
      name: 'Reddit',
    },
    {
      Component: TelegramShareButton,
      Icon: TelegramIcon,
      props: { title },
      name: 'Telegram',
    },
    {
      Component: WhatsappShareButton,
      Icon: WhatsappIcon,
      props: { title },
      name: 'WhatsApp',
    },
    {
      Component: EmailShareButton,
      Icon: EmailIcon,
      props: { subject: title, body: 'Check out this blog post!' },
      name: 'Email',
    },
  ];

  return (
    <div className="bg-gray-100 p-4 shadow-sm rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Share this post</h2>
      <div className="flex flex-wrap gap-6">
        {shareButtons.map(({ Component, Icon, props, name }, index) => (
          <Component key={name + index} url={url} {...props}>
            <Icon size={50} round />
          </Component>
        ))}
      </div>
    </div>
  );
}
