import OneTapTradeClient from '../client/OneTapTradeClient';

export const metadata = {
  title: '1-Tap Bridge & Trade → Swap Any Token to USDC in One Click',
  description:
    'Instantly bridge and swap any token from any chain to USDC with just one tap. No manual steps. No multiple transactions.',
  openGraph: {
    title: '1-Tap Bridge & Trade – Instant Cross-Chain Swaps',
    description: 'Any token on any chain → USDC in seconds. One tap only.',
    images: ['https://yourdomain.com/og-one-tap.jpg'],
  },
};

export default function OneTapTradeServer() {
  return (
    <>
      <OneTapTradeClient />
    </>
  );
}
