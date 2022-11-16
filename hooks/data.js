import useSWR from "swr";
import React, { useState, useEffect } from 'react';
import { default_category, default_year, default_order, default_limit } from "../config";

// UseSWR needs a fetcher function.
// This is a generic one based on vanilla fetch().
const fetcher = (...args) => fetch(...args).then(res => res.json())

// This is just a dummy function demonstrating preferred use of useSWR
// You create your own use* function per API endpoint
// And return a consistent response object that you can use to
// showing loading and/or error screens

export function useApiData() {
  const [category, setCategory] = useState(default_category);
  const [year, setYear] = useState(default_year);
  const [order, setOrder] = useState(default_order);
  const [limit, setLimit] = useState(default_limit);

  let url = `https://api.nobelprize.org/2.1/nobelPrizes?limit=${limit}&sort=${order}&nobelPrizeYear=${year}&nobelPrizeCategory=${category}`

  const { data, error } = useSWR(url, fetcher)
  
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    category, setCategory, 
    year, setYear, 
    order, setOrder, 
    limit, setLimit
  }
}
