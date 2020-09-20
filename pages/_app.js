import '../styles/global.css';

export default function App({ Component, pageProps }) {
   return <Component {...pageProps} />
}

// Adding Global CSS
// you can add global CSS files by importing them from pages/_app.js. You CANNOT import global CSS anywhere else
// it will affects all elements on the apps (all pages)

