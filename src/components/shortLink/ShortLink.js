import { useContext, useState } from "react";
import { Context } from "../../context/reducer";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './shortLink.css';

function ShortLink() {
    const [copied, setCopied] = useState(false)
    const { state } = useContext(Context);
    const { shortUrl, loading, requestError, } = state

    const handelCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    if (loading) {
        return (
            <div className='short_link'>
                <p>loading...</p>
            </div>
        )
    }

    if (requestError) {
        return (
            <div className='short_link'>
                <p>{requestError}</p>
            </div>
        )
    }

    return (
        <>
            {shortUrl && (<div className='short_link'>
                <p>{shortUrl}</p>
                <CopyToClipboard text={shortUrl} onCopy={handelCopy} >
                    <button>{copied ? 'copied' : 'copy'}</button>
                </CopyToClipboard>
            </div>
            )
            }
        </>
    );
};

export default ShortLink;