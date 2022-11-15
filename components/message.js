// We use this to render a generic message to the UI
// Usually when waiting for some data to load
export default function Message({ content }) {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  )
}
