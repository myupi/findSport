import Components from "src/components";
import "../styles/globals.css";
import "../styles/variables.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "src/store/store";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Components.Layout>
        <Component {...pageProps} />
      </Components.Layout>
    </Provider>
  );
}
