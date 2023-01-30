import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contents from '@/components/Contents';

export default function Home() {
  // Primary color: Bright blue (#00B5E2)
  // Secondary color: Light gray (#BFBFBF)
  // Tertiary color: Bright yellow (#FDB813)
  // Accent color: Dark gray (#333333)
  return (
    <>
      <Head>
        <title>Grinler</title>
        <meta name="description" content="Social media for memes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A simple, fun & creative way to create, share & spin-off memes with friends & community.Join a community of meme enthusiasts and unleash your creativity. Create and share your memes now!"
        />
        <meta property="og:URL" content="https://www.grinler.com" />
        <meta property="og:title" content="grinler.com" />
        <meta
          property="og:description"
          content="A simple, fun & creative way to create, share & spin-off memes with friends & community.Join a community of meme enthusiasts and unleash your creativity. Create and share your memes now!"
        />
        <link rel="icon" href="/images/logos/logo.svg" />
      </Head>
      <>
        <Navbar />
        <Contents />
        <Footer />
      </>
    </>
  );
}
