import React from 'react';
import image from '../../DSCF7298.jpeg';

const Image = () => {
    return (
        <div className='flex justify-center p-5 max-w-md'>
            <img className='rounded shadow-lg w-5/6' src={image} alt='foto' />
        </div>
    );
}

export default Image;