import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return <Component {...pageProps} />;
}
