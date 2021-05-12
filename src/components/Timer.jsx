import React, { useEffect, useState } from "react";

const format = time => {
    let minutes = Math.floor(time / 60);
    if(minutes < 10)
    minutes = '0'+ minutes;
    let seconds = time % 60;
    if(seconds < 10)
    seconds = '0'+ seconds;
    return `${minutes}:${seconds}`;
};

const Timer = ({ time, autostart, step}) => {
    const [ seconds, setSeconds ] = useState(time);
    const [ isActive, setIsActive ] = useState(autostart);

    useEffect(() => {
        if (seconds > 0 && isActive) {
            let timer = null;
            if( isActive === true ) {
                timer = setInterval(() =>{
                    setSeconds( seconds - step);
                }, 1000*step);
                
            }

            return () => {
                clearInterval(timer);
            }
        }
    }, [seconds, isActive, step,]);

    return (
        <div>
            <div className='timer'>
                <time className='time'>{format(seconds)}</time>
                <button onClick={() => setIsActive(!isActive) }>{isActive ? 'stop' : 'start'}</button>
            </div>
        </div>
    );
}

export default Timer;