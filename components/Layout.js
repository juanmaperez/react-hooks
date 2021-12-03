import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function LessonLayout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Advanced React Hooks</title>
      </Head>
      <div className="flex flex-row items-center justify-center h-full">
        <Link href="/">
          <a className="fixed left-10 top-12 border border-black py-1 px-4">
            Back
          </a>
        </Link>

        {children}
      </div>
    </Fragment>
  );
}

export default LessonLayout;
