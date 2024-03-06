import Head from 'next/head';
import ClassListPage from '../components/ClassListPage';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-lime-500 min-h-screen flex flex-col items-center">
      <Head>
        <title>Dance Classes</title>
        <meta name="description" content="Find and enroll in dance classes near you" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/animations.css" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white">
          <span className="expand-animation">Expand</span> who you *think* you are ... with the Dance Classes below
        </h1>
        <div></div>
        <ClassListPage />
      </main>
    </div>
  );
}
