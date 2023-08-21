export default function Head(props) {
    return <header>
        <h1>contris <span className="numOf">{props.numOfStates}</span></h1>
        <input className="search" type="search" onChange={(e) => props
            .setText(e.target.value)}
            placeholder="search country by name" />
    </header>
}