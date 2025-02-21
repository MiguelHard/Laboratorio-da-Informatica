import "@/styles/globals.css";
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default MyApp;