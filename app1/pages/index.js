import Head from 'next/head';
import ClassListPage from '../components/ClassListPage';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-lime-500 min-h-screen flex flex-col items-center">
      <Head>
        <title>Dance Classes</title>
        <meta name="description" content="Find and enroll in dance classes near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white">Explore Dance Classes</h1>
        <ClassListPage />
      </main>

    </div>
  );
}