// See how we use <Link /> instead of <a>
// That is because Next.js provides some special features
// To allow client-side route navigation
import Link from "next/link";

// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function Navbar() {
  return (<>

            <h1>Nobel Prizes</h1>
            <div id="data_man">
              <div id="filterer">
                <label htmlFor="year">year (0 for all): </label>
                <input type="number" className="inputrer" id="year_picker" defaultValue={0} step={1} min={0} max={2022} onchange="update_year(this.value)" />
                <label htmlFor="year">category: </label>
                <select className="inputrer" id="cat_picker" onchange="update_category(this.value)">
                  <option>All</option>
                  <option>Chemistry</option>
                  <option>Economy</option>
                  <option>Litrature</option>
                  <option>Peace</option>
                  <option>Physics</option>
                  <option>Medicine</option>
                </select>
              </div>
              <div>
                <input type="checkbox" id="order_check" onchange="change_order(this.checked)" /><label htmlFor="order_check">sort by
                  year <span id="arrow">↑</span> </label>
                <label htmlFor="limit">limit: </label>
                <input type="number" className="inputrer" id="limit" defaultValue={100} onchange="update_limit(this.value)" step={10} min={0} />
              </div>
            </div>
            </>
  )
}
