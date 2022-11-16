import Footer from "./footer";
import Link from "next/link";

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
  return (
    <div id="container">
      <div id="main">
        <h1><Link href="/">Nobel Prizes 2</Link></h1>
        <main className="container">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}