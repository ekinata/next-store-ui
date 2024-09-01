import type { AppProps } from "next/app";
import $ from 'jquery';

import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).$ = $;
      (window as any).jQuery = $;
    }
  }, []);

  return <Component {...pageProps} />;
}
