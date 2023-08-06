import React from 'react';


const BookingRow = ({ booking, handledelete, handleconfirm }) => {
    const { _id, img, title, price, date, status } = booking;





    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handledelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <p>{title}</p>

            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {status ? <button className='btn btn-sm btn-primary'>Confirmed</button>
                    :
                    <button onClick={() => handleconfirm(_id)} className='btn btn-sm p-1'>Please confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;