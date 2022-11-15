import Footer from "./footer";
import Navbar from "./navbar";

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}