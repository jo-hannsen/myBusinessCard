import React from 'react';
import image from '../../DSCF7298.jpeg';

const Image = () => {
    return (
        <div className='flex w-screen p-5 max-w-md'>
            <img className='rounded shadow-lg' src={image} alt='foto' />
        </div>
    );
}

export default Image;