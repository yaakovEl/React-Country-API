let cnt = 0
export default function ListItme(props){
return props.list
.map(v => <li key={cnt++} >
    <img alt="flag" src={v.flags.svg} />
    {v.name.common}
    {v.capital}
    <br />
    {v.region}  </li>)
}