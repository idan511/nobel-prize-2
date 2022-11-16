// Just a generic footer, part of the default layout

import Link from "next/link";

// so it appears on all pages that use the default layout
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="item">
            <div className="content row">
              &copy; 2022 Idan Alperin <Link href="/">Home</Link><Link href="about">About</Link> <Link href="contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
