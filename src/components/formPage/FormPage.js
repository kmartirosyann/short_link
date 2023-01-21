import { useState } from 'react'
import { useHttp } from '../http/useHttp'
import './formStyle.css'

function FormPage() {
    const [link, setLink] = useState('')

    const { request } = useHttp()

    const handelChange = (e) => {
        const { value } = e.target
        setLink(value)
    }

    const handelSubmit = () => {
        request(link)
        setLink('')
    }


    return (
        <div className='inputForm'>
            <h1>Url <span>Shortener</span></h1>
            <div>
                <input
                    type='text'
                    name='link'
                    placeholder='Paste a link to shorten it'
                    onChange={handelChange}
                    value={link}
                />
                <button onClick={handelSubmit}>Shorten</button>
            </div>
        </div>
    )
}

export default FormPage