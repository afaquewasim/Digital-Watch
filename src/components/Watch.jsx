import React, { useState } from 'react';
import './watch.css';

const Watch = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time)

    const Utime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Utime, 1000)

    return (
        <>
            <div className="watch">
                <h1>{ctime}</h1>
            </div>
        </>
    );
}
export default Watch;