// See how we use <Link /> instead of <a>
// That is because Next.js provides some special features
// To allow client-side route navigation
import Link from "next/link";

// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="row navbar-items">
          <div className="item navbar-logo">
            <div className="content">
              <Link href="/">Australian Football</Link>
            </div>
          </div>
          <div className="item navbar-menu">
            <div className="content">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
