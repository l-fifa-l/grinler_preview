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
