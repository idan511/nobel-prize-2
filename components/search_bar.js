
import React, { useState, useEffect } from 'react';


export function SearchBar({ year, setYear, category, setCategory, limit, setLimit, order, setOrder }) {
    return (<>
      <div id="data_man">
        <div id="filterer">
          <label htmlFor="year">year (0 for all): </label>
          <input type="number" className="inputrer" id="year_picker" defaultValue={year} step={1} min={0} max={2022} onChange={e => setYear(e.target.value)} />
          <label htmlFor="year">category: </label>
          <select className="inputrer" id="cat_picker" onChange={e => setCategory(e.target.value.toLowerCase().substring(0, 3))}>
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
          <input type="checkbox" id="order_check" onChange={e => setOrder(e.target.checked ? "desc" : "asc")} defaultChecked={order == "desc"} /><label htmlFor="order_check">sort by
            year <span id="arrow">↑</span> </label>
          <label htmlFor="limit">limit: </label>
          <input type="number" className="inputrer" id="limit" defaultValue={limit} onChange={e => setLimit(e.target.value)} step={10} min={0} />
        </div>
      </div>
    </>
    )
  }