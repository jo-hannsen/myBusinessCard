import React from 'react';
import MailIcon from '../../icons8-mail-24.png';

const Mailing = () => {
    return (
        <div className='flex justify-center bg-white font-semibold border-gray-600 border-2 border-solid text-lg rounded shadow-md w-2/5 py-2 hover:cursor-pointer'>
            <img src={MailIcon} alt="icon" className='mr-3' />
            <a href='mailto:raps.joh@gmail.com'>Mail</a>
        </div>
    );
}

export default Mailing;