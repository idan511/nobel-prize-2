
import Message from "../components/message";
import Card from "../components/card";
import { useApiData } from "../hooks/data";
import { useApiMoreData } from "../hooks/more_data";
import React, { useState, useEffect } from 'react';
import { get_laureates_name } from "../components/card";
import Image from "next/image";

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

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export function Winners({ data, isLoading, isError, set_more_url, set_more_data_toggle }) {

  function handle_open_data(url) {
    console.log(`going to ${url}`)
    set_more_url(url)
    set_more_data_toggle(true);
  }

  if (isLoading) return <img src="/spinner2.svg" alt="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  const records = data.nobelPrizes;

  console.log(records)

  return (
    <>

      {records.map(record => {
        // return <div key={record.id} className="item"><div className="content">{record.name}</div></div>
        return <Card key={JSON.stringify(record)} title={record.category.en} subtitle={record.awardYear} list={record.laureates} link={record.links[0].href} handler={handle_open_data} />

      })}

    </>
  )
}

export function MoreData({ data }) {

  if (!data) return <></>

  const list = data[0].laureates

  return (<>
    <div className="item" id="more_content">
      <div className="more_data">
        <h2>{data[0].categoryFullName.en}</h2>
        <h3>{data.dateAwarded}</h3>
        <hr />
        <h4>Laureates</h4>
        {list.map(x => { return (<li key={JSON.stringify(x)}>{get_laureates_name(x)}</li>) })}
        <h4>Prize amount</h4>
        {data[0].prizeAmount}$ (${data[0].prizeAmountAdjusted}$ adjusted for inflation)
      </div>
    </div>
  </>)
}

export default function IndexPage() {


  const { data, isLoading, isError, category, setCategory,
    year, setYear,
    order, setOrder,
    limit, setLimit } = useApiData();

  const {
    more_data, setURL
  } = useApiMoreData();

  const [more_data_toggle, set_more_data_toggle] = useState(false);

  return (
    <>
      <SearchBar year={year} setYear={setYear} category={category} setCategory={setCategory} limit={limit} setLimit={setLimit} order={order} setOrder={setOrder} />
      <div id="app" className="row">
        <Winners data={data} isLoading={isLoading} isError={isError} set_more_url={setURL} set_more_data_toggle={set_more_data_toggle} />
      </div>
      <div id="more_data" style={{ transform: `translateY(${more_data_toggle ? "0" : "-100"}vh)` }} onClick={() => { set_more_data_toggle(false) }}>
        <MoreData data={more_data} />
        <Image id="exit_data" src="/x.svg" alt="exit" width="100" height="100" />
      </div>
    </>
  )
}