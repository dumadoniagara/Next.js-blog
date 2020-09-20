import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

const name = 'Duma Doniagara Sambora';
export const siteTitle = 'Next.js Sample Website';

function Layout({ children, home }) {
   return (
      <div className={styles.container}>
         <Head>
            <title>{name}'s Profile</title>
            <meta name="description" content="Learn how to build a personal website using Next.js" />
            <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(
               siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
         </Head>
         <header className={styles.header}>
            {home ? (
               <>
                  <img
                     src="/images/profile.jpg"
                     className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                     alt={name}
                  />
                  <h1 className={utilStyles.heading2Xl}>{name}</h1>
               </>
            ) : (
                  <>
                     <Link href="/">
                        <a>
                           <img
                              src="/images/profile.jpg"
                              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                              alt={name}
                           />
                        </a>
                     </Link>
                     <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                           <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                     </h2>
                  </>
               )}
         </header>
         <main>
            {children}
         </main>
         {!home && (
            <div>
               <Link href="/">
                  <a>← Back to home</a>
               </Link>
            </div>
         )}
      </div >
   )
}

export default Layout;

// you can use css modules like this. modules will automatically generates unique class names, and you don't have to worry about class name collisons.
// next.js's code splitting feature works on CSS modules as well. It ensures the minimal amout of CSS is loaded for each page.
// this result in smaller bundle sizes.

// CSS modules are extracted from javascript bundles at build time and generate .css files that are loaded automatically by Next.js

// GLOBAL CSS : create file _app.js