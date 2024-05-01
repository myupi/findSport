import Components from "src/components";
import "../styles/globals.css";
import "../styles/variables.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "src/store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Components.Layout>
          <Component {...pageProps} />
        </Components.Layout>
      </I18nextProvider>
    </Provider>
  );
}
