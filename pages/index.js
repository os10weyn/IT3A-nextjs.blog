import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My First Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Austin Wayne M. De Guzman is a 20-year-old native of Arayat, Pampanga. Anything somewhat spicy or pasta. I play guitars and other instruments. I enjoy reading literature, such as novels. Playing instruments, developing/coding ideas in my spare time, and playing video games
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}