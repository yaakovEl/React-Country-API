import Head from './Head';
import Body from './Body';
import axios from "axios"
import { useState, useEffect } from 'react'

export default function Info() {
    const [list, setList] = useState([])
    const [text, setText] = useState('')

    function getList() {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => setList(res.data))
    }
    useEffect(getList, [])

    const filter = list.filter(v => v.name.common.toLowerCase().includes(text))
    return (
        <div>
            <Head numOfStates={filter.length}
                list={filter} setText={setText} />
            <Body list={filter} text={text} />
        </div>
    )
}