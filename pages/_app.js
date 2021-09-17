import "../styles/globals.css";
import Layout from "../components/layout/Layout";
//Very important file. Root component that next js renders
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
