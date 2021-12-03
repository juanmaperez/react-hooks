import Head from 'next/head';
import Link from 'next/link';

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Advanced React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-white">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-black" href="https://nextjs.org">
            Advanced React Hooks
          </a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/useReducer/1">
            <a className="home-block">
              <h3 className="text-2xl font-bold">useReducer &rarr;</h3>
              <p className="mt-4 text-xl">
                Manage complex states with the Redux reducer convention.
              </p>
            </a>
          </Link>

          <Link href="/useRef/1">
            <a className="home-block">
              <h3 className="text-2xl font-bold">useRef &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn how to keep track of things without refresh the component
              </p>
            </a>
          </Link>

          <Link href="/useCallback/1">
            <a className="home-block">
              <h3 className="text-2xl font-bold">useCallback &rarr;</h3>
              <p className="mt-4 text-xl">
                Improve the performance of your components with useCallback.
              </p>
            </a>
          </Link>

          <Link href="/useContext/1">
            <a className="home-block">
              <h3 className="text-2xl font-bold">useContext &rarr;</h3>
              <p className="mt-4 text-xl">
                Manage the state of your app with this hook.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Powered by <strong> Retail Ops</strong>
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Index;
