import type { AppProps } from "next/app";
import $ from 'jquery';

import "../styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).$ = $;
      (window as any).jQuery = $;
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
