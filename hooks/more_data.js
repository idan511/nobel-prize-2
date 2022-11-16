import useSWR from "swr";
import React, { useState, useEffect } from 'react';

// UseSWR needs a fetcher function.
// This is a generic one based on vanilla fetch().
const fetcher2 = (...args) => fetch(...args).then(res => res.json())

// This is just a dummy function demonstrating preferred use of useSWR
// You create your own use* function per API endpoint
// And return a consistent response object that you can use to
// showing loading and/or error screens
export function useApiMoreData() {
  const [url, setURL] = useState("https://api.nobelprize.org/2/nobelPrize/phy/2022");

  const { data, error } = useSWR(url, fetcher2)

  console.log(data)
  
  return {
    more_data: data, ismdError: error, setURL
  }
}
