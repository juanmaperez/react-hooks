import { useState } from 'react';
import { getDocBySlug, getAllDocs } from '../../lib/docs';
import markdownToHtml from '../../lib/markdown';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Form from '../../lessons/useRef/form';

export default function UseRefPage({ content, ...props }) {
  const [formVisible, setFormVisible] = useState(true);
  const step = Number(props.step);
  return (
    <Layout>
      <div className="flex flex-row w-full min-h-screen">
        <div className="lesson-block p-2 items-center bg-yellow-500 pt-40">
          {step === 4 && (
            <button
              className="white-btn"
              onClick={() => setFormVisible(!formVisible)}
            >
              {formVisible ? 'hide' : 'show'}
            </button>
          )}
          <br />
          {formVisible && <Form />}
        </div>
        <div className="lesson-block bg-black text-white p-6 justify-between">
          <article
            className="prose lg:prose-xl px-8 my-4 text-white text-xs"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex flex-row justify-between">
            {step !== 1 ? (
              <Link href={`/useRef/${step - 1}`}>
                <a className="border border-white py-1 px-4">Previous</a>
              </Link>
            ) : (
              <span></span>
            )}
            {step < 5 && (
              <Link href={`/useRef/${step + 1}`}>
                <a className="border border-white py-1 px-4">Next</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const path = `useRef-${params.slug}`;
  const doc = getDocBySlug(path);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content,
      step: params.slug
    }
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: 'unstable_blocking'
  };
}
