import "../styles/globals.css";
import Layout from "../layouts/layout";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store.js";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </Provider>
  );
}
