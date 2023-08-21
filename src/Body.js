import ListItme from './ListItme'

export default function Body(props) {
    return <ul>
        <ListItme list={props.list} text={props.text} />
    </ul>
}