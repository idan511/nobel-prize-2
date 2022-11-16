export function get_laureates_name(w) {
    if (w.knownName) {
        return w.knownName.en
    } else if (w.fullName) {
        return w.fullName.en
    } else if (w.orgName) {
        return w.orgName.en
    }
    return "unknown"
}

export default function Card({ title, subtitle, list, link, handler }) {
    if (!list) {
        list = []
    }
    return (
        <div className="item" onClick={() => {handler(link)}}>
            <div className="data">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <hr />
                <ul>
                    {list.map(x => { return (<li key={JSON.stringify(x)}>{get_laureates_name(x)}</li>) })}
                </ul>
            </div>
        </div>
    )
}
