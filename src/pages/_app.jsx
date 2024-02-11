import "@/styles/globals.css";

import { Work_Sans, Playfair_Display, Montserrat } from "@next/font/google";

// const playFairDisplayFont = Playfair_Display({
//   variable: "--font-playfair-display",
//   weights: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

// const workSansFont = Work_Sans({
//   variable: "--font-work-sans",
//   weights: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

// const montserratFont = Montserrat({
//   variable: "--font-montserrat",
//   weights: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }) {
  return (
    <main
    // className={` ${workSansFont.variable} ${playFairDisplayFont.variable} ${montserratFont.variable} `}
    >
      <Component {...pageProps} />;
    </main>
  );
}
