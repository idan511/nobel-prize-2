import Layout from "../components/layout";

// We import our CSS here because Next.js takes care of rendering it for us
import "../styles.css";

// This is the entrypoint to our app - all our code and logic is "within" its scope
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
