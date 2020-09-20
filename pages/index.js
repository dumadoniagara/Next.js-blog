import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Duma. I'm Indonesian Software engineer. You can contact me on <a href="https://www.linkedin.com/in/duma-doniagara-sambora/">LinkedIn</a>.</p>
        <p>Currently working as Frontend Engineer at <a href="https://dusdusan.com">Dusdusan.com</a></p>
        <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
      </section>
    </Layout>
  )
}
