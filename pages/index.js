
import Message from "../components/message";
import { useApiData } from "../hooks/data";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  const records = data.teams;

  return (
    <>
      <div className="row">
        {records.map(record => {
          return <div key={record.id} className="item"><div className="content">{record.name}</div></div>
        })}
      </div>
    </>
  )
}
