import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';

const SpLoader = () => {

    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('#ffffff');
    const override = {
        color: "white",
        size: 100,
        margin: '10px auto',
        border: '2px solid #f3f3f3',
        borderRadius: '5px',
    };

  return (
    <>
        <div className=''>
            <RingLoader
                color={color}
                loading={loading}
                cssOverride={{}}
                size={80}
                aria-label="Ring"
                speedMultiplier={1}
            />
        </div>
    </>
  )
}

export default SpLoader