import useSWR from "swr";
import { API_ENDPOINT } from "../config";

// UseSWR needs a fetcher function.
// This is a generic one based on vanilla fetch().
const fetcher = (...args) => fetch(...args).then(res => res.json())

// This is just a dummy function demonstrating preferred use of useSWR
// You create your own use* function per API endpoint
// And return a consistent response object that you can use to
// showing loading and/or error screens
export function useApiData() {
  const { data, error } = useSWR(API_ENDPOINT, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
